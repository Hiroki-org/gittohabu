/**
 * 汎用UI要素に関する日本語辞書エントリ
 * 日付、時間、数量、一般的なUI用語等
 */

import { DictionaryEntry } from '../schema';

export const uiElementsEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // 時間表現
    {
        type: 'replace',
        id: 'time-ago',
        // REMOVED: 'ago' is too generic and causes false positives (e.g., "Chicago", "2 seconds ago").
        // Use specific entries like 'time-second-ago', 'time-minute-ago' instead.
        // This entry has been deprecated - prefer longer, specific phrases.
        from: 'ago',
        to: { ja: '前' },
        caseSensitive: false,
        urlPattern: '(?!)',  // Never match (negative lookahead that always fails)
    },
    {
        type: 'replace',
        id: 'time-second-ago',
        from: 'second ago',
        to: { ja: '秒前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-seconds-ago',
        from: 'seconds ago',
        to: { ja: '秒前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-minute-ago',
        from: 'minute ago',
        to: { ja: '分前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-minutes-ago',
        from: 'minutes ago',
        to: { ja: '分前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-hour-ago',
        from: 'hour ago',
        to: { ja: '時間前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-hours-ago',
        from: 'hours ago',
        to: { ja: '時間前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-day-ago',
        from: 'day ago',
        to: { ja: '日前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-days-ago',
        from: 'days ago',
        to: { ja: '日前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-week-ago',
        from: 'week ago',
        to: { ja: '週間前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-weeks-ago',
        from: 'weeks ago',
        to: { ja: '週間前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-month-ago',
        from: 'month ago',
        to: { ja: 'ヶ月前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-months-ago',
        from: 'months ago',
        to: { ja: 'ヶ月前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-year-ago',
        from: 'year ago',
        to: { ja: '年前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-years-ago',
        from: 'years ago',
        to: { ja: '年前' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-last-week',
        from: 'last week',
        to: { ja: '先週' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-last-month',
        from: 'last month',
        to: { ja: '先月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-last-year',
        from: 'last year',
        to: { ja: '昨年' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-yesterday',
        from: 'yesterday',
        to: { ja: '昨日' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-today',
        from: 'today',
        to: { ja: '今日' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'time-just-now',
        from: 'just now',
        to: { ja: 'たった今' },
        caseSensitive: false,
    },

    // 日付・曜日
    {
        type: 'replace',
        id: 'month-january',
        from: 'January',
        to: { ja: '1月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-february',
        from: 'February',
        to: { ja: '2月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-march',
        from: 'March',
        to: { ja: '3月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-april',
        from: 'April',
        to: { ja: '4月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-may',
        from: 'May',
        to: { ja: '5月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-june',
        from: 'June',
        to: { ja: '6月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-july',
        from: 'July',
        to: { ja: '7月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-august',
        from: 'August',
        to: { ja: '8月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-september',
        from: 'September',
        to: { ja: '9月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-october',
        from: 'October',
        to: { ja: '10月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-november',
        from: 'November',
        to: { ja: '11月' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'month-december',
        from: 'December',
        to: { ja: '12月' },
        caseSensitive: false,
    },

    // 短縮月名
    {
        type: 'replace',
        id: 'month-short-jan',
        from: 'Jan',
        to: { ja: '1月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-feb',
        from: 'Feb',
        to: { ja: '2月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-mar',
        from: 'Mar',
        to: { ja: '3月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-apr',
        from: 'Apr',
        to: { ja: '4月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-jun',
        from: 'Jun',
        to: { ja: '6月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-jul',
        from: 'Jul',
        to: { ja: '7月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-aug',
        from: 'Aug',
        to: { ja: '8月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-sep',
        from: 'Sep',
        to: { ja: '9月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-oct',
        from: 'Oct',
        to: { ja: '10月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-nov',
        from: 'Nov',
        to: { ja: '11月' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'month-short-dec',
        from: 'Dec',
        to: { ja: '12月' },
        caseSensitive: true,
    },

    // 可視性・アクセス
    {
        type: 'replace',
        id: 'visibility-public',
        from: 'Public',
        to: { ja: '公開' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'visibility-private',
        from: 'Private',
        to: { ja: 'プライベート' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'visibility-internal',
        from: 'Internal',
        to: { ja: '内部' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'visibility',
        from: 'Visibility',
        to: { ja: '可視性' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'visibility-change',
        from: 'Change visibility',
        to: { ja: '可視性を変更' },
        caseSensitive: false,
    },

    // 警告・情報
    {
        type: 'replace',
        id: 'alert-warning',
        from: 'Warning',
        to: { ja: '警告' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'alert-info',
        from: 'Info',
        to: { ja: '情報' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'alert-note',
        from: 'Note',
        to: { ja: '注記' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'alert-tip',
        from: 'Tip',
        to: { ja: 'ヒント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'alert-important',
        from: 'Important',
        to: { ja: '重要' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'alert-caution',
        from: 'Caution',
        to: { ja: '注意' },
        caseSensitive: false,
    },

    // 数量表現
    {
        type: 'replace',
        id: 'quantity-all',
        from: 'All',
        to: { ja: 'すべて' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'quantity-none',
        from: 'None',
        to: { ja: 'なし' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'quantity-other',
        from: 'Other',
        to: { ja: 'その他' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'quantity-others',
        from: 'Others',
        to: { ja: 'その他' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'quantity-no-items',
        from: 'No items',
        to: { ja: 'アイテムなし' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'quantity-empty',
        from: 'Empty',
        to: { ja: '空' },
        caseSensitive: false,
    },

    // 新規・更新
    {
        type: 'replace',
        id: 'state-new',
        from: 'New',
        to: { ja: '新規' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-latest',
        from: 'Latest',
        to: { ja: '最新' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-updated',
        from: 'Updated',
        to: { ja: '更新' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-created',
        from: 'Created',
        to: { ja: '作成' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-modified',
        from: 'Modified',
        to: { ja: '変更' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-deleted',
        from: 'Deleted',
        to: { ja: '削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-archived',
        from: 'Archived',
        to: { ja: 'アーカイブ済み' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'state-archive',
        from: 'Archive',
        to: { ja: 'アーカイブ' },
        caseSensitive: false,
    },

    // ソート・順序
    {
        type: 'replace',
        id: 'sort-newest',
        from: 'Newest',
        to: { ja: '最新' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-oldest',
        from: 'Oldest',
        to: { ja: '最古' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-best-match',
        from: 'Best match',
        to: { ja: '最適' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-most-stars',
        from: 'Most stars',
        to: { ja: 'スター数順' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-most-forks',
        from: 'Most forks',
        to: { ja: 'フォーク数順' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-recently-updated',
        from: 'Recently updated',
        to: { ja: '最近更新された' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sort-least-recently-updated',
        from: 'Least recently updated',
        to: { ja: '一番古い更新' },
        caseSensitive: false,
    },

    // ページネーション
    // NOTE: 'First' と 'Last' は汎用的なため、URLパターンでページネーション文脈に限定
    // 理想的には regex anchor (^First$ / ^Last$) でマッチを厳密化したいが、
    // 現在のスキーマでは from フィールドが文字列マッチのため、urlPattern で範囲を制限
    // 将来: replacer.ts で regex マッチング機能が追加されれば、より精密な制御が可能
    {
        type: 'replace',
        id: 'page-first',
        from: 'First',
        to: { ja: '最初' },
        caseSensitive: true,
        urlPattern: '/(issues|pull)\\?',
    },
    {
        type: 'replace',
        id: 'page-last',
        from: 'Last',
        to: { ja: '最後' },
        caseSensitive: true,
        urlPattern: '/(issues|pull)\\?',
    },
    {
        type: 'replace',
        id: 'page-page',
        from: 'Page',
        to: { ja: 'ページ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'page-per-page',
        from: 'per page',
        to: { ja: '件/ページ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'page-results',
        from: 'results',
        to: { ja: '件' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'page-of',
        from: ' of ',
        to: { ja: ' / ' },
        caseSensitive: false,
    },

    // フォーム要素
    // NOTE: 以下のエントリを urlPattern で時 GitHub フォーム文脈に限定
    // 理由: 'Add', 'Remove', 'Select', 'Required' 等は汎用的なため、
    //      子メニューや他のコンテキストで誤りマッチを防ぐ
    // 单一貼付けで全てのフォームエントリを管理するため、
    //      代表的な URL パターを適用: /(issues|pull|settings)/
    {
        type: 'replace',
        id: 'form-required',
        from: 'Required',
        to: { ja: '必須' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-optional',
        from: 'Optional',
        to: { ja: '任意' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-description',
        from: 'Description',
        to: { ja: '説明' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-title',
        from: 'Title',
        to: { ja: 'タイトル' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-name',
        from: 'Name',
        to: { ja: '名前' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-type',
        from: 'Type',
        to: { ja: 'タイプ' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-value',
        from: 'Value',
        to: { ja: '値' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-add',
        from: 'Add',
        to: { ja: '追加' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-remove',
        from: 'Remove',
        to: { ja: '削除' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-select',
        from: 'Select',
        to: { ja: '選択' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-select-all',
        from: 'Select all',
        to: { ja: 'すべて選択' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-deselect-all',
        from: 'Deselect all',
        to: { ja: 'すべて解除' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-choose',
        from: 'Choose',
        to: { ja: '選択' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-enable',
        from: 'Enable',
        to: { ja: '有効化' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-disable',
        from: 'Disable',
        to: { ja: '無効化' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-enabled',
        from: 'Enabled',
        to: { ja: '有効' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },
    {
        type: 'replace',
        id: 'form-disabled',
        from: 'Disabled',
        to: { ja: '無効' },
        caseSensitive: false,
        urlPattern: '/(issues|pull|settings)/',
    },

    // 確認ダイアログ
    {
        type: 'replace',
        id: 'dialog-are-you-sure',
        from: 'Are you sure',
        to: { ja: '本当によろしいですか' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dialog-yes',
        from: 'Yes',
        to: { ja: 'はい' },
        caseSensitive: true,  // Avoid matching "Yesterday", "Yeses", etc.
        urlPattern: '/(issues|pull|settings)/',  // Scope to form/dialog contexts
    },
    {
        type: 'replace',
        id: 'dialog-no',
        from: 'No,',
        to: { ja: 'いいえ' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'dialog-ok',
        from: 'OK',
        to: { ja: 'OK' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'dialog-done',
        from: 'Done',
        to: { ja: '完了' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dialog-apply',
        from: 'Apply',
        to: { ja: '適用' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dialog-reset',
        from: 'Reset',
        to: { ja: 'リセット' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'dialog-clear',
        from: 'Clear',
        to: { ja: 'クリア' },
        caseSensitive: false,
    },

    // コピーライトその他
    {
        type: 'replace',
        id: 'footer-terms',
        from: 'Terms',
        to: { ja: '利用規約' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-privacy',
        from: 'Privacy',
        to: { ja: 'プライバシー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-security',
        from: 'Security',
        to: { ja: 'セキュリティ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-status',
        from: 'Status',
        to: { ja: 'ステータス' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-docs',
        from: 'Docs',
        to: { ja: 'ドキュメント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-documentation',
        from: 'Documentation',
        to: { ja: 'ドキュメント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-contact',
        from: 'Contact',
        to: { ja: 'お問い合わせ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-feedback',
        from: 'Feedback',
        to: { ja: 'フィードバック' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-help',
        from: 'Help',
        to: { ja: 'ヘルプ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-about',
        from: 'About',
        to: { ja: '概要' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-blog',
        from: 'Blog',
        to: { ja: 'ブログ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-pricing',
        from: 'Pricing',
        to: { ja: '料金' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-api',
        from: 'API',
        to: { ja: 'API' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'footer-training',
        from: 'Training',
        to: { ja: 'トレーニング' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'footer-shop',
        from: 'Shop',
        to: { ja: 'ショップ' },
        caseSensitive: false,
    },

    // ファイルサイズ
    {
        type: 'replace',
        id: 'size-bytes',
        from: 'bytes',
        to: { ja: 'バイト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'size-kb',
        from: 'KB',
        to: { ja: 'KB' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'size-mb',
        from: 'MB',
        to: { ja: 'MB' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'size-gb',
        from: 'GB',
        to: { ja: 'GB' },
        caseSensitive: true,
    },

    // 言語・コード関連
    {
        type: 'replace',
        id: 'code-language',
        from: 'Language',
        to: { ja: '言語' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-languages',
        from: 'Languages',
        to: { ja: '言語' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-lines',
        from: 'Lines',
        to: { ja: '行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-line',
        from: 'Line',
        to: { ja: '行' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-additions',
        from: 'additions',
        to: { ja: '追加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-deletions',
        from: 'deletions',
        to: { ja: '削除' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-expand',
        from: 'Expand',
        to: { ja: '展開' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-collapse',
        from: 'Collapse',
        to: { ja: '折りたたむ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-preview',
        from: 'Preview',
        to: { ja: 'プレビュー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-write',
        from: 'Write',
        to: { ja: '編集' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'code-markdown',
        from: 'Markdown',
        to: { ja: 'Markdown' },
        caseSensitive: true,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-visibility',
        selector: 'span[data-visibility-label]',
        title: { ja: '可視性' },
        description: {
            ja: 'Public: 誰でもアクセス可能。Private: 招待されたコラボレーターのみアクセス可能。Internal: 組織メンバーのみ（Enterprise）。',
        },
    },
    {
        type: 'hover',
        id: 'hover-archive',
        selector: '[class*="archive"]',
        title: { ja: 'アーカイブ' },
        description: {
            ja: '読み取り専用になったリポジトリ。新しいイシューやPRは作成できませんが、コードとヒストリーは保持されます。',
        },
    },
    // ボタン関連
    {
        type: 'hover',
        id: 'hover-submit-button',
        selector: 'button[type="submit"], .btn-primary',
        title: { ja: '送信ボタン' },
        description: {
            ja: 'フォームの内容を送信します。コメント投稿、イシュー作成、設定保存などに使用されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-cancel-button',
        selector: '.btn-danger:not([type="submit"]), [data-close-dialog]',
        title: { ja: 'キャンセルボタン' },
        description: {
            ja: '現在の操作を中止し、前の状態に戻ります。入力した内容は保存されません。',
        },
    },
    {
        type: 'hover',
        id: 'hover-edit-button',
        selector: '[aria-label*="Edit"], .js-blob-edit-link, a[href*="/edit/"]',
        title: { ja: '編集ボタン' },
        description: {
            ja: 'ファイル、コメント、イシュー、プロフィールなどを編集モードに切り替えます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-delete-button',
        selector: '[aria-label*="Delete"], .btn-danger[type="submit"]',
        title: { ja: '削除ボタン' },
        description: {
            ja: '要素を完全に削除します。多くの場合、確認ダイアログが表示されます。一部の削除は元に戻せません。',
        },
    },
    // ドロップダウン・メニュー
    {
        type: 'hover',
        id: 'hover-dropdown-menu',
        selector: '.SelectMenu, [data-menu-button], details.dropdown',
        title: { ja: 'ドロップダウンメニュー' },
        description: {
            ja: 'クリックすると選択肢のリストが表示されます。フィルタ、ソート、アクションの選択に使用されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-context-menu',
        selector: '[role="menu"], .ActionListWrap',
        title: { ja: 'コンテキストメニュー' },
        description: {
            ja: '右クリックまたはメニューボタンで表示されるアクションリスト。要素に対する操作を選択できます。',
        },
    },
    // タブ・ナビゲーション
    {
        type: 'hover',
        id: 'hover-tab-nav',
        selector: '[role="tablist"], .UnderlineNav-body',
        title: { ja: 'タブナビゲーション' },
        description: {
            ja: 'セクション間を切り替えるタブ。Code、Issues、Pull requests、Actionsなどのメインタブがあります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pagination',
        selector: '.pagination, [class*="paginate"]',
        title: { ja: 'ページネーション' },
        description: {
            ja: 'コンテンツが複数ページある場合のページ切り替え。Previous/Nextまたはページ番号をクリックして移動します。',
        },
    },
    // モーダル・ダイアログ
    {
        type: 'hover',
        id: 'hover-modal-dialog',
        selector: '[role="dialog"], .Box-overlay, .Overlay',
        title: { ja: 'モーダルダイアログ' },
        description: {
            ja: '画面の上に重なって表示されるウィンドウ。確認や入力が必要な場合に使用されます。閉じるまで背景は操作できません。',
        },
    },
    {
        type: 'hover',
        id: 'hover-confirm-dialog',
        selector: '.js-confirm-dialog, [data-confirm-dialog]',
        title: { ja: '確認ダイアログ' },
        description: {
            ja: '重要な操作の前に表示される確認。削除やマージなどの取り消せない操作の前に確認を求めます。',
        },
    },
    // フォーム要素
    {
        type: 'hover',
        id: 'hover-text-input',
        selector: 'input[type="text"], input:not([type]), .form-control',
        title: { ja: 'テキスト入力フィールド' },
        description: {
            ja: 'テキストを入力するフィールド。タイトル、検索クエリ、ブランチ名などの入力に使用されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-textarea',
        selector: 'textarea, .comment-form-textarea',
        title: { ja: 'テキストエリア' },
        description: {
            ja: '複数行のテキストを入力するフィールド。コメント、説明、PRの本文などに使用されます。Markdownがサポートされることが多いです。',
        },
    },
    {
        type: 'hover',
        id: 'hover-checkbox',
        selector: 'input[type="checkbox"], .form-checkbox',
        title: { ja: 'チェックボックス' },
        description: {
            ja: 'オン/オフを切り替える要素。複数選択可能な設定やタスクリストに使用されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-radio',
        selector: 'input[type="radio"], .form-radio',
        title: { ja: 'ラジオボタン' },
        description: {
            ja: '複数の選択肢から1つを選ぶ要素。マージ方法やリポジトリの可視性選択などに使用されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-select',
        selector: 'select, .form-select',
        title: { ja: 'セレクトボックス' },
        description: {
            ja: 'ドロップダウンリストから選択する要素。ブランチ選択、言語フィルタなどに使用されます。',
        },
    },
    // 検索・フィルタ
    {
        type: 'hover',
        id: 'hover-search-input',
        selector: '[type="search"], .js-site-search-focus, .subnav-search-input',
        title: { ja: '検索フィールド' },
        description: {
            ja: 'キーワードで検索します。Enterキーで検索実行。高度な検索修飾子も使用できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-filter-bar',
        selector: '.subnav, .table-list-filters',
        title: { ja: 'フィルタバー' },
        description: {
            ja: 'リストの表示内容を絞り込むフィルタ。ステータス、ラベル、作成者などで絞り込めます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-sort-menu',
        selector: '.select-menu[class*="sort"], [aria-label*="Sort"]',
        title: { ja: 'ソートメニュー' },
        description: {
            ja: 'リストの並び順を変更します。日付順、人気順、アルファベット順などで並べ替えられます。',
        },
    },
    // ローディング・状態表示
    {
        type: 'hover',
        id: 'hover-loading',
        selector: '[class*="loading"], .AnimatedEllipsis, [aria-busy="true"]',
        title: { ja: '読み込み中' },
        description: {
            ja: 'コンテンツを読み込んでいます。操作完了まで少しお待ちください。',
        },
    },
    {
        type: 'hover',
        id: 'hover-spinner',
        selector: '.Spinner, [class*="spinner"]',
        title: { ja: 'スピナー' },
        description: {
            ja: '処理中を示すアニメーション。バックグラウンドで操作が進行中です。',
        },
    },
    // 通知・アラート
    {
        type: 'hover',
        id: 'hover-flash-message',
        selector: '.flash, [role="alert"]',
        title: { ja: 'フラッシュメッセージ' },
        description: {
            ja: '操作の結果を通知するメッセージ。成功（緑）、警告（黄）、エラー（赤）、情報（青）があります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-banner',
        selector: '.Banner, [class*="banner"]',
        title: { ja: 'バナー' },
        description: {
            ja: '重要なお知らせを表示するバー。メンテナンス通知、新機能案内、警告などが表示されます。',
        },
    },
    // ツールチップ・ポップオーバー
    {
        type: 'hover',
        id: 'hover-tooltip',
        selector: '[role="tooltip"], .tooltipped',
        title: { ja: 'ツールチップ' },
        description: {
            ja: '要素にホバーすると表示される補足情報。アイコンやボタンの説明が表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-popover',
        selector: '.Popover, [data-content]',
        title: { ja: 'ポップオーバー' },
        description: {
            ja: 'クリックで表示される情報ボックス。詳細情報やアクション選択肢が表示されます。',
        },
    },
    // トグル・スイッチ
    {
        type: 'hover',
        id: 'hover-toggle-switch',
        selector: '.ToggleSwitch, [role="switch"]',
        title: { ja: 'トグルスイッチ' },
        description: {
            ja: '機能のオン/オフを切り替えるスイッチ。クリックで即座に設定が変更されます。',
        },
    },
    // コピー・共有
    {
        type: 'hover',
        id: 'hover-copy-button',
        selector: '.js-clipboard-copy, [data-copy-feedback], clipboard-copy',
        title: { ja: 'コピーボタン' },
        description: {
            ja: 'テキストをクリップボードにコピーします。URL、SHA、コマンドなどを素早くコピーできます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-share-button',
        selector: '[aria-label*="Share"], [class*="share"]',
        title: { ja: '共有ボタン' },
        description: {
            ja: 'コンテンツを他の人と共有します。リンクのコピーやSNSで共有ができます。',
        },
    },
    // マークダウン関連
    {
        type: 'hover',
        id: 'hover-markdown-preview',
        selector: '.preview-tab, [data-preview-panel-id]',
        title: { ja: 'プレビュータブ' },
        description: {
            ja: 'Markdownのレンダリング結果をプレビュー表示します。投稿前に見た目を確認できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-markdown-write',
        selector: '.write-tab, [data-write-button]',
        title: { ja: '編集タブ' },
        description: {
            ja: 'Markdownテキストを編集するモード。ツールバーでフォーマットを適用できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-markdown-toolbar',
        selector: '.toolbar-commenting, md-header',
        title: { ja: 'Markdownツールバー' },
        description: {
            ja: 'テキストにフォーマットを適用するためのツールバー。太字、リンク、リスト、コードブロックなどを挿入できます。',
        },
    },
    // ファイルアップロード
    {
        type: 'hover',
        id: 'hover-file-upload',
        selector: '.js-upload-markdown-image, [data-upload-policy-url]',
        title: { ja: 'ファイルアップロード' },
        description: {
            ja: '画像やファイルをアップロードします。ドラッグ＆ドロップまたはクリックしてファイルを選択できます。',
        },
    },
    // サイドバー
    {
        type: 'hover',
        id: 'hover-sidebar',
        selector: '.Layout-sidebar, [class*="sidebar"]',
        title: { ja: 'サイドバー' },
        description: {
            ja: 'ページの補足情報やナビゲーションを表示するサイドパネル。About、ラベル、マイルストーンなどが表示されます。',
        },
    },
    // フッター
    {
        type: 'hover',
        id: 'hover-footer',
        selector: 'footer, .footer',
        title: { ja: 'フッター' },
        description: {
            ja: 'ページ下部のリンク集。利用規約、プライバシーポリシー、ドキュメント、APIなどへのリンクがあります。',
        },
    },
    // 展開・折りたたみ
    {
        type: 'hover',
        id: 'hover-expand-collapse',
        selector: '[aria-expanded], details summary',
        title: { ja: '展開/折りたたみ' },
        description: {
            ja: 'クリックでコンテンツを表示/非表示にします。長いリストや詳細情報を整理するのに使用されます。',
        },
    },
    // 絵文字ピッカー
    {
        type: 'hover',
        id: 'hover-emoji-picker',
        selector: '.emoji-picker-container, [data-emoji-picker]',
        title: { ja: '絵文字ピッカー' },
        description: {
            ja: 'コメントやリアクションに絵文字を追加できます。検索やカテゴリから選択できます。',
        },
    },
    // リアクション
    {
        type: 'hover',
        id: 'hover-reactions',
        selector: '.js-reaction-group-container, .comment-reactions',
        title: { ja: 'リアクション' },
        description: {
            ja: 'コメントやイシューに対する絵文字リアクション。👍 👎 😄 🎉 😕 ❤️ 🚀 👀 から選べます。',
        },
    },
    // アバター
    {
        type: 'hover',
        id: 'hover-avatar',
        selector: '.avatar, [class*="avatar"]',
        title: { ja: 'アバター' },
        description: {
            ja: 'ユーザーのプロフィール画像。クリックするとそのユーザーのプロフィールページに移動できます。',
        },
    },
    // バッジ・ラベル
    {
        type: 'hover',
        id: 'hover-counter-badge',
        selector: '.Counter, [class*="counter"]',
        title: { ja: 'カウンターバッジ' },
        description: {
            ja: '数量を示すバッジ。未読通知数、イシュー数、コメント数などを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-state-label',
        selector: '.State, .IssueLabel',
        title: { ja: 'ステートラベル' },
        description: {
            ja: '状態を示すラベル。Open（緑）、Closed（赤/紫）、Merged（紫）などがあります。',
        },
    },
    // コード表示関連
    {
        type: 'hover',
        id: 'hover-line-numbers',
        selector: '.blob-num, [data-line-number]',
        title: { ja: '行番号' },
        description: {
            ja: 'コードの行番号。クリックで特定の行をハイライトし、その行へのパーマリンクを生成できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-syntax-highlight',
        selector: '.blob-code, .highlight',
        title: { ja: 'シンタックスハイライト' },
        description: {
            ja: 'コードの構文を色分けして表示。キーワード、文字列、コメントなどが識別しやすくなります。',
        },
    },
    // 時間表示
    {
        type: 'hover',
        id: 'hover-relative-time',
        selector: 'relative-time, time-ago',
        title: { ja: '相対時間' },
        description: {
            ja: '「3日前」「2時間前」などの相対的な時間表示。ホバーすると正確な日時が表示されます。',
        },
    },
];
