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
    // ワークフロー実行
    {
        type: 'hover',
        id: 'hover-actions-run-workflow',
        selector: '.js-run-workflow-form, [data-testid="run-workflow"]',
        title: { ja: 'ワークフローを実行' },
        description: {
            ja: '手動でワークフローを実行します。workflow_dispatchイベントで定義されたワークフローで使用可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-rerun',
        selector: '.js-rerun-workflow, [data-testid="re-run-jobs"]',
        title: { ja: '再実行' },
        description: {
            ja: 'ワークフローを再度実行します。すべてのジョブまたは失敗したジョブのみを選択できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-cancel',
        selector: '.js-cancel-workflow-run, [data-testid="cancel-run"]',
        title: { ja: '実行をキャンセル' },
        description: {
            ja: '進行中のワークフロー実行を中断します。',
        },
    },
    // ワークフロー一覧
    {
        type: 'hover',
        id: 'hover-actions-workflow-list',
        selector: '.js-workflow-list, .filter-list',
        title: { ja: 'ワークフロー一覧' },
        description: {
            ja: 'リポジトリに定義されたすべてのワークフロー。各ワークフローの実行履歴を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-all-workflows',
        selector: 'a[href*="/actions"][href*="workflows"]',
        title: { ja: 'すべてのワークフロー' },
        description: {
            ja: 'リポジトリ内のすべてのワークフロー実行を一覧表示します。',
        },
    },
    // 実行ステータス
    {
        type: 'hover',
        id: 'hover-actions-status-success',
        selector: '.octicon-check-circle, [data-testid="status-success"]',
        title: { ja: '成功' },
        description: {
            ja: 'ワークフローまたはジョブが正常に完了しました。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-status-failure',
        selector: '.octicon-x-circle, [data-testid="status-failure"]',
        title: { ja: '失敗' },
        description: {
            ja: 'ワークフローまたはジョブが失敗しました。ログを確認してエラーを特定してください。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-status-pending',
        selector: '.octicon-pending, [data-testid="status-pending"]',
        title: { ja: '待機中' },
        description: {
            ja: 'ワークフローまたはジョブがキューで実行待ちです。ランナーが空くと実行されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-status-inprogress',
        selector: '.octicon-sync, [data-testid="status-in-progress"]',
        title: { ja: '進行中' },
        description: {
            ja: 'ワークフローまたはジョブが現在実行中です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-status-cancelled',
        selector: '.octicon-stop, [data-testid="status-cancelled"]',
        title: { ja: 'キャンセル済み' },
        description: {
            ja: 'ワークフロー実行が手動でキャンセルされました。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-status-skipped',
        selector: '.octicon-skip, [data-testid="status-skipped"]',
        title: { ja: 'スキップ' },
        description: {
            ja: '条件が満たされずジョブがスキップされました。if文やneeds条件による制御です。',
        },
    },
    // ログ
    {
        type: 'hover',
        id: 'hover-actions-logs',
        selector: '.js-workflow-run-logs, [data-testid="logs"]',
        title: { ja: 'ログ' },
        description: {
            ja: 'ワークフロー実行の詳細ログ。各ステップの出力を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-log-download',
        selector: '.js-download-workflow-log, [aria-label*="Download logs"]',
        title: { ja: 'ログをダウンロード' },
        description: {
            ja: 'ワークフローのログファイルをZIP形式でダウンロードします。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-log-search',
        selector: '.js-search-workflow-log, [data-testid="log-search"]',
        title: { ja: 'ログを検索' },
        description: {
            ja: 'ログ内のテキストを検索します。エラーメッセージの特定に便利です。',
        },
    },
    // ジョブ詳細
    {
        type: 'hover',
        id: 'hover-actions-job-summary',
        selector: '.js-job-summary, [data-testid="job-summary"]',
        title: { ja: 'ジョブサマリー' },
        description: {
            ja: 'ジョブの概要情報。実行時間、ステータス、使用したランナーなどを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-step',
        selector: '.js-workflow-step, [class*="step-"]',
        title: { ja: 'ステップ' },
        description: {
            ja: 'ジョブ内の個別のタスク。runコマンドやactionsの実行単位です。',
        },
    },
    // ランナー詳細
    {
        type: 'hover',
        id: 'hover-actions-self-hosted',
        selector: 'a[href*="/settings/actions/runners/new"]',
        title: { ja: 'セルフホストランナー' },
        description: {
            ja: '自分で管理するマシン上で実行するランナー。カスタム環境や特殊なハードウェアが必要な場合に使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-github-hosted',
        selector: '[data-testid="github-hosted-runner"]',
        title: { ja: 'GitHubホストランナー' },
        description: {
            ja: 'GitHubが提供する仮想マシン。Ubuntu、Windows、macOSが利用可能で、毎回クリーンな環境です。',
        },
    },
    // 変数・シークレット
    {
        type: 'hover',
        id: 'hover-actions-variables',
        selector: 'a[href*="/settings/variables"]',
        title: { ja: '変数' },
        description: {
            ja: 'ワークフローで使用する設定値。シークレットと異なり、ログに表示されます。環境ごとに設定可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-environments',
        selector: 'a[href*="/settings/environments"]',
        title: { ja: '環境' },
        description: {
            ja: 'デプロイ先の環境（production、stagingなど）。環境別のシークレット、承認ルール、待機時間を設定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-env-protection',
        selector: '.js-environment-protection, [data-testid="protection-rules"]',
        title: { ja: '保護ルール' },
        description: {
            ja: '環境へのデプロイに必要なルール。レビュアーの承認、待機時間、ブランチ制限などを設定できます。',
        },
    },
    // キャッシュ
    {
        type: 'hover',
        id: 'hover-actions-caches',
        selector: 'a[href*="/actions/caches"]',
        title: { ja: 'キャッシュ' },
        description: {
            ja: 'ワークフローで使用する依存関係のキャッシュ。ビルド時間を短縮できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-cache-delete',
        selector: '.js-delete-cache, [data-testid="delete-cache"]',
        title: { ja: 'キャッシュを削除' },
        description: {
            ja: 'キャッシュを手動で削除します。古いキャッシュが問題を起こす場合に使用します。',
        },
    },
    // セキュリティ
    {
        type: 'hover',
        id: 'hover-actions-code-scanning',
        selector: 'a[href*="/security/code-scanning"]',
        title: { ja: 'コードスキャン' },
        description: {
            ja: 'コード内のセキュリティ脆弱性を自動検出。CodeQLなどの分析ツールを使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-secret-scanning',
        selector: 'a[href*="/security/secret-scanning"]',
        title: { ja: 'シークレットスキャン' },
        description: {
            ja: 'コミットに含まれる認証情報（APIキー、トークン）を検出。漏洩を防止します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-dependabot-alerts',
        selector: 'a[href*="/security/dependabot/alerts"]',
        title: { ja: 'Dependabotアラート' },
        description: {
            ja: '依存パッケージのセキュリティ脆弱性に関する警告。修正版へのアップデートを推奨します。',
        },
    },
    // 使用量
    {
        type: 'hover',
        id: 'hover-actions-usage',
        selector: 'a[href*="/settings/billing"]',
        title: { ja: '使用量' },
        description: {
            ja: 'GitHub Actionsの使用時間とストレージ。プランに応じた無料枠と超過分の請求を確認できます。',
        },
    },
    // ワークフローファイル
    {
        type: 'hover',
        id: 'hover-actions-workflow-file',
        selector: 'a[href*="/.github/workflows/"]',
        title: { ja: 'ワークフローファイル' },
        description: {
            ja: 'ワークフローを定義するYAMLファイル。.github/workflows/フォルダに配置します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-actions-marketplace',
        selector: 'a[href*="/marketplace/actions"]',
        title: { ja: 'Actionsマーケットプレイス' },
        description: {
            ja: 'コミュニティが作成した再利用可能なアクション。checkout、setup-node等を検索・利用できます。',
        },
    },
    // アノテーション
    {
        type: 'hover',
        id: 'hover-actions-annotations',
        selector: '.js-workflow-annotations, [data-testid="annotations"]',
        title: { ja: 'アノテーション' },
        description: {
            ja: 'ワークフロー実行中に発生した警告やエラー。問題のあるコード行を直接示します。',
        },
    },
];
