/**
 * Git基本操作に関する日本語辞書エントリ
 * Push, Pull, Commit, Clone, Fetch, Merge, Rebase等
 */

import { DictionaryEntry } from '../schema';

export const gitOperationsEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Commit関連
    {
        type: 'replace',
        id: 'git-commit',
        from: 'Commit',
        to: { ja: 'コミット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-commits',
        from: 'Commits',
        to: { ja: 'コミット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-committed',
        from: 'Committed',
        to: { ja: 'コミット済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-commit-message',
        from: 'Commit message',
        to: { ja: 'コミットメッセージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-commit-id',
        from: 'Commit ID',
        to: { ja: 'コミットID' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-commit-author',
        from: 'Commit author',
        to: { ja: 'コミット作成者' },
        caseSensitive: false,
    },

    // Push関連
    {
        type: 'replace',
        id: 'git-push',
        from: 'Push',
        to: { ja: 'プッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-pushed',
        from: 'Pushed',
        to: { ja: 'プッシュ済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-force-push',
        from: 'Force push',
        to: { ja: '強制プッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-push-access',
        from: 'Push access',
        to: { ja: 'プッシュ権限' },
        caseSensitive: false,
    },

    // Pull関連
    {
        type: 'replace',
        id: 'git-pull',
        from: 'Pull',
        to: { ja: 'プル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-pull-access',
        from: 'Pull access',
        to: { ja: 'プル権限' },
        caseSensitive: false,
    },

    // Fetch関連
    {
        type: 'replace',
        id: 'git-fetch',
        from: 'Fetch',
        to: { ja: 'フェッチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-fetched',
        from: 'Fetched',
        to: { ja: 'フェッチ済み' },
        caseSensitive: false,
    },

    // Clone関連
    {
        type: 'replace',
        id: 'git-clone',
        from: 'Clone',
        to: { ja: 'クローン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-cloned',
        from: 'Cloned',
        to: { ja: 'クローン済み' },
        caseSensitive: false,
    },

    // Checkout関連
    {
        type: 'replace',
        id: 'git-checkout',
        from: 'Checkout',
        to: { ja: 'チェックアウト' },
        caseSensitive: false,
    },

    // Stash関連
    {
        type: 'replace',
        id: 'git-stash',
        from: 'Stash',
        to: { ja: 'スタッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-stashed',
        from: 'Stashed',
        to: { ja: 'スタッシュ済み' },
        caseSensitive: false,
    },

    // Diff関連
    {
        type: 'replace',
        id: 'git-diff',
        from: 'Diff',
        to: { ja: '差分' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-diffs',
        from: 'Diffs',
        to: { ja: '差分' },
        caseSensitive: false,
    },

    // Blame関連
    {
        type: 'replace',
        id: 'git-blame',
        from: 'Blame',
        to: { ja: 'ブレーム' },
        caseSensitive: false,
    },

    // Revert関連
    {
        type: 'replace',
        id: 'git-revert',
        from: 'Revert',
        to: { ja: '元に戻す' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-reverted',
        from: 'Reverted',
        to: { ja: '元に戻しました' },
        caseSensitive: false,
    },

    // Cherry-pick関連
    {
        type: 'replace',
        id: 'git-cherry-pick',
        from: 'Cherry-pick',
        to: { ja: 'チェリーピック' },
        caseSensitive: false,
    },

    // Squash関連
    {
        type: 'replace',
        id: 'git-squash',
        from: 'Squash',
        to: { ja: 'スカッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-squash-and-merge',
        from: 'Squash and merge',
        to: { ja: 'スカッシュしてマージ' },
        caseSensitive: false,
    },

    // Rebase関連
    {
        type: 'replace',
        id: 'git-rebase',
        from: 'Rebase',
        to: { ja: 'リベース' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'git-rebase-and-merge',
        from: 'Rebase and merge',
        to: { ja: 'リベースしてマージ' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-git-commit',
        selector: '[data-testid="commit-button"], button:has-text("Commit")',
        title: { ja: 'コミット' },
        description: {
            ja: '変更をリポジトリの履歴に記録します。コミットメッセージで変更内容を説明することが推奨されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-push',
        selector: '[data-testid="push-button"], button:has-text("Push")',
        title: { ja: 'プッシュ' },
        description: {
            ja: 'ローカルのコミットをリモートリポジトリ（GitHub）に送信します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-pull',
        selector: '[data-testid="pull-button"], button:has-text("Pull")',
        title: { ja: 'プル' },
        description: {
            ja: 'リモートリポジトリから変更を取得し、ローカルブランチにマージします。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-fetch',
        selector: '[data-testid="fetch-button"], button:has-text("Fetch")',
        title: { ja: 'フェッチ' },
        description: {
            ja: 'リモートリポジトリから変更を取得しますが、マージは行いません。変更を確認してから手動でマージできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-blame',
        selector: 'a[href*="/blame/"], button:has-text("Blame")',
        title: { ja: 'ブレーム' },
        description: {
            ja: 'ファイルの各行について、最後に変更したコミットと作者を表示します。いつ、誰が変更したかを追跡するのに便利です。',
        },
    },
];
