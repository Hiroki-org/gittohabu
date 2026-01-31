/**
 * リポジトリに関する日本語辞書エントリ
 * Repository, Fork, Clone, Star, Watch等
 */

import { DictionaryEntry } from '../schema';

export const repositoryEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Repository基本
    {
        type: 'replace',
        id: 'repo-repository',
        from: 'Repository',
        to: { ja: 'リポジトリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-repositories',
        from: 'Repositories',
        to: { ja: 'リポジトリ' },
        caseSensitive: false,
    },
    // 'Repo'は'Report'等と部分マッチするため削除
    {
        type: 'replace',
        id: 'repo-create-repository',
        from: 'Create repository',
        to: { ja: 'リポジトリを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-new-repository',
        from: 'New repository',
        to: { ja: '新しいリポジトリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-delete-repository',
        from: 'Delete repository',
        to: { ja: 'リポジトリを削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-archive-repository',
        from: 'Archive repository',
        to: { ja: 'リポジトリをアーカイブ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-public-repository',
        from: 'Public repository',
        to: { ja: 'パブリックリポジトリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-private-repository',
        from: 'Private repository',
        to: { ja: 'プライベートリポジトリ' },
        caseSensitive: false,
    },
    // Public/Privateはui-elements.tsで定義済み

    // Fork関連
    {
        type: 'replace',
        id: 'repo-fork',
        from: 'Fork',
        to: { ja: 'フォーク' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-forks',
        from: 'Forks',
        to: { ja: 'フォーク' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-forked',
        from: 'Forked',
        to: { ja: 'フォーク済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-forked-from',
        from: 'Forked from',
        to: { ja: 'フォーク元' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-create-fork',
        from: 'Create a fork',
        to: { ja: 'フォークを作成' },
        caseSensitive: false,
    },

    // Clone関連
    // NOTE: 'Clone'エントリは git-operations.ts (id: 'git-clone') にも定義されている。
    // 処理順序：allEntries (src/dictionary/entries/index.ts) では gitOperationsEntries が
    //         repositoryEntries より先に配列されているため、'git-clone' が先にマッチする。
    // 実際の動作：replacer.ts は allEntries を順序通り処理し、最初にマッチしたエントリが使用される。
    //           そのため、このエントリ (repo-clone) は実質的には機能しない。
    // 推奨：(A) このエントリを削除する、または (B) urlPattern を追加してコンテキストを区別する。
    //      例: urlPattern: '/issues?.*' として、issues/PRページのみに限定。
    {
        type: 'replace',
        id: 'repo-clone',
        from: 'Clone',
        to: { ja: 'クローン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-clone-https',
        from: 'Clone with HTTPS',
        to: { ja: 'HTTPSでクローン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-clone-ssh',
        from: 'Clone with SSH',
        to: { ja: 'SSHでクローン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-clone-cli',
        from: 'Clone with GitHub CLI',
        to: { ja: 'GitHub CLIでクローン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-download-zip',
        from: 'Download ZIP',
        to: { ja: 'ZIPをダウンロード' },
        caseSensitive: false,
    },

    // Star関連
    {
        type: 'replace',
        id: 'repo-star',
        from: 'Star',
        to: { ja: 'スター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-stars',
        from: 'Stars',
        to: { ja: 'スター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-starred',
        from: 'Starred',
        to: { ja: 'スター済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-stargazers',
        from: 'Stargazers',
        to: { ja: 'スターした人' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-unstar',
        from: 'Unstar',
        to: { ja: 'スターを外す' },
        caseSensitive: false,
    },

    // Watch関連
    {
        type: 'replace',
        id: 'repo-watch',
        from: 'Watch',
        to: { ja: 'ウォッチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-watchers',
        from: 'Watchers',
        to: { ja: 'ウォッチャー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-watching',
        from: 'Watching',
        to: { ja: 'ウォッチ中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-unwatch',
        from: 'Unwatch',
        to: { ja: 'ウォッチを外す' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-notifications',
        from: 'Notifications',
        to: { ja: '通知' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-all-activity',
        from: 'All Activity',
        to: { ja: 'すべてのアクティビティ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-participating-mentions',
        from: 'Participating and @mentions',
        to: { ja: '参加と@メンションのみ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-ignore',
        from: 'Ignore',
        to: { ja: '無視' },
        caseSensitive: false,
    },

    // Release関連
    {
        type: 'replace',
        id: 'repo-release',
        from: 'Release',
        to: { ja: 'リリース' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-releases',
        from: 'Releases',
        to: { ja: 'リリース' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-latest-release',
        from: 'Latest release',
        to: { ja: '最新リリース' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-create-release',
        from: 'Create a new release',
        to: { ja: '新しいリリースを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-draft-release',
        from: 'Draft a new release',
        to: { ja: '新しいリリースを下書き' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-pre-release',
        from: 'Pre-release',
        to: { ja: 'プレリリース' },
        caseSensitive: false,
    },

    // Tag関連
    {
        type: 'replace',
        id: 'repo-tag',
        from: 'Tag',
        to: { ja: 'タグ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-tags',
        from: 'Tags',
        to: { ja: 'タグ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-create-tag',
        from: 'Create tag',
        to: { ja: 'タグを作成' },
        caseSensitive: false,
    },

    // Contributor関連
    {
        type: 'replace',
        id: 'repo-contributor',
        from: 'Contributor',
        to: { ja: 'コントリビューター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-contributors',
        from: 'Contributors',
        to: { ja: 'コントリビューター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-contributions',
        from: 'Contributions',
        to: { ja: 'コントリビューション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-all-contributors',
        from: 'All contributors',
        to: { ja: 'すべてのコントリビューター' },
        caseSensitive: false,
    },

    // Package関連
    {
        type: 'replace',
        id: 'repo-package',
        from: 'Package',
        to: { ja: 'パッケージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-packages',
        from: 'Packages',
        to: { ja: 'パッケージ' },
        caseSensitive: false,
    },

    // Environment関連
    {
        type: 'replace',
        id: 'repo-environment',
        from: 'Environment',
        to: { ja: '環境' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-environments',
        from: 'Environments',
        to: { ja: '環境' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-deployment',
        from: 'Deployment',
        to: { ja: 'デプロイメント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-deployments',
        from: 'Deployments',
        to: { ja: 'デプロイメント' },
        caseSensitive: false,
    },

    // README関連
    {
        type: 'replace',
        id: 'repo-readme',
        from: 'README',
        to: { ja: 'README' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'repo-add-readme',
        from: 'Add a README',
        to: { ja: 'READMEを追加' },
        caseSensitive: false,
    },

    // License関連
    {
        type: 'replace',
        id: 'repo-license',
        from: 'License',
        to: { ja: 'ライセンス' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'repo-add-license',
        from: 'Add a license',
        to: { ja: 'ライセンスを追加' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    // Star/Watch/Fork - リポジトリアクション
    {
        type: 'hover',
        id: 'hover-repo-star',
        selector: '[data-view-component="true"][href$="/stargazers"], button[data-ga-click*="Star"], .starring-container button, .js-toggler-target:has(.octicon-star), .BtnGroup:has([aria-label*="Star"]) button',
        title: { ja: 'スター' },
        description: {
            ja: 'リポジトリをお気に入りに追加する機能。後で簡単に見つけられ、プロジェクトへの関心を示すことができます。スター数はプロジェクトの人気度の指標にもなります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-unstar',
        selector: '.js-toggler-target.starred, button[aria-label*="Unstar"], .BtnGroup button:has(.octicon-star-fill)',
        title: { ja: 'スター解除' },
        description: {
            ja: 'このリポジトリへのスターを外します。スターを外してもリポジトリは引き続きアクセス可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-watch',
        selector: '.js-notifications-container summary, details-menu[src*="notifications"], [data-target="notifications-list-subscription-form.menu"], summary[aria-label*="Watch"], summary[aria-label*="Notification"]',
        title: { ja: 'ウォッチ' },
        description: {
            ja: 'リポジトリの更新通知を受け取れます。「All Activity」で全通知、「Participating」で自分が参加するスレッドのみ、「Ignore」で通知を無効化できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-fork',
        selector: '[data-view-component="true"][href$="/fork"], a[href*="/forks?fragment="], button[data-ga-click*="Fork"], .forks a, a[href$="/network/members"]',
        title: { ja: 'フォーク' },
        description: {
            ja: 'リポジトリのコピーを自分のアカウントに作成します。元のプロジェクトに影響を与えずに自由に変更でき、後でプルリクエストを送って貢献できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-forked-from',
        selector: '.fork-flag a, span.text-small:has(a[data-hovercard-type="repository"])',
        title: { ja: 'フォーク元' },
        description: {
            ja: 'このリポジトリのフォーク元（オリジナル）のリポジトリへのリンク。フォークしたリポジトリは元のリポジトリとの同期が可能です。',
        },
    },

    // Clone関連
    {
        type: 'hover',
        id: 'hover-repo-clone-dropdown',
        selector: 'get-repo summary, [data-target="get-repo.dropdownButton"], summary:has(.octicon-code):has(.octicon-triangle-down), details[data-analytics-event*="code button"]',
        title: { ja: 'コードをダウンロード' },
        description: {
            ja: 'リポジトリをローカルにクローン、またはZIPでダウンロードできます。HTTPS、SSH、GitHub CLI の3つのクローン方法と、Codespacesでの開発も選択可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-clone-https',
        selector: '[data-tab="https-tab"], tab-container [role="tab"][aria-selected*="true"]:has(.octicon-copy)',
        title: { ja: 'HTTPSでクローン' },
        description: {
            ja: 'Git用のHTTPS URLを使用してクローン。認証にはユーザー名とパスワード（またはPersonal Access Token）が必要です。ファイアウォール環境でも動作しやすい方法です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-clone-ssh',
        selector: '[data-tab="ssh-tab"], [role="tab"]:has(.ssh-clone-instructions)',
        title: { ja: 'SSHでクローン' },
        description: {
            ja: 'SSH鍵を使用してクローン。事前にSSH鍵を生成してGitHubに登録する必要がありますが、毎回パスワード入力が不要になります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-clone-cli',
        selector: '[data-tab="cli-tab"], [aria-controls*="github-cli"]',
        title: { ja: 'GitHub CLIでクローン' },
        description: {
            ja: 'GitHub CLIコマンド (gh repo clone) を使用してクローン。GitHub CLIをインストールしている場合、最も簡単にクローンできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-download-zip',
        selector: 'a[href*="/archive/"], a[data-open-app*="download-link"], [data-ga-click*="Download ZIP"]',
        title: { ja: 'ZIPダウンロード' },
        description: {
            ja: 'リポジトリの現在の状態をZIPファイルとしてダウンロード。Gitを使わずにソースコードを取得できますが、バージョン管理履歴は含まれません。',
        },
    },

    // Codespaces
    {
        type: 'hover',
        id: 'hover-repo-codespaces',
        selector: '[data-target="codespace-selector.dropdownButton"], a[href*="/codespaces/new"], button[data-target="get-repo.codespaceButton"]',
        title: { ja: 'Codespaces' },
        description: {
            ja: 'クラウド上の開発環境でこのリポジトリを開発できます。ローカルにセットアップ不要で、ブラウザ上のVS Codeで即座にコーディング開始できます。',
        },
    },

    // Contributors/Insights
    {
        type: 'hover',
        id: 'hover-repo-contributor',
        selector: 'a[href*="/graphs/contributors"], a[href$="/contributors"], .BorderGrid-cell a:has(img[alt*="@"])',
        title: { ja: 'コントリビューター' },
        description: {
            ja: 'リポジトリに貢献した人々の一覧とその統計。コミット数、追加/削除行数、貢献期間などを確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-stargazers',
        selector: 'a[href$="/stargazers"], a[href*="/stargazers?"]',
        title: { ja: 'スターした人' },
        description: {
            ja: 'このリポジトリをスターしたユーザーの一覧。プロジェクトに興味を持っている人々を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-watchers',
        selector: 'a[href$="/watchers"], a[href*="/watchers?"]',
        title: { ja: 'ウォッチャー' },
        description: {
            ja: 'このリポジトリをウォッチしているユーザーの一覧。リポジトリの更新通知を受け取っている人々です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-network',
        selector: 'a[href*="/network"], a[href$="/network/members"]',
        title: { ja: 'ネットワーク' },
        description: {
            ja: 'フォークの関係を視覚的に表示。このリポジトリから派生したすべてのフォークと、それぞれの開発状況を確認できます。',
        },
    },

    // Releases/Tags
    {
        type: 'hover',
        id: 'hover-repo-release',
        selector: 'a[href*="/releases"], .BorderGrid-cell a:has(.octicon-tag), h2:has(.octicon-package) + div a',
        title: { ja: 'リリース' },
        description: {
            ja: 'ソフトウェアの配布可能なバージョン。変更履歴（CHANGELOG）、ソースコードのZIP/TAR、ビルド済みバイナリなどが含まれます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-latest-release',
        selector: 'a[href*="/releases/latest"], .release-entry [href*="/releases/tag/"]',
        title: { ja: '最新リリース' },
        description: {
            ja: '最新の安定版リリース。通常はプレリリースを除いた最新バージョンを指します。バージョン番号とリリース日を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-tag',
        selector: 'a[href*="/tags"], .subnav-item[href*="/tags"], span.css-truncate:has(.octicon-tag)',
        title: { ja: 'タグ' },
        description: {
            ja: 'Git履歴の特定のポイントに付けた目印（タグ）。リリースバージョンをマークするのに使われ、通常はv1.0.0のようなセマンティックバージョニングに従います。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-create-release',
        selector: 'a[href*="/releases/new"], button:has([data-ga-click*="Release"])',
        title: { ja: '新規リリース作成' },
        description: {
            ja: '新しいリリースを作成します。既存のタグを選択するか新規作成し、リリースノート、アセット（ビルド済みファイル）を追加できます。',
        },
    },

    // Packages
    {
        type: 'hover',
        id: 'hover-repo-packages',
        selector: 'a[href*="/packages"], .BorderGrid-cell:has(.octicon-package) a',
        title: { ja: 'パッケージ' },
        description: {
            ja: 'GitHub Packagesで公開されているパッケージの一覧。npm、Docker、Maven、NuGet、RubyGemsなどの形式で配布されています。',
        },
    },

    // Environments/Deployments
    {
        type: 'hover',
        id: 'hover-repo-environments',
        selector: 'a[href*="/deployments"], .BorderGrid-cell:has(.octicon-server) a, a[href*="/settings/environments"]',
        title: { ja: '環境（デプロイメント）' },
        description: {
            ja: 'GitHub Actionsからデプロイされた環境の一覧。production、staging、developmentなど、設定された各環境の状態とデプロイ履歴を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-deployment-status',
        selector: '.deployment-status, .branch-action-item .deployment-badge, [data-hovercard-type="deployment"]',
        title: { ja: 'デプロイ状況' },
        description: {
            ja: 'このブランチ/コミットのデプロイ状況。成功・失敗・進行中などの状態と、デプロイ先の環境を表示します。',
        },
    },

    // Topics
    {
        type: 'hover',
        id: 'hover-repo-topics',
        selector: 'a[href*="/topics/"], .topic-tag, [data-octo-click="topic_click"]',
        title: { ja: 'トピック（タグ）' },
        description: {
            ja: 'リポジトリを分類するタグ。同じトピックを持つ他のリポジトリを発見しやすくなります。クリックすると同じトピックのリポジトリ一覧が表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-add-topics',
        selector: 'button[aria-label*="topic"], .js-topics-edit-text, [data-target="topics-settings.editButton"]',
        title: { ja: 'トピックを追加' },
        description: {
            ja: 'リポジトリにトピック（分類タグ）を追加します。プログラミング言語、フレームワーク、目的などを設定すると発見されやすくなります。',
        },
    },

    // README/License
    {
        type: 'hover',
        id: 'hover-repo-readme',
        selector: 'a[href*="#readme"], #readme, article.markdown-body h1:first-child',
        title: { ja: 'README' },
        description: {
            ja: 'リポジトリの説明書。プロジェクトの概要、インストール方法、使い方、貢献方法などを記載します。Markdownで記述され、リポジトリトップに表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-license',
        selector: 'a[href*="/blob/"][href*="LICENSE"], .BorderGrid-cell:has(.octicon-law) a, [data-analytics-event*="LICENSE"]',
        title: { ja: 'ライセンス' },
        description: {
            ja: 'ソフトウェアの利用条件を定義するライセンス。MIT、Apache 2.0、GPLなど様々な種類があり、このコードをどう使用できるかが規定されています。',
        },
    },

    // About/Description
    {
        type: 'hover',
        id: 'hover-repo-about',
        selector: '.BorderGrid-cell h2.h4, .repository-content .BorderGrid-cell:first-child, [data-target="readme-toc.content"] + div',
        title: { ja: 'About（リポジトリ概要）' },
        description: {
            ja: 'リポジトリの概要説明、ウェブサイトURL、トピックが表示されるセクション。右側のサイドバーに配置され、プロジェクトの要約を提供します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-edit-about',
        selector: 'button[aria-label*="Edit repository"], [data-target="edit-repository-details.detailsButton"], .BorderGrid h2.h4 + button',
        title: { ja: 'リポジトリ詳細を編集' },
        description: {
            ja: 'リポジトリの説明、ウェブサイトURL、トピックを編集できます。リポジトリの管理者のみ編集可能です。',
        },
    },

    // Visibility badges
    {
        type: 'hover',
        id: 'hover-repo-public-badge',
        selector: '.Label--secondary:has(.octicon-repo), span.Label:contains("Public"), .repo-private-label-lockup .Label',
        title: { ja: 'パブリック' },
        description: {
            ja: 'このリポジトリは公開されており、誰でもアクセス・クローン可能です。検索結果にも表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-private-badge',
        selector: '.Label--attention:has(.octicon-lock), span.Label:contains("Private"), .private-label',
        title: { ja: 'プライベート' },
        description: {
            ja: 'このリポジトリは非公開で、招待されたコラボレーターのみがアクセスできます。検索結果には表示されません。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-archived-badge',
        selector: '.Label--warning:has(.octicon-archive), [aria-label*="archived"], .flash-warn:has(.octicon-archive)',
        title: { ja: 'アーカイブ済み' },
        description: {
            ja: 'このリポジトリは読み取り専用になっています。新しいコミット、イシュー、プルリクエストは作成できませんが、クローンやフォークは可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-template-badge',
        selector: '.Label:contains("Template"), [aria-label*="template"], .octicon-repo-template',
        title: { ja: 'テンプレート' },
        description: {
            ja: 'このリポジトリはテンプレートとして設定されています。「Use this template」から新しいリポジトリをこのテンプレートを元に作成できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-use-template',
        selector: 'a[href*="/generate"], button:has([data-ga-click*="Use this template"])',
        title: { ja: 'テンプレートを使用' },
        description: {
            ja: 'このテンプレートリポジトリを元に新しいリポジトリを作成します。フォークと異なり、履歴は継承されず新しいリポジトリとして開始されます。',
        },
    },

    // Activity
    {
        type: 'hover',
        id: 'hover-repo-activity',
        selector: 'a[href*="/activity"], .BorderGrid-cell:has(.octicon-pulse) a',
        title: { ja: 'アクティビティ' },
        description: {
            ja: 'リポジトリでの最近の活動一覧。コミット、プルリクエスト、イシュー、ディスカッションなどの更新履歴を時系列で確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-insights',
        selector: 'a[href*="/pulse"], nav[aria-label="Repository"] a[href*="/pulse"]',
        title: { ja: 'Pulse（活動状況）' },
        description: {
            ja: 'リポジトリの活動サマリー。過去1週間/1ヶ月のプルリクエスト数、イシュー数、コントリビューター数などの統計を確認できます。',
        },
    },

    // Pin repository
    {
        type: 'hover',
        id: 'hover-repo-pin',
        selector: 'form[action*="/pin"], button[aria-label*="Pin"]',
        title: { ja: 'リポジトリをピン留め' },
        description: {
            ja: 'このリポジトリをプロフィールにピン留めします。ピン留めしたリポジトリはプロフィールのトップに表示され、最大6つまで設定可能です。',
        },
    },

    // Sponsor
    {
        type: 'hover',
        id: 'hover-repo-sponsor',
        selector: 'a[href*="/sponsors/"], button.js-sponsor-button, .BorderGrid-cell:has(.octicon-heart) a',
        title: { ja: 'スポンサー' },
        description: {
            ja: 'このプロジェクトやメンテナーに対して、GitHub Sponsorsを通じて金銭的に支援できます。月額または一時払いで寄付が可能です。',
        },
    },
];
