/**
 * ブランチ・マージに関する日本語辞書エントリ
 * Branch, Merge, Default branch, Protected branch等
 */

import { DictionaryEntry } from '../schema';

export const branchEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Branch関連
    {
        type: 'replace',
        id: 'branch',
        from: 'Branch',
        to: { ja: 'ブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'branches',
        from: 'Branches',
        to: { ja: 'ブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'default-branch',
        from: 'Default branch',
        to: { ja: 'デフォルトブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'protected-branch',
        from: 'Protected branch',
        to: { ja: '保護されたブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'protected-branches',
        from: 'Protected branches',
        to: { ja: '保護されたブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'feature-branch',
        from: 'Feature branch',
        to: { ja: 'フィーチャーブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'topic-branch',
        from: 'Topic branch',
        to: { ja: 'トピックブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'base-branch',
        from: 'Base branch',
        to: { ja: 'ベースブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'head-branch',
        from: 'Head branch',
        to: { ja: 'ヘッドブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'compare-branch',
        from: 'Compare branch',
        to: { ja: '比較ブランチ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'branch-protection',
        from: 'Branch protection',
        to: { ja: 'ブランチ保護' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'branch-restriction',
        from: 'Branch restriction',
        to: { ja: 'ブランチ制限' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'create-branch',
        from: 'Create branch',
        to: { ja: 'ブランチを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'delete-branch',
        from: 'Delete branch',
        to: { ja: 'ブランチを削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'rename-branch',
        from: 'Rename branch',
        to: { ja: 'ブランチ名を変更' },
        caseSensitive: false,
    },

    // Merge関連
    {
        type: 'replace',
        id: 'merge',
        from: 'Merge',
        to: { ja: 'マージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'merged',
        from: 'Merged',
        to: { ja: 'マージ済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'merge-conflict',
        from: 'Merge conflict',
        to: { ja: 'マージコンフリクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'merge-conflicts',
        from: 'Merge conflicts',
        to: { ja: 'マージコンフリクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'merge-pull-request',
        from: 'Merge pull request',
        to: { ja: 'プルリクエストをマージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'create-merge-commit',
        from: 'Create a merge commit',
        to: { ja: 'マージコミットを作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'fast-forward',
        from: 'Fast-forward',
        to: { ja: 'ファストフォワード' },
        caseSensitive: false,
    },

    // HEAD関連
    {
        type: 'replace',
        id: 'head',
        from: 'HEAD',
        to: { ja: 'HEAD' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'detached-head',
        from: 'Detached HEAD',
        to: { ja: 'デタッチドHEAD' },
        caseSensitive: false,
    },

    // Upstream関連
    {
        type: 'replace',
        id: 'upstream',
        from: 'Upstream',
        to: { ja: 'アップストリーム' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'upstream-branch',
        from: 'Upstream branch',
        to: { ja: 'アップストリームブランチ' },
        caseSensitive: false,
    },

    // Remote/Origin関連
    {
        type: 'replace',
        id: 'remote',
        from: 'Remote',
        to: { ja: 'リモート' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'origin',
        from: 'Origin',
        to: { ja: 'オリジン' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-merge',
        selector: '[data-testid="merge-button"], .merge-btn',
        title: { ja: 'マージ' },
        description: {
            ja: '別のブランチの変更を現在のブランチに統合します。コンフリクトがある場合は手動での解決が必要です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branches',
        selector: 'a[href*="/branches"]',
        title: { ja: 'ブランチ' },
        description: {
            ja: 'ブランチは独立した開発ラインです。メインの開発ラインに影響を与えずに機能開発やバグ修正を行えます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-default-branch',
        selector: '[data-testid="default-branch"]',
        title: { ja: 'デフォルトブランチ' },
        description: {
            ja: 'プルリクエストやコードプッシュの既定の対象となるブランチ。通常は main または master です。',
        },
    },
    // ブランチ一覧・管理
    {
        type: 'hover',
        id: 'hover-branch-overview',
        selector: '.Box-row .branch-name, [data-testid="branch-name"]',
        title: { ja: 'ブランチ名' },
        description: {
            ja: 'ブランチの識別名。クリックするとそのブランチのコードを閲覧できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-active',
        selector: '.branch-type-active, [data-tab="active"]',
        title: { ja: 'アクティブ' },
        description: {
            ja: '最近コミットがあったブランチ。活発に開発中のブランチです。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-stale',
        selector: '.branch-type-stale, [data-tab="stale"]',
        title: { ja: '古いブランチ' },
        description: {
            ja: '3ヶ月以上更新がないブランチ。不要であれば削除を検討してください。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-all',
        selector: '[data-tab="all"]',
        title: { ja: 'すべてのブランチ' },
        description: {
            ja: 'リポジトリ内のすべてのブランチを一覧表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-yours',
        selector: '[data-tab="yours"]',
        title: { ja: 'あなたのブランチ' },
        description: {
            ja: 'あなたが作成したブランチのみを表示します。',
        },
    },
    // ブランチ操作
    {
        type: 'hover',
        id: 'hover-branch-create',
        selector: 'button[data-hydro-click*="create_branch"], .js-new-branch-button',
        title: { ja: 'ブランチを作成' },
        description: {
            ja: '新しいブランチを作成。現在のブランチの状態から分岐した開発ラインを作成します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-delete',
        selector: '.js-branch-delete-button, [aria-label*="Delete branch"]',
        title: { ja: 'ブランチを削除' },
        description: {
            ja: '不要なブランチを削除。マージ済みのブランチは削除しても問題ありません。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-restore',
        selector: '.js-branch-restore, [aria-label*="Restore"]',
        title: { ja: '復元' },
        description: {
            ja: '削除したブランチを復元します。削除後しばらくの間は復元可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-rename',
        selector: '[aria-label*="Rename branch"]',
        title: { ja: 'ブランチ名を変更' },
        description: {
            ja: 'ブランチの名前を変更します。参照しているプルリクエストは自動更新されます。',
        },
    },
    // ブランチ保護
    {
        type: 'hover',
        id: 'hover-branch-protection',
        selector: 'a[href*="/settings/branch_protection"], .js-protected-branches',
        title: { ja: 'ブランチ保護' },
        description: {
            ja: 'ブランチに保護ルールを設定。強制プッシュの禁止やレビュー必須などを設定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-protection-rule',
        selector: '.branch-protection-rule, [data-testid="branch-rule"]',
        title: { ja: '保護ルール' },
        description: {
            ja: 'ブランチに適用される保護ルール。パターンマッチでブランチを指定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-require-status-check',
        selector: '[name="required_status_checks"]',
        title: { ja: 'ステータスチェック必須' },
        description: {
            ja: 'マージ前にCIテストやチェックの成功を要求します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-require-review',
        selector: '[name="required_pull_request_reviews"]',
        title: { ja: 'レビュー必須' },
        description: {
            ja: 'マージ前にプルリクエストのレビュー承認を要求します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-require-signed-commits',
        selector: '[name="required_signatures"]',
        title: { ja: '署名付きコミット必須' },
        description: {
            ja: 'GPGまたはSSHで署名されたコミットのみを受け入れます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-dismiss-stale-reviews',
        selector: '[name="dismiss_stale_reviews"]',
        title: { ja: '古いレビューを無効化' },
        description: {
            ja: '新しいコミットがプッシュされると、既存のレビュー承認を無効化します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-restrict-pushes',
        selector: '[name="restrict_pushes"]',
        title: { ja: 'プッシュ制限' },
        description: {
            ja: '特定のユーザーまたはチームのみがブランチにプッシュできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-block-force-push',
        selector: '[name="allow_force_pushes"]',
        title: { ja: '強制プッシュを禁止' },
        description: {
            ja: '強制プッシュ（履歴の書き換え）を禁止し、コミット履歴を保護します。',
        },
    },
    // ブランチ比較
    {
        type: 'hover',
        id: 'hover-branch-compare',
        selector: 'a[href*="/compare/"], .js-compare-branch',
        title: { ja: 'ブランチを比較' },
        description: {
            ja: '2つのブランチ間の差分を比較。プルリクエスト作成前の確認に便利です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-ahead-behind',
        selector: '.ahead-behind, [data-testid="ahead-behind"]',
        title: { ja: '先行・遅れ' },
        description: {
            ja: 'デフォルトブランチと比較して、何コミット先行/遅れているかを表示します。',
        },
    },
    // ブランチスイッチャー
    {
        type: 'hover',
        id: 'hover-branch-switcher',
        selector: '.js-branch-select-menu, [data-hotkey="w"]',
        title: { ja: 'ブランチ切替' },
        description: {
            ja: '表示するブランチやタグを切り替えます。ショートカット: W',
        },
    },
    {
        type: 'hover',
        id: 'hover-branch-find',
        selector: '.js-branch-filter-field, [placeholder*="branch"]',
        title: { ja: 'ブランチを検索' },
        description: {
            ja: 'ブランチ名で検索してフィルタリングします。',
        },
    },
    // タグ
    {
        type: 'hover',
        id: 'hover-tags',
        selector: 'a[href*="/tags"]',
        title: { ja: 'タグ' },
        description: {
            ja: '特定のコミットに付けたラベル。リリースバージョンのマーキングに使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-create-tag',
        selector: '.js-create-tag, [data-testid="create-tag"]',
        title: { ja: 'タグを作成' },
        description: {
            ja: '新しいタグを作成。通常はバージョン番号（v1.0.0等）を付けます。',
        },
    },
    // マージオプション
    {
        type: 'hover',
        id: 'hover-merge-commit',
        selector: '[value="merge"], [data-merge-method="merge"]',
        title: { ja: 'マージコミット' },
        description: {
            ja: 'すべてのコミットを保持し、マージコミットを作成。履歴が完全に保存されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-squash-merge',
        selector: '[value="squash"], [data-merge-method="squash"]',
        title: { ja: 'スカッシュマージ' },
        description: {
            ja: 'すべてのコミットを1つにまとめてマージ。履歴がシンプルになります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-rebase-merge',
        selector: '[value="rebase"], [data-merge-method="rebase"]',
        title: { ja: 'リベースマージ' },
        description: {
            ja: 'コミットを再適用してマージ。直線的な履歴になりますが、コミットハッシュが変わります。',
        },
    },
    // コンフリクト
    {
        type: 'hover',
        id: 'hover-conflict-warning',
        selector: '.conflict-info, [data-testid="conflict-message"]',
        title: { ja: 'コンフリクト' },
        description: {
            ja: '同じファイルの同じ箇所が別々に変更されました。手動での解決が必要です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-resolve-conflicts',
        selector: '.js-resolve-conflicts, [aria-label*="Resolve conflicts"]',
        title: { ja: 'コンフリクトを解決' },
        description: {
            ja: 'Webエディタでコンフリクトを解決。競合箇所を選択してマージを完了できます。',
        },
    },
];
