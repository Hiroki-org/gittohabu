import type { DictionaryEntry, HoverEntry, ReplaceEntry } from '../dictionary/schema';
import { builtinDictionary } from '../dictionary/builtin';
import { isDictionaryEntry } from '../dictionary/loader';

type EntryKind = DictionaryEntry['type'];

const STORAGE_KEY = 'gittohabu_user_dictionary';

const entryList = document.getElementById('entry-list');
const entryForm = document.getElementById('entry-form') as HTMLFormElement | null;
const resetButton = document.getElementById('reset-form') as HTMLButtonElement | null;
const cancelEditButton = document.getElementById('cancel-edit') as HTMLButtonElement | null;

const entryTypeSelect = document.getElementById('entry-type') as HTMLSelectElement | null;
const entryIdInput = document.getElementById('entry-id') as HTMLInputElement | null;
const entryUrlInput = document.getElementById('entry-url') as HTMLInputElement | null;
const entryFormTitle = document.getElementById('entry-form-title');

const replaceFields = document.getElementById('replace-fields');
const replaceFromInput = document.getElementById('replace-from') as HTMLInputElement | null;
const replaceToInput = document.getElementById('replace-to') as HTMLInputElement | null;
const replaceCaseSelect = document.getElementById('replace-case') as HTMLSelectElement | null;

const hoverFields = document.getElementById('hover-fields');
const hoverSelectorInput = document.getElementById('hover-selector') as HTMLInputElement | null;
const hoverTitleInput = document.getElementById('hover-title') as HTMLInputElement | null;
const hoverDescriptionInput = document.getElementById('hover-description') as HTMLTextAreaElement | null;
const hoverOriginalInput = document.getElementById('hover-original') as HTMLInputElement | null;

let userEntries: DictionaryEntry[] = [];
let editingId: string | null = null;

/**
 * NOTE: 現状は日本語固定の辞書のみを扱うため "ja" 固定で返す。
 * 将来的に多言語対応する場合は、言語コードを引数で受け取れるようにする。
 */
function getLocalizedText(value: string): { ja: string } {
  return { ja: value };
}

function setFieldsVisibility(type: EntryKind): void {
  if (replaceFields) {
    replaceFields.classList.toggle('hidden', type !== 'replace');
  }
  if (hoverFields) {
    hoverFields.classList.toggle('hidden', type !== 'hover');
  }
  const isReplace = type === 'replace';
  if (replaceFromInput) {
    replaceFromInput.required = isReplace;
    replaceFromInput.setAttribute('aria-invalid', 'false');
  }
  if (replaceToInput) {
    replaceToInput.required = isReplace;
    replaceToInput.setAttribute('aria-invalid', 'false');
  }
  const isHover = type === 'hover';
  if (hoverSelectorInput) {
    hoverSelectorInput.required = isHover;
    hoverSelectorInput.setAttribute('aria-invalid', 'false');
  }
  if (hoverTitleInput) {
    hoverTitleInput.required = isHover;
    hoverTitleInput.setAttribute('aria-invalid', 'false');
  }
  if (hoverDescriptionInput) {
    hoverDescriptionInput.required = isHover;
    hoverDescriptionInput.setAttribute('aria-invalid', 'false');
  }
}

function resetForm(): void {
  editingId = null;
  entryForm?.reset();
  if (entryTypeSelect) {
    entryTypeSelect.value = 'replace';
    setFieldsVisibility('replace');
  }
  if (cancelEditButton) {
    cancelEditButton.classList.add('hidden');
  }
  if (entryFormTitle) {
    entryFormTitle.textContent = '新規エントリ';
  }
}

function validateEntry(): string | null {
  const type = entryTypeSelect?.value as EntryKind | undefined;
  if (!type) {
    return 'タイプを選択してください。';
  }
  if (!entryIdInput?.value.trim()) {
    return 'IDは必須です。';
  }
  if (type === 'replace') {
    if (!replaceFromInput || !replaceToInput) {
      return '置換前/置換後のテキストは必須です。';
    }
    const fromValue = replaceFromInput.value.trim();
    const toValue = replaceToInput.value.trim();
    const missing = fromValue.length === 0 || toValue.length === 0;
    replaceFromInput.setAttribute('aria-invalid', missing ? 'true' : 'false');
    replaceToInput.setAttribute('aria-invalid', missing ? 'true' : 'false');
    if (missing) {
      return '置換前/置換後のテキストは必須です。';
    }
  }
  if (type === 'hover') {
    if (!hoverSelectorInput || !hoverTitleInput || !hoverDescriptionInput) {
      return 'ホバー解説の必須項目を入力してください。';
    }
    const selectorValue = hoverSelectorInput.value.trim();
    const titleValue = hoverTitleInput.value.trim();
    const descriptionValue = hoverDescriptionInput.value.trim();
    const missing =
      selectorValue.length === 0 || titleValue.length === 0 || descriptionValue.length === 0;
    hoverSelectorInput.setAttribute('aria-invalid', missing ? 'true' : 'false');
    hoverTitleInput.setAttribute('aria-invalid', missing ? 'true' : 'false');
    hoverDescriptionInput.setAttribute('aria-invalid', missing ? 'true' : 'false');
    if (missing) {
      return 'ホバー解説の必須項目を入力してください。';
    }
  }
  return null;
}

function buildEntry(): DictionaryEntry | null {
  const type = entryTypeSelect?.value as EntryKind | undefined;
  if (!type || !entryIdInput) {
    return null;
  }
  const id = entryIdInput.value.trim();
  const urlPattern = entryUrlInput?.value.trim() || '';

  if (type === 'replace') {
    if (!replaceFromInput || !replaceToInput || !replaceCaseSelect) {
      return null;
    }
    return {
      type,
      id,
      from: replaceFromInput.value.trim(),
      to: getLocalizedText(replaceToInput.value.trim()),
      caseSensitive: replaceCaseSelect.value !== 'false',
      urlPattern: urlPattern || undefined,
    } satisfies ReplaceEntry;
  }

  if (
    !hoverSelectorInput ||
    !hoverTitleInput ||
    !hoverDescriptionInput ||
    !hoverOriginalInput
  ) {
    return null;
  }

  return {
    type,
    id,
    selector: hoverSelectorInput.value.trim(),
    title: getLocalizedText(hoverTitleInput.value.trim()),
    description: getLocalizedText(hoverDescriptionInput.value.trim()),
    originalLabel: hoverOriginalInput.value.trim() || undefined,
    urlPattern: urlPattern || undefined,
  } satisfies HoverEntry;
}

function saveUserEntries(entries: DictionaryEntry[]): void {
  userEntries = entries;
  chrome.storage.local.set({ [STORAGE_KEY]: entries }, () => {
    if (chrome.runtime.lastError) {
      console.error(
        '[gittohabu] ユーザ辞書の保存に失敗しました:',
        chrome.runtime.lastError.message,
      );
      alert('保存に失敗しました。もう一度お試しください。');
      return;
    }
    renderList();
  });
}

function formatEntrySummary(entry: DictionaryEntry): string {
  if (entry.type === 'replace') {
    return `"${entry.from}" → "${entry.to?.ja ?? ''}"`;
  }
  return entry.title?.ja ?? '';
}

function renderList(): void {
  if (!entryList) return;
  entryList.replaceChildren();

  const builtins = builtinDictionary.entries;
  const builtinMap = new Map(builtins.map((entry) => [entry.id, entry]));
  const userMap = new Map(userEntries.map((entry) => [entry.id, entry]));
  const mergedEntries = new Map(builtinMap);
  for (const entry of userEntries) {
    mergedEntries.set(entry.id, entry);
  }
  const allEntries = Array.from(mergedEntries.values());

  if (allEntries.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'エントリがありません。';
    entryList.append(empty);
    return;
  }

  for (const entry of allEntries) {
    const isBuiltin = builtinMap.has(entry.id) && !userMap.has(entry.id);
    const card = document.createElement('div');
    card.className = 'card';

    const header = document.createElement('div');
    header.className = 'card-header';

    const info = document.createElement('div');
    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = entry.id;

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.textContent = `${entry.type === 'replace' ? '置換' : 'ホバー'} · ${formatEntrySummary(entry)}`;

    info.append(title, meta);

    const actions = document.createElement('div');
    actions.className = 'actions';

    if (isBuiltin) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = 'ビルトイン';
      actions.append(badge);
    } else {
      const editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.textContent = '編集';
      editButton.addEventListener('click', () => startEdit(entry));

      const deleteButton = document.createElement('button');
      deleteButton.type = 'button';
      deleteButton.className = 'danger';
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', () => {
        if (confirm('このエントリを削除しますか？')) {
          saveUserEntries(userEntries.filter((item) => item.id !== entry.id));
        }
      });

      actions.append(editButton, deleteButton);
    }

    header.append(info, actions);
    card.append(header);
    entryList.append(card);
  }
}

function startEdit(entry: DictionaryEntry): void {
  editingId = entry.id;
  if (!entryTypeSelect || !entryIdInput) {
    return;
  }
  entryTypeSelect.value = entry.type;
  entryIdInput.value = entry.id;
  if (entryUrlInput) {
    entryUrlInput.value = entry.urlPattern ?? '';
  }

  if (entry.type === 'replace') {
    if (!replaceFromInput || !replaceToInput || !replaceCaseSelect) {
      return;
    }
    replaceFromInput.value = entry.from;
    replaceToInput.value = entry.to.ja ?? '';
    replaceCaseSelect.value = entry.caseSensitive === false ? 'false' : 'true';
  } else {
    if (!hoverSelectorInput || !hoverTitleInput || !hoverDescriptionInput) {
      return;
    }
    hoverSelectorInput.value = entry.selector;
    hoverTitleInput.value = entry.title.ja ?? '';
    hoverDescriptionInput.value = entry.description.ja ?? '';
    if (hoverOriginalInput) {
      hoverOriginalInput.value = entry.originalLabel ?? '';
    }
  }
  setFieldsVisibility(entry.type);
  cancelEditButton?.classList.remove('hidden');
  if (entryFormTitle) {
    entryFormTitle.textContent = 'エントリを編集';
  }
}

function loadUserEntries(): void {
  chrome.storage.local.get(STORAGE_KEY, (result) => {
    if (chrome.runtime.lastError) {
      userEntries = [];
      renderList();
      return;
    }
    const stored = result[STORAGE_KEY];
    if (Array.isArray(stored)) {
      userEntries = stored.filter(isDictionaryEntry);
    } else if (stored && Array.isArray(stored.entries)) {
      userEntries = stored.entries.filter(isDictionaryEntry);
    } else {
      userEntries = [];
    }
    renderList();
  });
}

entryTypeSelect?.addEventListener('change', () => {
  setFieldsVisibility(entryTypeSelect.value as EntryKind);
});

entryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const error = validateEntry();
  if (error) {
    alert(error);
    return;
  }
  const entry = buildEntry();
  if (!entry) return;

  let nextEntries = [...userEntries];
  if (editingId && editingId !== entry.id) {
    nextEntries = nextEntries.filter((item) => item.id !== editingId);
  }
  const existingIndex = nextEntries.findIndex((item) => item.id === entry.id);
  if (existingIndex >= 0) {
    const isEditingSame = editingId === entry.id;
    if (!isEditingSame) {
      const builtins = builtinDictionary.entries;
      const isBuiltin = builtins.some((item) => item.id === entry.id);
      const message = isBuiltin
        ? 'ビルトインのIDと同じため上書きします。続行しますか？'
        : '同じIDのエントリを上書きしますか？';
      if (!confirm(message)) {
        return;
      }
    }
    nextEntries[existingIndex] = entry;
  } else {
    nextEntries.push(entry);
  }
  saveUserEntries(nextEntries);
  resetForm();
});

resetButton?.addEventListener('click', () => resetForm());
cancelEditButton?.addEventListener('click', () => resetForm());

resetForm();
loadUserEntries();
