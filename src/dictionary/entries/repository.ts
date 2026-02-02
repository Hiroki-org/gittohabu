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
    {
        type: 'hover',
        id: 'hover-repo-star',
        selector: 'a[href*="/stargazers"], button[data-ga-click*="star"]',
        title: { ja: 'スター' },
        description: {
            ja: 'リポジトリをお気に入りに追加する機能。後で簡単に見つけられ、プロジェクトへの関心を示すことができます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-watch',
        selector: '.pagehead-actions li:has([data-ga-click*="watch"]), details-menu.select-menu-modal:has([value="subscribed"])',
        title: { ja: 'ウォッチ' },
        description: {
            ja: 'リポジトリの更新通知を受け取れます。イシューやPRの作成・更新時に通知が届きます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-fork',
        selector: 'a[href*="/fork"], button[data-ga-click*="fork"]',
        title: { ja: 'フォーク' },
        description: {
            ja: 'リポジトリのコピーを自分のアカウントに作成します。元のプロジェクトに影響を与えずに変更できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-contributor',
        selector: 'a[href*="/graphs/contributors"]',
        title: { ja: 'コントリビューター' },
        description: {
            ja: 'リポジトリに貢献した人々。コードのコミット、イシューの報告、プルリクエストの作成などで貢献できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-repo-release',
        selector: 'a[href*="/releases"]',
        title: { ja: 'リリース' },
        description: {
            ja: 'ソフトウェアの配布可能なバージョン。タグに関連付けられ、変更履歴やバイナリファイルを含められます。',
        },
    },
];
