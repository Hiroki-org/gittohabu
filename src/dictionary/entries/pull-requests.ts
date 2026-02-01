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
    // PRタブナビゲーション
    {
        type: 'hover',
        id: 'hover-pr-conversation-tab',
        selector: '#conversation-tab, [data-tab-item="conversation-tab"]',
        urlPattern: '/pull/',
        title: { ja: 'Conversationタブ' },
        description: {
            ja: 'PRの概要、説明、コメントのやり取りを表示。タイムラインでレビューやコミットの履歴を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-commits-tab',
        selector: 'a[href*="/commits"], [data-tab-item="commits-tab"]',
        title: { ja: 'Commitsタブ' },
        description: {
            ja: 'このPRに含まれるすべてのコミットを一覧表示。各コミットの詳細や差分を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-checks-tab',
        selector: 'a[href*="/checks"], [data-tab-item="checks-tab"]',
        title: { ja: 'Checksタブ' },
        description: {
            ja: 'CI/CDパイプラインの実行結果を表示。テスト、リント、ビルドなどの自動チェックの状態を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-files-changed-tab',
        selector: 'a[href*="/files"], [data-tab-item="files-changed-tab"]',
        title: { ja: 'Files changedタブ' },
        description: {
            ja: '変更されたファイルの差分を表示。追加（緑）、削除（赤）がハイライトされ、行ごとにコメントを残せます。',
        },
    },
    // Diff関連
    {
        type: 'hover',
        id: 'hover-pr-diff-view',
        selector: '.diff-view, .file-diff, [data-diff-anchor]',
        title: { ja: '差分ビュー' },
        description: {
            ja: 'ファイルの変更内容を表示。Unified（統合）とSplit（分割）の2つの表示モードがあります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-diff-unified',
        selector: '[data-action="unified"], .js-diff-style-toggle[data-value="unified"]',
        title: { ja: 'Unified表示' },
        description: {
            ja: '変更前後を1つのビューに統合表示。追加行と削除行が上下に並んで表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-diff-split',
        selector: '[data-action="split"], .js-diff-style-toggle[data-value="split"]',
        title: { ja: 'Split表示' },
        description: {
            ja: '変更前（左）と変更後（右）を左右に並べて表示。大きな変更の比較に便利です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-file-tree',
        selector: '.js-diff-progressive-container, .file-tree',
        title: { ja: 'ファイルツリー' },
        description: {
            ja: '変更されたファイルをツリー構造で表示。フォルダを展開/折りたたみして特定のファイルに素早くジャンプできます。',
        },
    },
    // レビュー関連
    {
        type: 'hover',
        id: 'hover-pr-add-review',
        selector: '.js-reviews-container [role="button"], .review-summary-button',
        title: { ja: 'レビューを追加' },
        description: {
            ja: 'ファイルの変更に対してレビューを開始。コメント、承認、変更リクエストを選んで提出できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-review-comment',
        selector: '.review-comment, .js-comment, [data-testid="review-comment"]',
        title: { ja: 'レビューコメント' },
        description: {
            ja: '特定の行やコードブロックに対するフィードバック。質問、提案、修正依頼などを記録できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-suggestion',
        selector: '.js-suggestion-button, .suggestion-blob',
        title: { ja: '提案（Suggestion）' },
        description: {
            ja: 'コードの変更を直接提案する機能。提案されたコードをワンクリックで適用できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-start-review',
        selector: 'button[name="single_comment"], .js-start-review',
        title: { ja: 'レビューを開始' },
        description: {
            ja: '複数のコメントをまとめてレビューとして提出。個別コメントではなくバッチでフィードバックを送れます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-pending-review',
        selector: '.js-pending-review-count, [data-pending-review]',
        title: { ja: '保留中のレビュー' },
        description: {
            ja: 'まだ提出されていないレビューコメント。「Submit review」で一括送信できます。',
        },
    },
    // マージ関連
    {
        type: 'hover',
        id: 'hover-pr-merge-button',
        selector: '.merge-box-button, [data-testid="merge-button"], .js-merge-box-button',
        title: { ja: 'マージボタン' },
        description: {
            ja: 'PRの変更をベースブランチに統合します。すべてのチェックが通過し、必要な承認があれば有効になります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-squash-merge',
        selector: '[data-details-container=".js-merge-pr"] [value="squash"]',
        title: { ja: 'スカッシュ＆マージ' },
        description: {
            ja: 'すべてのコミットを1つにまとめてマージ。履歴がコンパクトになり、クリーンなコミットログを維持できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-rebase-merge',
        selector: '[data-details-container=".js-merge-pr"] [value="rebase"]',
        title: { ja: 'リベース＆マージ' },
        description: {
            ja: '各コミットをベースブランチの先頭に再適用。マージコミットなしで直線的な履歴を作成します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-auto-merge',
        selector: '.js-auto-merge-box, [data-testid="enable-auto-merge"]',
        title: { ja: '自動マージ' },
        description: {
            ja: '必要な条件（レビュー承認、CIパス）が満たされたら自動的にマージ。手動での待機が不要になります。',
        },
    },
    // CIステータス関連
    {
        type: 'hover',
        id: 'hover-pr-ci-status',
        selector: '.branch-action-item .merge-status-list, .status-heading',
        title: { ja: 'CIステータス' },
        description: {
            ja: '継続的インテグレーション（CI）の結果。テスト、ビルド、リントなどの自動チェックの成否を表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-status-check-passed',
        selector: '.octicon-check.color-fg-success, .status-success',
        title: { ja: 'チェック成功' },
        description: {
            ja: '自動チェックが正常に完了しました。すべてのテストやビルドが成功しています。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-status-check-failed',
        selector: '.octicon-x.color-fg-danger, .status-failure',
        title: { ja: 'チェック失敗' },
        description: {
            ja: '自動チェックに失敗しました。詳細を確認して問題を修正する必要があります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-status-pending',
        selector: '.octicon-dot-fill.color-fg-attention, .status-pending',
        title: { ja: 'チェック実行中' },
        description: {
            ja: '自動チェックが実行中です。完了まで待つか、詳細でログを確認できます。',
        },
    },
    // コンフリクト
    {
        type: 'hover',
        id: 'hover-pr-conflicts',
        selector: '.merge-conflicts, .js-merge-conflict-message',
        title: { ja: 'コンフリクト' },
        description: {
            ja: 'ベースブランチと競合する変更があります。マージ前に手動で解決する必要があります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-resolve-conflicts',
        selector: '.js-resolve-conflicts-button, a[href*="conflicts"]',
        title: { ja: 'コンフリクトを解決' },
        description: {
            ja: 'Web上またはローカルでコンフリクトを解決できます。どちらの変更を残すか選択します。',
        },
    },
    // その他
    {
        type: 'hover',
        id: 'hover-pr-update-branch',
        selector: '.js-update-branch-form, [data-testid="update-branch-button"]',
        title: { ja: 'ブランチを更新' },
        description: {
            ja: 'ベースブランチの最新変更をPRブランチに取り込みます。コンフリクト防止や最新コードでのテストに有効です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-close',
        selector: '[data-testid="close-pull-request-button"], .js-comment-and-button[value="close"][formaction*="/pull/"]',
        urlPattern: '/pull/',
        title: { ja: 'PRをクローズ' },
        description: {
            ja: 'PRをマージせずに閉じます。変更が不要になった場合や、別のPRで対応する場合に使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-reopen',
        selector: '.js-comment-and-button[name="comment_and_open"][formaction*="/pull/"]',
        urlPattern: '/pull/',
        title: { ja: 'PRを再オープン' },
        description: {
            ja: 'クローズされたPRを再度オープンします。追加の作業が必要になった場合に使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-ready-for-review',
        selector: '.js-ready-for-review-button, [data-testid="ready-for-review"]',
        title: { ja: 'レビュー準備完了' },
        description: {
            ja: 'ドラフト状態を解除してレビュー可能にします。作業が完了し、フィードバックを受ける準備が整った時に使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-convert-to-draft',
        selector: '.js-convert-to-draft, [data-testid="convert-to-draft"]',
        title: { ja: 'ドラフトに変換' },
        description: {
            ja: 'PRをドラフト状態に戻します。追加の作業が必要な場合や、まだレビューを受けたくない場合に使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-linked-issues',
        selector: '.js-issue-sidebar-form[data-linked-issue]',
        urlPattern: '/pull/',
        title: { ja: 'リンクされたイシュー' },
        description: {
            ja: 'このPRがクローズするイシュー。「Fixes #123」のようにコミットやPR説明に書くと自動でリンクされます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-delete-branch',
        selector: '.js-delete-branch-button, [data-testid="delete-branch-button"]',
        title: { ja: 'ブランチを削除' },
        description: {
            ja: 'マージ後にPRブランチを削除します。クリーンなブランチ管理のため、マージ後の削除が推奨されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pr-restore-branch',
        selector: '.js-restore-branch-button, [data-testid="restore-branch-button"]',
        title: { ja: 'ブランチを復元' },
        description: {
            ja: '削除されたブランチを復元します。誤って削除した場合や追加の作業が必要な場合に使用します。',
        },
    },
];
