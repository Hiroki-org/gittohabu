/**
 * GitHub Actions・ワークフローに関する日本語辞書エントリ
 * Workflows, Jobs, Runners, Artifacts, Secrets等
 */

import { DictionaryEntry } from '../schema';

export const actionsWorkflowEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // Actions基本用語
    {
        type: 'replace',
        id: 'actions-actions',
        from: 'Actions',
        to: { ja: 'アクション' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'actions-github-actions',
        from: 'GitHub Actions',
        to: { ja: 'GitHub Actions' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'actions-action',
        from: 'Action',
        to: { ja: 'アクション' },
        caseSensitive: true,
    },

    // ワークフロー
    {
        type: 'replace',
        id: 'workflow-workflow',
        from: 'Workflow',
        to: { ja: 'ワークフロー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'workflow-workflows',
        from: 'Workflows',
        to: { ja: 'ワークフロー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'workflow-runs',
        from: 'Workflow runs',
        to: { ja: 'ワークフロー実行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'workflow-file',
        from: 'Workflow file',
        to: { ja: 'ワークフローファイル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'workflow-all',
        from: 'All workflows',
        to: { ja: 'すべてのワークフロー' },
        caseSensitive: false,
    },

    // ジョブ
    {
        type: 'replace',
        id: 'job-job',
        from: 'Job',
        to: { ja: 'ジョブ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'job-jobs',
        from: 'Jobs',
        to: { ja: 'ジョブ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'job-summary',
        from: 'Job summary',
        to: { ja: 'ジョブサマリー' },
        caseSensitive: false,
    },

    // ステップ
    {
        type: 'replace',
        id: 'step-step',
        from: 'Step',
        to: { ja: 'ステップ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'step-steps',
        from: 'Steps',
        to: { ja: 'ステップ' },
        caseSensitive: false,
    },

    // ランナー
    {
        type: 'replace',
        id: 'runner-runner',
        from: 'Runner',
        to: { ja: 'ランナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'runner-runners',
        from: 'Runners',
        to: { ja: 'ランナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'runner-self-hosted',
        from: 'Self-hosted runner',
        to: { ja: 'セルフホストランナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'runner-self-hosted-plural',
        from: 'Self-hosted runners',
        to: { ja: 'セルフホストランナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'runner-github-hosted',
        from: 'GitHub-hosted runner',
        to: { ja: 'GitHubホストランナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'runner-larger',
        from: 'Larger runners',
        to: { ja: 'より大きいランナー' },
        caseSensitive: false,
    },

    // 実行制御
    {
        type: 'replace',
        id: 'run-run',
        from: 'Run',
        to: { ja: '実行' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'run-runs',
        from: 'Runs',
        to: { ja: '実行' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'run-rerun',
        from: 'Re-run',
        to: { ja: '再実行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-rerun-jobs',
        from: 'Re-run jobs',
        to: { ja: 'ジョブを再実行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-rerun-all',
        from: 'Re-run all jobs',
        to: { ja: 'すべてのジョブを再実行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-rerun-failed',
        from: 'Re-run failed jobs',
        to: { ja: '失敗したジョブを再実行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-cancel',
        from: 'Cancel run',
        to: { ja: '実行をキャンセル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-cancel-workflow',
        from: 'Cancel workflow run',
        to: { ja: 'ワークフロー実行をキャンセル' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'run-workflow',
        from: 'Run workflow',
        to: { ja: 'ワークフローを実行' },
        caseSensitive: false,
    },

    // ステータス
    {
        type: 'replace',
        id: 'status-queued',
        from: 'Queued',
        to: { ja: 'キュー中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-in-progress',
        from: 'In progress',
        to: { ja: '進行中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-waiting',
        from: 'Waiting',
        to: { ja: '待機中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-passed',
        from: 'Passed',
        to: { ja: '成功' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-passing',
        from: 'Passing',
        to: { ja: '成功' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-failing',
        from: 'Failing',
        to: { ja: '失敗' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-cancelled',
        from: 'Cancelled',
        to: { ja: 'キャンセル済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-skipped',
        from: 'Skipped',
        to: { ja: 'スキップ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-stale',
        from: 'Stale',
        to: { ja: '古い' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'status-timed-out',
        from: 'Timed out',
        to: { ja: 'タイムアウト' },
        caseSensitive: false,
    },

    // アーティファクト
    {
        type: 'replace',
        id: 'artifact-artifact',
        from: 'Artifact',
        to: { ja: 'アーティファクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'artifact-artifacts',
        from: 'Artifacts',
        to: { ja: 'アーティファクト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'artifact-download',
        from: 'Download artifact',
        to: { ja: 'アーティファクトをダウンロード' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'artifact-upload',
        from: 'Upload artifact',
        to: { ja: 'アーティファクトをアップロード' },
        caseSensitive: false,
    },

    // シークレット
    {
        type: 'replace',
        id: 'secret-secret',
        from: 'Secret',
        to: { ja: 'シークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-secrets',
        from: 'Secrets',
        to: { ja: 'シークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-repo',
        from: 'Repository secrets',
        to: { ja: 'リポジトリシークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-env',
        from: 'Environment secrets',
        to: { ja: '環境シークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-org',
        from: 'Organization secrets',
        to: { ja: '組織シークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-actions',
        from: 'Actions secrets',
        to: { ja: 'Actionsシークレット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'secret-new-repo',
        from: 'New repository secret',
        to: { ja: '新しいリポジトリシークレット' },
        caseSensitive: false,
    },

    // 変数
    {
        type: 'replace',
        id: 'var-variable',
        from: 'Variable',
        to: { ja: '変数' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'var-variables',
        from: 'Variables',
        to: { ja: '変数' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'var-env',
        from: 'Environment variable',
        to: { ja: '環境変数' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'var-env-plural',
        from: 'Environment variables',
        to: { ja: '環境変数' },
        caseSensitive: false,
    },

    // キャッシュ
    {
        type: 'replace',
        id: 'cache-cache',
        from: 'Cache',
        to: { ja: 'キャッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cache-caches',
        from: 'Caches',
        to: { ja: 'キャッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cache-management',
        from: 'Management',
        to: { ja: '管理' },
        caseSensitive: false,
    },

    // トリガー
    {
        type: 'replace',
        id: 'trigger-trigger',
        from: 'Trigger',
        to: { ja: 'トリガー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'trigger-triggered-by',
        from: 'Triggered by',
        to: { ja: 'トリガー元' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'trigger-event',
        from: 'Event',
        to: { ja: 'イベント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'trigger-workflow-dispatch',
        from: 'workflow_dispatch',
        to: { ja: '手動トリガー' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'trigger-push',
        from: 'push',
        to: { ja: 'プッシュ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'trigger-pull-request',
        from: 'pull_request',
        to: { ja: 'プルリクエスト' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'trigger-schedule',
        from: 'schedule',
        to: { ja: 'スケジュール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'trigger-manual',
        from: 'Manual',
        to: { ja: '手動' },
        caseSensitive: false,
    },

    // ログ関連
    {
        type: 'replace',
        id: 'log-logs',
        from: 'Logs',
        to: { ja: 'ログ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'log-view',
        from: 'View logs',
        to: { ja: 'ログを表示' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'log-download',
        from: 'Download logs',
        to: { ja: 'ログをダウンロード' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'log-search',
        from: 'Search logs',
        to: { ja: 'ログを検索' },
        caseSensitive: false,
    },

    // 使用量・請求
    {
        type: 'replace',
        id: 'billing-usage',
        from: 'Usage',
        to: { ja: '使用量' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'billing-billing',
        from: 'Billing',
        to: { ja: '請求' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'billing-minutes',
        from: 'Minutes',
        to: { ja: '分' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'billing-storage',
        from: 'Storage',
        to: { ja: 'ストレージ' },
        caseSensitive: false,
    },

    // 権限
    {
        type: 'replace',
        id: 'perm-actions',
        from: 'Actions permissions',
        to: { ja: 'Actions権限' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-workflow',
        from: 'Workflow permissions',
        to: { ja: 'ワークフロー権限' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-allow-all',
        from: 'Allow all actions',
        to: { ja: 'すべてのアクションを許可' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-disable',
        from: 'Disable Actions',
        to: { ja: 'Actionsを無効化' },
        caseSensitive: false,
    },

    // Dependabot
    {
        type: 'replace',
        id: 'dependabot-dependabot',
        from: 'Dependabot',
        to: { ja: 'Dependabot' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'dependabot-alerts',
        from: 'Dependabot alerts',
        to: { ja: 'Dependabotアラート' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dependabot-security',
        from: 'Dependabot security updates',
        to: { ja: 'Dependabotセキュリティ更新' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dependabot-version',
        from: 'Dependabot version updates',
        to: { ja: 'Dependabotバージョン更新' },
        caseSensitive: false,
    },

    // Code scanning
    {
        type: 'replace',
        id: 'scan-code',
        from: 'Code scanning',
        to: { ja: 'コードスキャン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'scan-code-alerts',
        from: 'Code scanning alerts',
        to: { ja: 'コードスキャンアラート' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'scan-secret',
        from: 'Secret scanning',
        to: { ja: 'シークレットスキャン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'scan-secret-alerts',
        from: 'Secret scanning alerts',
        to: { ja: 'シークレットスキャンアラート' },
        caseSensitive: false,
    },

    // CI/CD
    {
        type: 'replace',
        id: 'cicd-ci-full',
        from: 'Continuous integration',
        to: { ja: '継続的インテグレーション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cicd-cd-full',
        from: 'Continuous deployment',
        to: { ja: '継続的デプロイメント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cicd-ci',
        from: 'CI',
        to: { ja: 'CI' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'cicd-cd',
        from: 'CD',
        to: { ja: 'CD' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'cicd-build',
        from: 'Build',
        to: { ja: 'ビルド' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cicd-deploy',
        from: 'Deploy',
        to: { ja: 'デプロイ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cicd-test',
        from: 'Test',
        to: { ja: 'テスト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'cicd-tests',
        from: 'Tests',
        to: { ja: 'テスト' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-actions',
        selector: 'nav a[href*="/actions"]',
        title: { ja: 'GitHub Actions' },
        description: {
            ja: 'CI/CDとワークフロー自動化のプラットフォーム。プッシュやPRをトリガーにテスト、ビルド、デプロイを自動実行できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-workflow',
        selector: '[class*="workflow"], a[href*="/workflow"]',
        title: { ja: 'ワークフロー' },
        description: {
            ja: '自動化プロセスを定義するYAMLファイル。ジョブ、ステップ、トリガー条件を記述します。.github/workflowsフォルダに配置します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-job',
        selector: 'a[href*="/runs"]',
        title: { ja: 'ジョブ' },
        description: {
            ja: 'ワークフロー内の実行単位。同一ランナー上で順次実行されるステップの集合。複数ジョブは並列または依存関係付きで実行可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-runner',
        selector: 'a[href*="/settings/actions/runners"]',
        title: { ja: 'ランナー' },
        description: {
            ja: 'ワークフローを実行するサーバー。GitHubがホストする仮想環境か、自分で管理するセルフホストランナーを選択できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-artifact',
        selector: 'a[href*="/artifacts"]',
        title: { ja: 'アーティファクト' },
        description: {
            ja: 'ワークフロー実行で生成されたファイル。ビルド成果物、テストレポート、ログなどをジョブ間で共有したりダウンロードできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-secrets',
        selector: 'a[href*="/settings/secrets"]',
        title: { ja: 'シークレット' },
        description: {
            ja: 'ワークフローで使用する機密情報（APIキー、パスワードなど）。暗号化されて保存され、ログにはマスクされて表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-dependabot',
        selector: 'a[href*="/security/dependabot"]',
        title: { ja: 'Dependabot' },
        description: {
            ja: '依存関係を自動で監視・更新するGitHubの機能。セキュリティ脆弱性の検出とバージョン更新PRの自動作成を行います。',
        },
    },
];
