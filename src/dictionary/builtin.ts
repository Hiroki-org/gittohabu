import type { Dictionary } from './schema';

export const builtinDictionary: Dictionary = {
  version: '0.1.0',
  updatedAt: new Date().toISOString(),
  entries: [
    // === テキスト置換 ===
    {
      type: 'replace',
      id: 'replace-pull-request',
      from: 'Pull request',
      to: { ja: 'プルリクエスト' },
    },
    {
      type: 'replace',
      id: 'replace-pull-requests',
      from: 'Pull requests',
      to: { ja: 'プルリクエスト' },
    },
    {
      type: 'replace',
      id: 'replace-issue',
      from: 'Issue',
      to: { ja: 'イシュー' },
    },
    {
      type: 'replace',
      id: 'replace-issues',
      from: 'Issues',
      to: { ja: 'イシュー' },
    },
    {
      type: 'replace',
      id: 'replace-repository',
      from: 'Repository',
      to: { ja: 'リポジトリ' },
    },
    {
      type: 'replace',
      id: 'replace-fork',
      from: 'Fork',
      to: { ja: 'フォーク' },
    },
    {
      type: 'replace',
      id: 'replace-branch',
      from: 'Branch',
      to: { ja: 'ブランチ' },
    },
    {
      type: 'replace',
      id: 'replace-commit',
      from: 'Commit',
      to: { ja: 'コミット' },
    },
    {
      type: 'replace',
      id: 'replace-merge',
      from: 'Merge',
      to: { ja: 'マージ' },
    },

    // === ホバー解説 ===
    {
      type: 'hover',
      id: 'hover-merge-btn',
      selector: 'button.btn-primary',
      originalLabel: 'Merge pull request',
      title: { ja: 'プルリクエストをマージ' },
      description: {
        ja: 'このプルリクエストの変更をベースブランチに取り込みます．マージ後は元のブランチを削除できます．',
      },
      urlPattern: '^https://github\\.com/.+/pull/\\d+',
    },
    {
      type: 'hover',
      id: 'hover-approve-btn',
      selector: '[data-testid="submit-review-approve-button"]',
      originalLabel: 'Approve',
      title: { ja: '承認' },
      description: {
        ja: 'このプルリクエストの変更を承認します．問題なくマージしてよいという意思表示です．',
      },
    },
    {
      type: 'hover',
      id: 'hover-request-changes-btn',
      selector: '[data-testid="submit-review-request-changes-button"]',
      originalLabel: 'Request changes',
      title: { ja: '変更をリクエスト' },
      description: {
        ja: 'マージ前に修正が必要であることを示します．具体的な修正点をコメントで伝えましょう．',
      },
    },
    {
      type: 'hover',
      id: 'hover-fork-btn',
      selector: '[data-testid="fork-button"]',
      originalLabel: 'Fork',
      title: { ja: 'フォーク' },
      description: {
        ja: 'このリポジトリのコピーを自分のアカウントに作成します．オリジナルに影響を与えずに変更を試せます．',
      },
    },
  ],
};
