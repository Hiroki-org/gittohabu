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
];
