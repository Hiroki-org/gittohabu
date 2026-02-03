/**
 * ナビゲーション・UI全般に関する日本語辞書エントリ
 * Code, Actions, Wiki, Security, Insights, Settings等
 */

import { DictionaryEntry } from '../schema';

export const navigationEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // メインナビゲーションタブ
    {
        type: 'replace',
        id: 'nav-code',
        from: 'Code',
        to: { ja: 'コード' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-actions',
        from: 'Actions',
        to: { ja: 'アクション' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-wiki',
        from: 'Wiki',
        to: { ja: 'Wiki' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-security',
        from: 'Security',
        to: { ja: 'セキュリティ' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-insights',
        from: 'Insights',
        to: { ja: 'インサイト' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-settings',
        from: 'Settings',
        to: { ja: '設定' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-discussions',
        from: 'Discussions',
        to: { ja: 'ディスカッション' },
        caseSensitive: true,
    },

    // 検索関連
    {
        type: 'replace',
        id: 'nav-search',
        from: 'Search',
        to: { ja: '検索' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-search-or-jump',
        from: 'Search or jump to',
        to: { ja: '検索またはジャンプ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-search-results',
        from: 'Search results',
        to: { ja: '検索結果' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-no-results',
        from: 'No results',
        to: { ja: '結果なし' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-filter',
        from: 'Filter',
        to: { ja: 'フィルター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-sort',
        from: 'Sort',
        to: { ja: '並び替え' },
        caseSensitive: false,
    },

    // ファイルブラウザ
    {
        type: 'replace',
        id: 'nav-go-to-file',
        from: 'Go to file',
        to: { ja: 'ファイルへ移動' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-add-file',
        from: 'Add file',
        to: { ja: 'ファイルを追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-create-new-file',
        from: 'Create new file',
        to: { ja: '新しいファイルを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-upload-files',
        from: 'Upload files',
        to: { ja: 'ファイルをアップロード' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-edit-file',
        from: 'Edit file',
        to: { ja: 'ファイルを編集' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-delete-file',
        from: 'Delete file',
        to: { ja: 'ファイルを削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-view-file',
        from: 'View file',
        to: { ja: 'ファイルを表示' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-raw',
        from: 'Raw',
        to: { ja: 'Raw' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-blame',
        from: 'Blame',
        to: { ja: 'ブレーム' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-history',
        from: 'History',
        to: { ja: '履歴' },
        caseSensitive: true,
    },

    // アクションボタン
    {
        type: 'replace',
        id: 'nav-copy',
        from: 'Copy',
        to: { ja: 'コピー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-copied',
        from: 'Copied',
        to: { ja: 'コピー済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-edit',
        from: 'Edit',
        to: { ja: '編集' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-delete',
        from: 'Delete',
        to: { ja: '削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-save',
        from: 'Save',
        to: { ja: '保存' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-cancel',
        from: 'Cancel',
        to: { ja: 'キャンセル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-submit',
        from: 'Submit',
        to: { ja: '送信' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-create',
        from: 'Create',
        to: { ja: '作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-update',
        from: 'Update',
        to: { ja: '更新' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-close',
        from: 'Close',
        to: { ja: '閉じる' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-confirm',
        from: 'Confirm',
        to: { ja: '確認' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-continue',
        from: 'Continue',
        to: { ja: '続行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-back',
        from: 'Back',
        to: { ja: '戻る' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-next',
        from: 'Next',
        to: { ja: '次へ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-previous',
        from: 'Previous',
        to: { ja: '前へ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-show-more',
        from: 'Show more',
        to: { ja: 'もっと見る' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-show-less',
        from: 'Show less',
        to: { ja: '折りたたむ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-view-all',
        from: 'View all',
        to: { ja: 'すべて表示' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-see-all',
        from: 'See all',
        to: { ja: 'すべて見る' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-load-more',
        from: 'Load more',
        to: { ja: 'さらに読み込む' },
        caseSensitive: false,
    },

    // ヘッダー関連
    {
        type: 'replace',
        id: 'nav-profile',
        from: 'Profile',
        to: { ja: 'プロフィール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-your-profile',
        from: 'Your profile',
        to: { ja: 'あなたのプロフィール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-your-repositories',
        from: 'Your repositories',
        to: { ja: 'あなたのリポジトリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-your-projects',
        from: 'Your projects',
        to: { ja: 'あなたのプロジェクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-your-stars',
        from: 'Your stars',
        to: { ja: 'あなたのスター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-your-gists',
        from: 'Your gists',
        to: { ja: 'あなたのGist' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-sign-out',
        from: 'Sign out',
        to: { ja: 'サインアウト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-sign-in',
        from: 'Sign in',
        to: { ja: 'サインイン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-sign-up',
        from: 'Sign up',
        to: { ja: 'サインアップ' },
        caseSensitive: false,
    },

    // Gist
    {
        type: 'replace',
        id: 'nav-gist',
        from: 'Gist',
        to: { ja: 'Gist' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'nav-gists',
        from: 'Gists',
        to: { ja: 'Gist' },
        caseSensitive: true,
    },

    // Explore
    {
        type: 'replace',
        id: 'nav-explore',
        from: 'Explore',
        to: { ja: '探索' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-trending',
        from: 'Trending',
        to: { ja: 'トレンド' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-topics',
        from: 'Topics',
        to: { ja: 'トピック' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-collections',
        from: 'Collections',
        to: { ja: 'コレクション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-events',
        from: 'Events',
        to: { ja: 'イベント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-sponsors',
        from: 'Sponsors',
        to: { ja: 'スポンサー' },
        caseSensitive: false,
    },

    // ステータス・インジケーター
    {
        type: 'replace',
        id: 'nav-loading',
        from: 'Loading',
        to: { ja: '読み込み中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-refreshing',
        from: 'Refreshing',
        to: { ja: '更新中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-error',
        from: 'Error',
        to: { ja: 'エラー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-success',
        from: 'Success',
        to: { ja: '成功' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-failed',
        from: 'Failed',
        to: { ja: '失敗' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-pending',
        from: 'Pending',
        to: { ja: '保留中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-in-progress',
        from: 'In progress',
        to: { ja: '進行中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'nav-completed',
        from: 'Completed',
        to: { ja: '完了' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    // リポジトリタブナビゲーション
    {
        type: 'hover',
        id: 'hover-nav-code',
        selector: 'nav[aria-label="Repository"] a[data-tab-item="i2code-tab"], a#code-tab',
        title: { ja: 'コード' },
        description: {
            ja: 'リポジトリのソースコードとファイルを閲覧できます。ブランチやタグの切り替え、ファイルのダウンロードも可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-wiki',
        selector: 'nav a[href*="/wiki"], a#wiki-tab',
        title: { ja: 'Wiki' },
        description: {
            ja: 'プロジェクトのドキュメントを共同で作成・編集できるスペース。マークダウン形式で記述し、複数ページを階層化できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-security',
        selector: 'nav a[href*="/security"], a#security-tab',
        title: { ja: 'セキュリティ' },
        description: {
            ja: 'セキュリティポリシー、依存関係の脆弱性アラート、シークレットスキャン、コードスキャンなどを管理します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-insights',
        selector: 'nav a[href*="/pulse"], nav a[href*="/graphs"], a#insights-tab',
        title: { ja: 'インサイト' },
        description: {
            ja: 'リポジトリの活動状況、コントリビューター統計、コード頻度、依存関係グラフなどの分析データを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-settings',
        selector: 'nav a[href*="/settings"], a#settings-tab',
        title: { ja: '設定' },
        description: {
            ja: 'リポジトリの設定を管理。ブランチ保護ルール、Webhook、GitHub Apps、デプロイキー、アクセス権限などを設定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-discussions',
        selector: 'nav a[href*="/discussions"], a#discussions-tab',
        title: { ja: 'ディスカッション' },
        description: {
            ja: 'コミュニティとの対話スペース。Q&A、アイデア共有、お知らせなど、イシュー以外の会話に使います。投票機能もあります。',
        },
    },

    // ヘッダーナビゲーション
    {
        type: 'hover',
        id: 'hover-nav-search',
        selector: 'button[data-target="qbsearch-input.inputButton"], input[name="q"], .header-search-wrapper',
        title: { ja: '検索バー' },
        description: {
            ja: 'GitHub全体またはリポジトリ内を検索。コード、イシュー、PR、ユーザー、リポジトリを高度なフィルタで検索できます。「/」キーでフォーカス。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-notifications',
        selector: 'a[href="/notifications"], notification-indicator',
        title: { ja: '通知' },
        description: {
            ja: 'あなた宛ての通知一覧。メンション、レビュー依頼、Watch中のリポジトリの更新などが表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-create-new',
        selector: 'details[data-target*="create-menu"], .Header-link[href="/new"]',
        title: { ja: '新規作成メニュー' },
        description: {
            ja: '新しいリポジトリ、Gist、組織、プロジェクトなどを作成するメニュー。インポートも可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-user-menu',
        selector: 'details[data-target*="header-user"], summary.Header-link img.avatar',
        title: { ja: 'ユーザーメニュー' },
        description: {
            ja: 'プロフィール、リポジトリ、スター、設定、サインアウトなどへのショートカット。テーマ切替やステータス設定もここから。',
        },
    },

    // ファイルブラウザ関連
    {
        type: 'hover',
        id: 'hover-nav-go-to-file',
        selector: 'a[data-hotkey="t"], button[aria-label*="file" i], button[data-testid="go-to-file-button"]',
        title: { ja: 'ファイルへ移動' },
        description: {
            ja: 'ファインダーを開いてファイル名で検索し、素早く移動できます。キーボードショートカット「t」でも起動可能。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-add-file',
        selector: 'details summary[aria-label*="Add file" i], [data-target="get-repo.addFileSummary"]',
        title: { ja: 'ファイル追加' },
        description: {
            ja: '新しいファイルをブラウザ上で作成するか、ローカルからアップロードできます。コミットメッセージも指定可能。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-code-button',
        selector: 'button[id*="code-dropdown"], summary[data-target="get-repo.showCloneMenuSummary"], get-repo summary.btn',
        title: { ja: 'Code ボタン' },
        description: {
            ja: 'リポジトリのクローンURL（HTTPS/SSH/CLI）を取得。GitHub Desktop/Codespacesで開く、ZIPダウンロードも可能です。',
        },
    },

    // ファイル操作ボタン
    {
        type: 'hover',
        id: 'hover-nav-raw-button',
        selector: 'a[data-view-component="true"][href*="/raw/"], a[href*="/raw/"]',
        title: { ja: 'Raw' },
        description: {
            ja: 'ファイルの生データを表示。フォーマットなしのテキストとして取得でき、直接ダウンロードも可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-blame-button',
        selector: 'a[data-view-component="true"][href*="/blame/"], a[href*="/blame/"]',
        title: { ja: 'Blame' },
        description: {
            ja: '各行を最後に変更したコミットと作者を表示。誰がいつ何のために変更したかを追跡できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-history-button',
        selector: 'a[href*="/commits/"], a[aria-label*="History" i]',
        title: { ja: '履歴' },
        description: {
            ja: 'このファイルの変更履歴（コミット一覧）を表示。過去のバージョンを確認・比較できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-edit-button',
        selector: 'a[aria-label="Edit this file"], button[aria-label*="Edit"]',
        title: { ja: 'ファイル編集' },
        description: {
            ja: 'ブラウザ上でファイルを直接編集。変更後、新しいコミットまたはPRとして保存できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-delete-button',
        selector: 'button[aria-label="Delete this file"], a[aria-label*="Delete"]',
        title: { ja: 'ファイル削除' },
        description: {
            ja: 'このファイルを削除するコミットを作成。削除理由をコミットメッセージに記載できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-copy-path',
        selector: 'clipboard-copy[aria-label*="Copy path"], button[aria-label*="Copy path"]',
        title: { ja: 'パスをコピー' },
        description: {
            ja: 'ファイルの相対パスをクリップボードにコピー。README等でリンクを作成する際に便利です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-copy-permalink',
        selector: 'clipboard-copy[aria-label*="Copy permalink"], button[aria-label*="permalink"]',
        title: { ja: 'パーマリンクをコピー' },
        description: {
            ja: '特定のコミット時点でのファイルへの永続リンクをコピー。将来ファイルが変わっても同じ内容を参照できます。',
        },
    },

    // ブランチ・タグセレクタ
    {
        type: 'hover',
        id: 'hover-nav-branch-selector',
        selector: 'summary[data-hotkey="w"], ref-selector, button[id*="branch-selector"]',
        title: { ja: 'ブランチ/タグ切替' },
        description: {
            ja: '表示するブランチやタグを切り替えます。新しいブランチの作成もここから可能。ショートカット「w」。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-compare-pr',
        selector: 'a[href*="/compare/"]',
        title: { ja: 'Compare & Pull request' },
        description: {
            ja: 'ブランチ間の差分を比較し、プルリクエストを作成します。最近プッシュしたブランチがある場合に表示されます。',
        },
    },

    // パンくずリスト
    {
        type: 'hover',
        id: 'hover-nav-breadcrumb',
        selector: 'nav[aria-label="Breadcrumb"] a, .js-path-segment',
        title: { ja: 'パンくずリスト' },
        description: {
            ja: '現在のファイル/フォルダの階層構造を表示。クリックで上位ディレクトリへ移動できます。',
        },
    },

    // フッター・About
    {
        type: 'hover',
        id: 'hover-nav-about-edit',
        selector: 'button[aria-label="Edit repository metadata"], a[href*="/settings"][aria-label*="Edit" i]',
        title: { ja: 'リポジトリ情報編集' },
        description: {
            ja: 'リポジトリの説明文、ウェブサイトURL、トピックを編集します。検索性向上のためトピック設定を推奨。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-readme',
        selector: 'article.markdown-body, .readme, #readme',
        title: { ja: 'README' },
        description: {
            ja: 'プロジェクトの概要、使い方、インストール方法などを説明するドキュメント。最初に読むべきファイルです。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-license',
        selector: 'a[href*="/blob/"][href*="LICENSE"], a.Link--muted[href*="license"]',
        title: { ja: 'ライセンス' },
        description: {
            ja: 'このリポジトリのコードのライセンス条件。商用利用、改変、再配布の可否などが定義されています。',
        },
    },

    // Explore・ダッシュボード
    {
        type: 'hover',
        id: 'hover-nav-explore',
        selector: 'a[href="/explore"]',
        title: { ja: 'Explore' },
        description: {
            ja: 'トレンドリポジトリ、トピック、コレクション、開発者を発見。新しいプロジェクトやツールを見つけられます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-marketplace',
        selector: 'a[href="/marketplace"]',
        title: { ja: 'Marketplace' },
        description: {
            ja: 'GitHub Actions、GitHub Appsなどの拡張機能を検索・インストール。CI/CD、コードレビューツールなど多数。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-trending',
        selector: 'a[href="/trending"]',
        title: { ja: 'トレンド' },
        description: {
            ja: '今日/今週/今月で人気上昇中のリポジトリ一覧。言語やトピックでフィルタ可能です。',
        },
    },

    // フィルタ・ソート
    {
        type: 'hover',
        id: 'hover-nav-filter-menu',
        selector: 'details-menu[src*="filter"], .subnav-search-context, button[aria-label*="Filter" i]',
        title: { ja: 'フィルター' },
        description: {
            ja: '一覧を条件で絞り込み。著者、ラベル、マイルストーン、レビュー状況などで検索結果を限定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-nav-sort-menu',
        selector: 'details-menu[src*="sort"], select[name="sort"], button[aria-label*="Sort" i]',
        title: { ja: '並び替え' },
        description: {
            ja: '一覧の並び順を変更。作成日、更新日、コメント数、リアクション数などで並べ替えられます。',
        },
    },

    // ページネーション
    {
        type: 'hover',
        id: 'hover-nav-pagination',
        selector: '.pagination a, [aria-label="Pagination"]',
        title: { ja: 'ページネーション' },
        description: {
            ja: '結果が複数ページにわたる場合のページ切り替え。「Previous」「Next」または番号をクリック。',
        },
    },
];
