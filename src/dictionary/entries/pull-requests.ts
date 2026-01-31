/**
 * プルリクエスト（PR）に関する日本語辞書エントリ
 * Pull request, Review, Approve, Request changes等
 */

import { DictionaryEntry } from '../schema';

export const pullRequestEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Pull Request基本
    {
        type: 'replace',
        id: 'pr-pull-request',
        from: 'Pull request',
        to: { ja: 'プルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-pull-requests',
        from: 'Pull requests',
        to: { ja: 'プルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-open-pull-request',
        from: 'Open pull request',
        to: { ja: 'オープン中のプルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-open-pull-requests',
        from: 'Open pull requests',
        to: { ja: 'オープン中のプルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-closed-pull-request',
        from: 'Closed pull request',
        to: { ja: 'クローズされたプルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-closed-pull-requests',
        from: 'Closed pull requests',
        to: { ja: 'クローズされたプルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-draft-pull-request',
        from: 'Draft pull request',
        to: { ja: 'ドラフトプルリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-create-pull-request',
        from: 'Create pull request',
        to: { ja: 'プルリクエストを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-new-pull-request',
        from: 'New pull request',
        to: { ja: '新しいプルリクエスト' },
        caseSensitive: false,
    },

    // Review関連 (長いフレーズを最初に処理して、短いサブストリングの誤マッチを防ぐ)
    {
        type: 'replace',
        id: 'pr-request-reviewers',
        from: 'Request reviewers',
        to: { ja: 'レビュアーをリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-request-review',
        from: 'Request review',
        to: { ja: 'レビューをリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-add-your-review',
        from: 'Add your review',
        to: { ja: 'レビューを追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-pending-review',
        from: 'Pending review',
        to: { ja: '保留中のレビュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-submit-review',
        from: 'Submit review',
        to: { ja: 'レビューを送信' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-reviewed',
        from: 'Reviewed',
        to: { ja: 'レビュー済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-reviewer',
        from: 'Reviewer',
        to: { ja: 'レビュアー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-reviewers',
        from: 'Reviewers',
        to: { ja: 'レビュアー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-review',
        from: 'Review',
        to: { ja: 'レビュー' },
        caseSensitive: false,
    },

    // Approve/Changes関連 (長いフレーズを最初に処理)
    {
        type: 'replace',
        id: 'pr-request-changes',
        from: 'Request changes',
        to: { ja: '変更をリクエスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-changes-requested',
        from: 'Changes requested',
        to: { ja: '変更がリクエストされました' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-approved',
        from: 'Approved',
        to: { ja: '承認済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-approve',
        from: 'Approve',
        to: { ja: '承認' },
        caseSensitive: false,
    },

    // Comment関連 (長いフレーズを最初に処理)
    {
        type: 'replace',
        id: 'pr-leave-a-comment',
        from: 'Leave a comment',
        to: { ja: 'コメントを残す' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-add-a-comment',
        from: 'Add a comment',
        to: { ja: 'コメントを追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-comments',
        from: 'Comments',
        to: { ja: 'コメント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-comment',
        from: 'Comment',
        to: { ja: 'コメント' },
        caseSensitive: false,
    },

    // Files changed関連
    {
        type: 'replace',
        id: 'pr-files-changed',
        from: 'Files changed',
        to: { ja: '変更されたファイル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-checks',
        from: 'Checks',
        to: { ja: 'チェック' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-conversation',
        from: 'Conversation',
        to: { ja: '会話' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-commits',
        from: 'Commits',
        to: { ja: 'コミット' },
        caseSensitive: false,
    },

    // ステータス
    {
        type: 'replace',
        id: 'pr-open',
        from: 'Open',
        to: { ja: 'オープン' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'pr-closed',
        from: 'Closed',
        to: { ja: 'クローズ' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'pr-draft',
        from: 'Draft',
        to: { ja: 'ドラフト' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'pr-ready-for-review',
        from: 'Ready for review',
        to: { ja: 'レビュー準備完了' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-mark-as-ready-for-review',
        from: 'Mark as ready for review',
        to: { ja: 'レビュー準備完了としてマーク' },
        caseSensitive: false,
    },

    // マージ方法
    {
        type: 'replace',
        id: 'pr-squash-and-merge',
        from: 'Squash and merge',
        to: { ja: 'スカッシュしてマージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-rebase-and-merge',
        from: 'Rebase and merge',
        to: { ja: 'リベースしてマージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-create-a-merge-commit',
        from: 'Create a merge commit',
        to: { ja: 'マージコミットを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-confirm-merge',
        from: 'Confirm merge',
        to: { ja: 'マージを確認' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'pr-confirm-squash-and-merge',
        from: 'Confirm squash and merge',
        to: { ja: 'スカッシュしてマージを確認' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-pr-nav',
        selector: 'nav a[href*="/pulls"], a.js-selected-navigation-item[data-tab-item="i1pull-requests-tab"], a[data-tab-item*="pull"], [aria-label*="Pull Request"]',
        title: { ja: 'プルリクエスト' },
        description: {
            ja: 'リポジトリへの変更を提案する機能。レビューを受けて、承認後にメインブランチにマージされます。他のコントリビューターと協力して変更内容を議論できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-reviewers',
        selector: '#reviewers-select-menu, .js-reviewer-suggestions, [data-testid="reviewers-select-menu"], [aria-label*="Reviewer"], button[aria-expanded][aria-haspopup="dialog"]',
        title: { ja: 'レビュアー' },
        description: {
            ja: 'プルリクエストの変更内容をレビューする担当者。コードの品質確認やフィードバックを行います。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-merge-options',
        selector: '.merge-message .btn-group-merge, [data-testid="merge-box"] .btn-group-merge, [data-testid="pull-request-merge-box"] buttongroup',
        title: { ja: 'マージオプション' },
        description: {
            ja: 'マージ方法を選択できます。マージコミット（履歴を保持）、スカッシュ（1つのコミットに圧縮）、リベース（履歴を直線化）から選べます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-draft',
        selector: '[data-testid="draft-badge"], .IssueLabel--draft, [aria-label*="Draft"]',
        title: { ja: 'ドラフト' },
        description: {
            ja: '作業中のプルリクエストを示します。ドラフト状態ではマージできず、準備完了になるまでレビューは任意です。',
        },
    },
];
