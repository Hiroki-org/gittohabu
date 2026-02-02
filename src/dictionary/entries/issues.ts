/**
 * Issue・ラベル・マイルストーンに関する日本語辞書エントリ
 * Issue, Label, Milestone, Assignee等
 */

import { DictionaryEntry } from '../schema';

export const issueEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Issue基本
    {
        type: 'replace',
        id: 'issue-issue',
        from: 'Issue',
        to: { ja: 'イシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-issues',
        from: 'Issues',
        to: { ja: 'イシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-open-issue',
        from: 'Open issue',
        to: { ja: 'オープン中のイシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-open-issues',
        from: 'Open issues',
        to: { ja: 'オープン中のイシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-closed-issue',
        from: 'Closed issue',
        to: { ja: 'クローズされたイシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-closed-issues',
        from: 'Closed issues',
        to: { ja: 'クローズされたイシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-new-issue',
        from: 'New issue',
        to: { ja: '新しいイシュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-create-issue',
        from: 'Create issue',
        to: { ja: 'イシューを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-submit-new-issue',
        from: 'Submit new issue',
        to: { ja: '新しいイシューを送信' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-close-issue',
        from: 'Close issue',
        to: { ja: 'イシューをクローズ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-reopen-issue',
        from: 'Reopen issue',
        to: { ja: 'イシューを再オープン' },
        caseSensitive: false,
    },

    // Label関連
    {
        type: 'replace',
        id: 'issue-label',
        from: 'Label',
        to: { ja: 'ラベル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-labels',
        from: 'Labels',
        to: { ja: 'ラベル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-add-labels',
        from: 'Add labels',
        to: { ja: 'ラベルを追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-edit-labels',
        from: 'Edit labels',
        to: { ja: 'ラベルを編集' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-new-label',
        from: 'New label',
        to: { ja: '新しいラベル' },
        caseSensitive: false,
    },

    // 一般的なラベル名
    {
        type: 'replace',
        id: 'issue-label-bug',
        from: 'bug',
        to: { ja: 'バグ' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-enhancement',
        from: 'enhancement',
        to: { ja: '機能改善' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-documentation',
        from: 'documentation',
        to: { ja: 'ドキュメント' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-good-first-issue',
        from: 'good first issue',
        to: { ja: '初心者向け' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-label-help-wanted',
        from: 'help wanted',
        to: { ja: '助けを求む' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-label-invalid',
        from: 'invalid',
        to: { ja: '無効' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-question',
        from: 'question',
        to: { ja: '質問' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-wontfix',
        from: 'wontfix',
        to: { ja: '対応しない' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'issue-label-duplicate',
        from: 'duplicate',
        to: { ja: '重複' },
        caseSensitive: true,
    },

    // Milestone関連
    {
        type: 'replace',
        id: 'issue-milestone',
        from: 'Milestone',
        to: { ja: 'マイルストーン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-milestones',
        from: 'Milestones',
        to: { ja: 'マイルストーン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-add-to-milestone',
        from: 'Add to milestone',
        to: { ja: 'マイルストーンに追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-new-milestone',
        from: 'New milestone',
        to: { ja: '新しいマイルストーン' },
        caseSensitive: false,
    },

    // Assignee関連
    {
        type: 'replace',
        id: 'issue-assignee',
        from: 'Assignee',
        to: { ja: '担当者' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-assignees',
        from: 'Assignees',
        to: { ja: '担当者' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-assign',
        from: 'Assign',
        to: { ja: 'アサイン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-assigned',
        from: 'Assigned',
        to: { ja: 'アサイン済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-assign-yourself',
        from: 'Assign yourself',
        to: { ja: '自分をアサイン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-no-one-assigned',
        from: 'No one assigned',
        to: { ja: '担当者なし' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-no-assignee',
        from: 'No assignee',
        to: { ja: '担当者なし' },
        caseSensitive: false,
    },

    // Project関連
    {
        type: 'replace',
        id: 'issue-project',
        from: 'Project',
        to: { ja: 'プロジェクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-projects',
        from: 'Projects',
        to: { ja: 'プロジェクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-add-to-project',
        from: 'Add to project',
        to: { ja: 'プロジェクトに追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-linked-pull-requests',
        from: 'Linked pull requests',
        to: { ja: 'リンクされたプルリクエスト' },
        caseSensitive: false,
    },

    // Mention関連
    {
        type: 'replace',
        id: 'issue-at-mention',
        from: '@mention',
        to: { ja: '@メンション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-mention',
        from: 'Mention',
        to: { ja: 'メンション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'issue-mentioned',
        from: 'Mentioned',
        to: { ja: 'メンションされた' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-issue-nav',
        selector: 'nav a[href*="/issues"], a.js-selected-navigation-item[data-tab-item="i0issues-tab"]',
        title: { ja: 'イシュー' },
        description: {
            ja: 'バグ報告、機能要望、タスク管理などに使う追跡システム。プロジェクトの問題や要望を記録し、議論するための場所です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-labels',
        selector: '#labels-select-menu, .js-label-select-menu',
        title: { ja: 'ラベル' },
        description: {
            ja: 'イシューやプルリクエストを分類するためのタグ。バグ、機能改善、ドキュメントなどでフィルタリングできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-milestone',
        selector: '#milestone-select-menu, .js-milestone-select-menu',
        title: { ja: 'マイルストーン' },
        description: {
            ja: 'イシューやプルリクエストをグループ化して、リリースや目標に向けた進捗を追跡するための機能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-assignee',
        selector: '#assignee-select-menu, .js-issue-sidebar-form:has(#assignees)',
        title: { ja: '担当者' },
        description: {
            ja: 'イシューやプルリクエストの作業を担当するユーザー。複数人を割り当てることもできます。',
        },
    },
];
