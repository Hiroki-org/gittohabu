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
        selector: '[data-testid="commit-button"]',
        title: { ja: 'コミット' },
        description: {
            ja: '変更をリポジトリの履歴に記録します。コミットメッセージで変更内容を説明することが推奨されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-push',
        selector: '[data-testid="push-button"]',
        title: { ja: 'プッシュ' },
        description: {
            ja: 'ローカルのコミットをリモートリポジトリ（GitHub）に送信します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-pull',
        selector: '[data-testid="pull-button"]',
        title: { ja: 'プル' },
        description: {
            ja: 'リモートリポジトリから変更を取得し、ローカルブランチにマージします。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-fetch',
        selector: '[data-testid="fetch-button"]',
        title: { ja: 'フェッチ' },
        description: {
            ja: 'リモートリポジトリから変更を取得しますが、マージは行いません。変更を確認してから手動でマージできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-blame',
        selector: 'a[href*="/blame/"]',
        title: { ja: 'ブレーム' },
        description: {
            ja: 'ファイルの各行について、最後に変更したコミットと作者を表示します。いつ、誰が変更したかを追跡するのに便利です。',
        },
    },
    // コミット関連
    {
        type: 'hover',
        id: 'hover-git-commit-list',
        selector: 'a[href*="/commits/"], .js-commits-list',
        title: { ja: 'コミット履歴' },
        description: {
            ja: 'リポジトリのコミット履歴を時系列で表示。各コミットの内容、作者、日時を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-commit-details',
        selector: 'a[href*="/commit/"]',
        title: { ja: 'コミット詳細' },
        description: {
            ja: 'コミットの詳細情報。変更されたファイル、追加・削除された行、コミットメッセージを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-commit-sha',
        selector: '.sha, .js-clipboard-copy[data-copy-text*="sha"]',
        title: { ja: 'コミットSHA' },
        description: {
            ja: 'コミットを一意に識別する40文字のハッシュ値。7文字に短縮して表示されることが多いです。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-commit-verified',
        selector: '.commit-signature-status, [data-testid="verified-badge"]',
        title: { ja: '署名済み' },
        description: {
            ja: 'GPGまたはSSHキーで署名されたコミット。作者の身元が確認されています。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-browse-code',
        selector: '.js-browse-at-commit, [aria-label*="Browse"]',
        title: { ja: 'コードを閲覧' },
        description: {
            ja: 'このコミット時点でのリポジトリの状態を閲覧します。',
        },
    },
    // クローン
    {
        type: 'hover',
        id: 'hover-git-clone',
        selector: '.js-clone-button, [data-testid="clone-button"]',
        title: { ja: 'クローン' },
        description: {
            ja: 'リポジトリ全体をローカルにコピーします。履歴を含む完全なコピーが作成されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-clone-https',
        selector: '[data-tab="https"]',
        title: { ja: 'HTTPS' },
        description: {
            ja: 'HTTPSプロトコルでクローン。パスワードまたはPersonal Access Tokenで認証します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-clone-ssh',
        selector: '[data-tab="ssh"]',
        title: { ja: 'SSH' },
        description: {
            ja: 'SSHプロトコルでクローン。SSHキーを設定すると、プッシュ時にパスワード不要です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-clone-cli',
        selector: '[data-tab="cli"]',
        title: { ja: 'GitHub CLI' },
        description: {
            ja: 'GitHub CLIコマンドでクローン。ghコマンドがインストールされている必要があります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-download-zip',
        selector: 'a[href*="/archive/"]',
        title: { ja: 'ZIPでダウンロード' },
        description: {
            ja: 'リポジトリをZIPファイルとしてダウンロード。Git履歴は含まれません。',
        },
    },
    // 差分・比較
    {
        type: 'hover',
        id: 'hover-git-compare',
        selector: 'a[href*="/compare/"]',
        title: { ja: '比較' },
        description: {
            ja: '2つのブランチやコミット間の差分を表示。プルリクエスト作成前の確認に便利です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-diff-file',
        selector: '.file-header, .js-diff-progressive-container',
        title: { ja: 'ファイル差分' },
        description: {
            ja: 'ファイルの変更内容。緑が追加、赤が削除を示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-diff-stats',
        selector: '.diffstat, [data-testid="diffstat"]',
        title: { ja: '差分統計' },
        description: {
            ja: '追加・削除された行数の統計。緑と赤のバーで変更量を視覚化します。',
        },
    },
    // リバート・チェリーピック
    {
        type: 'hover',
        id: 'hover-git-revert',
        selector: '.js-revert-button, [data-testid="revert"]',
        title: { ja: '元に戻す' },
        description: {
            ja: 'コミットの変更を打ち消す新しいコミットを作成。履歴を保持したまま変更を取り消します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-cherry-pick',
        selector: '.js-cherry-pick, [data-testid="cherry-pick"]',
        title: { ja: 'チェリーピック' },
        description: {
            ja: '特定のコミットを別のブランチに適用します。1つのコミットだけを取り込む場合に便利です。',
        },
    },
    // 履歴表示
    {
        type: 'hover',
        id: 'hover-git-history',
        selector: 'a[data-analytics-event*="history"], [aria-label*="History"]',
        title: { ja: '履歴' },
        description: {
            ja: 'ファイルの変更履歴。過去のバージョンを確認したり、特定のコミット時点のコードを見られます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-contributors',
        selector: 'a[href*="/contributors"]',
        title: { ja: '貢献者' },
        description: {
            ja: 'リポジトリにコミットしたユーザーの一覧。コミット数や追加・削除行数でランキング表示されます。',
        },
    },
    // コミットグラフ
    {
        type: 'hover',
        id: 'hover-git-network',
        selector: 'a[href*="/network"]',
        title: { ja: 'ネットワークグラフ' },
        description: {
            ja: 'ブランチとマージの履歴を視覚的に表示。フォーク間の関係も確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-insights-commits',
        selector: 'a[href*="/graphs/commit-activity"]',
        title: { ja: 'コミット活動' },
        description: {
            ja: '時間ごとのコミット数をグラフで表示。プロジェクトの活発さを確認できます。',
        },
    },
    // ファイル操作
    {
        type: 'hover',
        id: 'hover-git-raw',
        selector: 'a[href*="/raw/"], [data-testid="raw-button"]',
        title: { ja: 'Raw' },
        description: {
            ja: 'ファイルの生データを表示。スクリプトでのダウンロードやAPIアクセスに使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-copy-path',
        selector: '.js-copy-path, [aria-label*="Copy path"]',
        title: { ja: 'パスをコピー' },
        description: {
            ja: 'ファイルの相対パスをクリップボードにコピーします。',
        },
    },
    {
        type: 'hover',
        id: 'hover-git-permalink',
        selector: '.js-permalink, [data-testid="permalink"]',
        title: { ja: 'パーマリンク' },
        description: {
            ja: '特定のコミット時点へのリンク。このリンクは将来も同じ内容を指し続けます。',
        },
    },
];
