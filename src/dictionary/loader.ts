import type { Dictionary, HoverEntry, ReplaceEntry } from './schema';
import { builtinDictionary } from './builtin';

const STORAGE_KEY = 'gittohabu_user_dictionary';

/**
 * ユーザ辞書を chrome.storage.local から読み込み
 */
async function loadUserDictionary(): Promise<Dictionary['entries']> {
  return new Promise((resolve) => {
    chrome.storage.local.get(STORAGE_KEY, (result) => {
      const data = result[STORAGE_KEY];
      if (data && Array.isArray(data.entries)) {
        resolve(data.entries);
      } else {
        resolve([]);
      }
    });
  });
}

/**
 * ビルトイン + ユーザ辞書をマージして返す
 * ユーザ辞書のエントリは同一IDでビルトインを上書き
 */
export async function loadDictionary(): Promise<Dictionary> {
  const userEntries = await loadUserDictionary();
  const mergedMap = new Map<string, Dictionary['entries'][number]>();

  // ビルトインを先に登録
  for (const entry of builtinDictionary.entries) {
    mergedMap.set(entry.id, entry);
  }
  // ユーザ辞書で上書き
  for (const entry of userEntries) {
    mergedMap.set(entry.id, entry);
  }

  return {
    version: builtinDictionary.version,
    updatedAt: new Date().toISOString(),
    entries: Array.from(mergedMap.values()),
  };
}

/**
 * ホバーエントリのみ抽出
 */
export function getHoverEntries(dict: Dictionary): HoverEntry[] {
  return dict.entries.filter((entry): entry is HoverEntry => entry.type === 'hover');
}

/**
 * 置換エントリのみ抽出
 */
export function getReplaceEntries(dict: Dictionary): ReplaceEntry[] {
  return dict.entries.filter((entry): entry is ReplaceEntry => entry.type === 'replace');
}
