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
    // 新規イシュー作成
    {
        type: 'hover',
        id: 'hover-issue-new',
        selector: 'a[href*="/issues/new"], .js-new-issue-button',
        title: { ja: '新規イシュー' },
        description: {
            ja: '新しいイシューを作成します。バグ報告、機能リクエスト、質問などを記録できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-template',
        selector: '.js-issue-template-select, a[href*="template="]',
        title: { ja: 'イシューテンプレート' },
        description: {
            ja: '事前に定義されたイシューのフォーマット。バグ報告、機能リクエストなど用途別のテンプレートを選べます。',
        },
    },
    // イシュー状態
    {
        type: 'hover',
        id: 'hover-issue-open',
        selector: '.State--open, [data-testid="state-open"]',
        title: { ja: 'オープン' },
        description: {
            ja: 'まだ解決されていないイシュー。作業が進行中または未着手の状態です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-closed',
        selector: '.State--closed, [data-testid="state-closed"]',
        title: { ja: 'クローズ済み' },
        description: {
            ja: '解決または完了したイシュー。修正済み（紫）または対応しない（グレー）の理由で閉じられます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-close-button',
        selector: '.js-comment-and-button[value="close"], [data-testid="close-issue-button"]',
        title: { ja: 'イシューをクローズ' },
        description: {
            ja: 'イシューを解決済みとしてクローズします。コメントを追加して理由を説明することもできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-reopen',
        selector: '.js-comment-and-button[name="comment_and_open"]',
        title: { ja: 'イシューを再オープン' },
        description: {
            ja: 'クローズされたイシューを再度オープンします。追加の対応が必要な場合に使用します。',
        },
    },
    // プロジェクト連携
    {
        type: 'hover',
        id: 'hover-issue-projects',
        selector: '#projects-select-menu, .js-project-column-menu',
        title: { ja: 'プロジェクト' },
        description: {
            ja: 'イシューをプロジェクトボードに追加します。カンバン形式でタスクの進捗を管理できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-linked-prs',
        selector: '.js-issue-sidebar-form[data-linked-pr], .development-section',
        title: { ja: 'リンクされたPR' },
        description: {
            ja: 'このイシューを解決するプルリクエスト。PRがマージされるとイシューが自動的にクローズされます。',
        },
    },
    // リアクション
    {
        type: 'hover',
        id: 'hover-issue-reactions',
        selector: '.js-reaction-group-container, .comment-reactions',
        title: { ja: 'リアクション' },
        description: {
            ja: 'イシューやコメントへの絵文字リアクション。👍で賛同、🎉で祝福、😕で困惑などを表現できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-add-reaction',
        selector: '.js-add-reaction, [data-testid="add-reaction"]',
        title: { ja: 'リアクションを追加' },
        description: {
            ja: '絵文字でリアクションを追加します。コメントを残さずに意見を表明する方法です。',
        },
    },
    // タイムライン
    {
        type: 'hover',
        id: 'hover-issue-timeline',
        selector: '.js-discussion, .TimelineItem',
        title: { ja: 'タイムライン' },
        description: {
            ja: 'イシューの履歴を時系列で表示。コメント、ラベル変更、担当者変更などすべてのアクティビティを確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-comment',
        selector: '.js-comment, .timeline-comment',
        title: { ja: 'コメント' },
        description: {
            ja: 'イシューへのコメント。Markdownが使え、@メンションで特定のユーザーに通知できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-cross-reference',
        selector: '.discussion-item-ref, .TimelineItem--condensed',
        title: { ja: '相互参照' },
        description: {
            ja: '他のイシューやPRからの参照。#123形式で別のイシューにリンクすると自動的に記録されます。',
        },
    },
    // ロック・ピン
    {
        type: 'hover',
        id: 'hover-issue-lock',
        selector: '.js-lock-issue, [data-testid="lock-conversation"]',
        title: { ja: 'イシューをロック' },
        description: {
            ja: 'コメントの追加を制限します。荒らし対策や議論の終了後に使用します。メンテナのみコメント可能になります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-pin',
        selector: '.js-pin-issue, [data-testid="pin-issue"]',
        title: { ja: 'イシューをピン' },
        description: {
            ja: 'イシューリストの上部に固定表示します。重要なお知らせやFAQを目立たせるのに使用します。',
        },
    },
    // 転送
    {
        type: 'hover',
        id: 'hover-issue-transfer',
        selector: '.js-transfer-issue, [data-testid="transfer-issue"]',
        title: { ja: 'イシューを転送' },
        description: {
            ja: 'イシューを別のリポジトリに移動します。間違ったリポジトリに作成された場合に使用します。',
        },
    },
    // 検索・フィルタ
    {
        type: 'hover',
        id: 'hover-issue-filter',
        selector: '.js-issue-search, .subnav-search-input',
        title: { ja: 'イシュー検索' },
        description: {
            ja: 'イシューをキーワードで検索します。is:open、label:bug、author:usernameなどの修飾子が使えます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-filter-open-closed',
        selector: '.js-issue-state-toggle, [data-filter="open"], [data-filter="closed"]',
        title: { ja: 'オープン/クローズフィルタ' },
        description: {
            ja: 'オープン中またはクローズ済みのイシューのみを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-sort',
        selector: '.js-issue-sort-select, [aria-label*="Sort"]',
        title: { ja: 'ソート' },
        description: {
            ja: 'イシューの並び順を変更します。作成日、更新日、コメント数などで並べ替えられます。',
        },
    },
    // 一括編集
    {
        type: 'hover',
        id: 'hover-issue-bulk-edit',
        selector: '.js-bulk-actions-menu, [data-testid="issue-bulk-actions"]',
        title: { ja: '一括編集' },
        description: {
            ja: '選択した複数のイシューをまとめて編集します。ラベル追加、クローズ、マイルストーン設定などが一括でできます。',
        },
    },
    // 開発者向け
    {
        type: 'hover',
        id: 'hover-issue-development',
        selector: '.development-section-header, [data-testid="development-section"]',
        title: { ja: '開発' },
        description: {
            ja: 'このイシューに関連するブランチやPRを管理します。新しいブランチを作成してすぐに作業を開始できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-create-branch',
        selector: '.js-create-branch-from-issue, [data-testid="create-branch"]',
        title: { ja: 'ブランチを作成' },
        description: {
            ja: 'このイシュー用の新しいブランチを作成します。ブランチ名は自動的にイシュー番号を含みます。',
        },
    },
    // 通知
    {
        type: 'hover',
        id: 'hover-issue-subscribe',
        selector: '.js-subscribe-button, [data-testid="subscribe-button"]',
        title: { ja: '通知を購読' },
        description: {
            ja: 'このイシューの更新通知を受け取ります。コメント、状態変更、ラベル変更などが通知されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-issue-unsubscribe',
        selector: '.js-unsubscribe-button, [data-testid="unsubscribe-button"]',
        title: { ja: '通知を解除' },
        description: {
            ja: 'このイシューの更新通知を停止します。',
        },
    },
    // 参加者
    {
        type: 'hover',
        id: 'hover-issue-participants',
        selector: '.participation, [data-testid="participants"]',
        title: { ja: '参加者' },
        description: {
            ja: 'このイシューにコメントやアクションした全ユーザーの一覧。',
        },
    },
    // マークダウン
    {
        type: 'hover',
        id: 'hover-issue-task-list',
        selector: '.task-list, .contains-task-list',
        title: { ja: 'タスクリスト' },
        description: {
            ja: 'チェックボックス付きのタスクリスト。- [ ]で未完了、- [x]で完了。進捗がイシュー一覧に表示されます。',
        },
    },
    // サイドバー
    {
        type: 'hover',
        id: 'hover-issue-sidebar',
        selector: '.Layout-sidebar .discussion-sidebar, [data-testid="issue-sidebar"]',
        title: { ja: 'サイドバー' },
        description: {
            ja: 'イシューのメタデータを管理するパネル。担当者、ラベル、マイルストーン、プロジェクトなどを設定できます。',
        },
    },
];
