/**
 * ユーザー・組織・チームに関する日本語辞書エントリ
 * Collaborators, Members, Teams, Organizations, Followers等
 */

import { DictionaryEntry } from '../schema';

export const usersOrgsEntries: DictionaryEntry[] = [
    // === Replace Entries ===
    // ユーザー関連
    {
        type: 'replace',
        id: 'user-user',
        from: 'User',
        to: { ja: 'ユーザー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-users',
        from: 'Users',
        to: { ja: 'ユーザー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-account',
        from: 'Account',
        to: { ja: 'アカウント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-accounts',
        from: 'Accounts',
        to: { ja: 'アカウント' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-username',
        from: 'Username',
        to: { ja: 'ユーザー名' },
        caseSensitive: false,
    },

    // フォロワー・フォロイング
    {
        type: 'replace',
        id: 'user-followers',
        from: 'Followers',
        to: { ja: 'フォロワー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-following',
        from: 'Following',
        to: { ja: 'フォロー中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-follow',
        from: 'Follow',
        to: { ja: 'フォロー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-unfollow',
        from: 'Unfollow',
        to: { ja: 'フォロー解除' },
        caseSensitive: false,
    },

    // コラボレーター・メンバー
    {
        type: 'replace',
        id: 'user-collaborator',
        from: 'Collaborator',
        to: { ja: 'コラボレーター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-collaborators',
        from: 'Collaborators',
        to: { ja: 'コラボレーター' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-member',
        from: 'Member',
        to: { ja: 'メンバー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-members',
        from: 'Members',
        to: { ja: 'メンバー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-maintainer',
        from: 'Maintainer',
        to: { ja: 'メンテナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-maintainers',
        from: 'Maintainers',
        to: { ja: 'メンテナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-owner',
        from: 'Owner',
        to: { ja: 'オーナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-owners',
        from: 'Owners',
        to: { ja: 'オーナー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-admin',
        from: 'Admin',
        to: { ja: '管理者' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-admins',
        from: 'Admins',
        to: { ja: '管理者' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-administrator',
        from: 'Administrator',
        to: { ja: '管理者' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-administrators',
        from: 'Administrators',
        to: { ja: '管理者' },
        caseSensitive: false,
    },

    // チーム
    {
        type: 'replace',
        id: 'team-team',
        from: 'Team',
        to: { ja: 'チーム' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'team-teams',
        from: 'Teams',
        to: { ja: 'チーム' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'team-people',
        from: 'People',
        to: { ja: 'メンバー' },
        caseSensitive: false,
    },

    // 組織
    {
        type: 'replace',
        id: 'org-organization',
        from: 'Organization',
        to: { ja: '組織' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'org-organizations',
        from: 'Organizations',
        to: { ja: '組織' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'org-org',
        from: 'Org',
        to: { ja: '組織' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'org-orgs',
        from: 'Orgs',
        to: { ja: '組織' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'org-enterprise',
        from: 'Enterprise',
        to: { ja: 'エンタープライズ' },
        caseSensitive: false,
    },

    // 権限・ロール
    {
        type: 'replace',
        id: 'perm-permission',
        from: 'Permission',
        to: { ja: '権限' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-permissions',
        from: 'Permissions',
        to: { ja: '権限' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-role',
        from: 'Role',
        to: { ja: 'ロール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-roles',
        from: 'Roles',
        to: { ja: 'ロール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-read-access',
        from: 'Read access',
        to: { ja: '読み取りアクセス' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-write-access',
        from: 'Write access',
        to: { ja: '書き込みアクセス' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-admin-access',
        from: 'Admin access',
        to: { ja: '管理アクセス' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-triage',
        from: 'Triage',
        to: { ja: 'トリアージ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'perm-maintain',
        from: 'Maintain',
        to: { ja: 'メンテナンス' },
        caseSensitive: false,
    },

    // 招待
    {
        type: 'replace',
        id: 'user-invite',
        from: 'Invite',
        to: { ja: '招待' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-invitations',
        from: 'Invitations',
        to: { ja: '招待' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-pending-invitations',
        from: 'Pending invitations',
        to: { ja: '保留中の招待' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-accept-invitation',
        from: 'Accept invitation',
        to: { ja: '招待を承諾' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-decline',
        from: 'Decline',
        to: { ja: '辞退' },
        caseSensitive: false,
    },

    // プロフィール関連
    {
        type: 'replace',
        id: 'profile-bio',
        from: 'Bio',
        to: { ja: '自己紹介' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-location',
        from: 'Location',
        to: { ja: '場所' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-website',
        from: 'Website',
        to: { ja: 'ウェブサイト' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-company',
        from: 'Company',
        to: { ja: '会社' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-email',
        from: 'Email',
        to: { ja: 'メール' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-twitter',
        from: 'Twitter',
        to: { ja: 'Twitter' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'profile-pinned',
        from: 'Pinned',
        to: { ja: 'ピン留め' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-pinned-repos',
        from: 'Pinned repositories',
        to: { ja: 'ピン留めリポジトリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'profile-popular-repos',
        from: 'Popular repositories',
        to: { ja: '人気のリポジトリ' },
        caseSensitive: false,
    },

    // アクティビティ
    {
        type: 'replace',
        id: 'activity-contribution',
        from: 'Contribution',
        to: { ja: 'コントリビューション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-contributions',
        from: 'Contributions',
        to: { ja: 'コントリビューション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-activity',
        from: 'Activity',
        to: { ja: 'アクティビティ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-overview',
        from: 'Activity overview',
        to: { ja: 'アクティビティ概要' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-contribution-activity',
        from: 'Contribution activity',
        to: { ja: 'コントリビューションアクティビティ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-joined',
        from: 'Joined',
        to: { ja: '参加' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-last-active',
        from: 'Last active',
        to: { ja: '最終アクティブ' },
        caseSensitive: false,
    },

    // コントリビューショングラフ
    {
        type: 'replace',
        id: 'activity-contributions-year',
        from: 'contributions in the last year',
        to: { ja: '過去1年間のコントリビューション' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-more-contribution',
        from: 'More contribution activity',
        to: { ja: 'さらにコントリビューションを表示' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'activity-less',
        from: 'Less',
        to: { ja: '少' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'activity-more',
        from: 'More',
        to: { ja: '多' },
        caseSensitive: true,
    },

    // 通知設定
    {
        type: 'replace',
        id: 'notif-notifications',
        from: 'Notifications',
        to: { ja: '通知' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'notif-settings',
        from: 'Notification settings',
        to: { ja: '通知設定' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'notif-unread',
        from: 'Unread',
        to: { ja: '未読' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'notif-all',
        from: 'All notifications',
        to: { ja: 'すべての通知' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'notif-mark-read',
        from: 'Mark as read',
        to: { ja: '既読にする' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'notif-mark-all-read',
        from: 'Mark all as read',
        to: { ja: 'すべて既読にする' },
        caseSensitive: false,
    },

    // Sponsor関連
    {
        type: 'replace',
        id: 'sponsor-sponsor',
        from: 'Sponsor',
        to: { ja: 'スポンサー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sponsor-sponsoring',
        from: 'Sponsoring',
        to: { ja: 'スポンサー中' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sponsor-sponsored',
        from: 'Sponsored',
        to: { ja: 'スポンサーされた' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'sponsor-github-sponsors',
        from: 'GitHub Sponsors',
        to: { ja: 'GitHub Sponsors' },
        caseSensitive: true,
    },

    // 認証・セキュリティ
    {
        type: 'replace',
        id: 'auth-2fa-full',
        from: 'Two-factor authentication',
        to: { ja: '二要素認証' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'auth-2fa',
        from: '2FA',
        to: { ja: '2FA' },
        caseSensitive: true,
    },
    {
        type: 'replace',
        id: 'auth-ssh-keys',
        from: 'SSH keys',
        to: { ja: 'SSHキー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'auth-gpg-keys',
        from: 'GPG keys',
        to: { ja: 'GPGキー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'auth-pat',
        from: 'Personal access tokens',
        to: { ja: '個人アクセストークン' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'auth-oauth-apps',
        from: 'OAuth apps',
        to: { ja: 'OAuthアプリ' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'auth-github-apps',
        from: 'GitHub Apps',
        to: { ja: 'GitHub Apps' },
        caseSensitive: true,
    },

    // ブロック関連
    {
        type: 'replace',
        id: 'user-block-user',
        from: 'Block user',
        to: { ja: 'ユーザーをブロック' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-blocked-users',
        from: 'Blocked users',
        to: { ja: 'ブロックしたユーザー' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-report',
        from: 'Report',
        to: { ja: '報告' },
        caseSensitive: false,
    },
    {
        type: 'replace',
        id: 'user-report-abuse',
        from: 'Report abuse',
        to: { ja: '不正利用を報告' },
        caseSensitive: false,
    },

    // === Hover Entries ===
    {
        type: 'hover',
        id: 'hover-followers',
        selector: 'a[href*="/followers"]',
        title: { ja: 'フォロワー' },
        description: {
            ja: 'このユーザーをフォローしている人の数。フォローすると、そのユーザーのアクティビティがフィードに表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-following',
        selector: 'a[href*="/following"]',
        title: { ja: 'フォロー中' },
        description: {
            ja: 'このユーザーがフォローしている人の数。フォロー中のユーザーのアクティビティを追跡できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-collaborators',
        selector: 'a[href*="/collaborators"], a[href*="/access"]',
        title: { ja: 'コラボレーター' },
        description: {
            ja: 'リポジトリに直接アクセスできる共同作業者。Push権限などを持ち、プロジェクトに貢献できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-organizations',
        selector: 'a[href*="/orgs/"], a[href*="/organizations"]',
        title: { ja: '組織' },
        description: {
            ja: '複数のユーザーで共有するアカウント。チーム管理、アクセス制御、請求の一元管理が可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-teams',
        selector: 'a[href*="/teams"]',
        title: { ja: 'チーム' },
        description: {
            ja: '組織内のメンバーグループ。リポジトリへのアクセス権限をチーム単位で管理できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-contributions',
        selector: '[class*="contrib"], [class*="contribution"]',
        title: { ja: 'コントリビューション' },
        description: {
            ja: 'コミット、プルリクエスト、イシュー、レビューなど、プロジェクトへの貢献。草グラフで可視化されます。',
        },
    },
    // プロフィール
    {
        type: 'hover',
        id: 'hover-profile-overview',
        selector: 'a[data-tab="overview"], [aria-label*="Overview"]',
        title: { ja: '概要' },
        description: {
            ja: 'ユーザーのプロフィール概要。ピン留めリポジトリ、アクティビティ、バイオを表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-repos',
        selector: 'a[data-tab="repositories"]',
        title: { ja: 'リポジトリタブ' },
        description: {
            ja: 'ユーザーが所有または貢献しているリポジトリの一覧を表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-projects',
        selector: 'a[data-tab="projects"]',
        title: { ja: 'プロジェクトタブ' },
        description: {
            ja: 'ユーザーが作成したプロジェクトボードの一覧を表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-packages',
        selector: 'a[data-tab="packages"]',
        title: { ja: 'パッケージタブ' },
        description: {
            ja: 'ユーザーが公開しているパッケージの一覧を表示します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-stars',
        selector: 'a[data-tab="stars"], a[href*="/stars"]',
        title: { ja: 'スター' },
        description: {
            ja: 'ユーザーがスターを付けたリポジトリの一覧。お気に入りや関心のあるプロジェクトです。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-edit',
        selector: 'a[href*="/settings/profile"]',
        title: { ja: 'プロフィール編集' },
        description: {
            ja: '名前、バイオ、アバター、SNSリンクなどのプロフィール情報を編集します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-avatar',
        selector: '.avatar, [data-testid="avatar"]',
        title: { ja: 'アバター' },
        description: {
            ja: 'ユーザーのプロフィール画像。クリックするとプロフィールページに移動します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-profile-pinned',
        selector: '.js-pinned-items-reorder-container',
        title: { ja: 'ピン留め' },
        description: {
            ja: 'プロフィールに固定表示するリポジトリ。最大6つまでピン留めできます。',
        },
    },
    // フォロー
    {
        type: 'hover',
        id: 'hover-follow-button',
        selector: 'button[value="follow"], [aria-label*="Follow"]',
        title: { ja: 'フォロー' },
        description: {
            ja: 'このユーザーをフォロー。フィードでアクティビティを追跡できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-unfollow-button',
        selector: 'button[value="unfollow"]',
        title: { ja: 'フォロー解除' },
        description: {
            ja: 'このユーザーのフォローを解除します。',
        },
    },
    // 組織
    {
        type: 'hover',
        id: 'hover-org-people',
        selector: 'a[href*="/people"], a[href*="/members"]',
        title: { ja: 'メンバー' },
        description: {
            ja: '組織に所属するメンバーの一覧。オーナー、メンテナー、メンバーなどのロールがあります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-org-invite',
        selector: 'button[data-hovercard-type="invite"], [aria-label*="Invite"]',
        title: { ja: 'メンバーを招待' },
        description: {
            ja: '新しいメンバーを組織に招待します。招待されたユーザーは承諾が必要です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-org-pending',
        selector: 'a[href*="/pending_invitations"]',
        title: { ja: '保留中の招待' },
        description: {
            ja: 'まだ承諾されていない招待の一覧。有効期限が切れると再送信が必要です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-org-outside-collaborators',
        selector: 'a[href*="/outside_collaborators"]',
        title: { ja: '外部コラボレーター' },
        description: {
            ja: '組織メンバーではないが、特定のリポジトリにアクセス権を持つユーザー。',
        },
    },
    {
        type: 'hover',
        id: 'hover-org-billing',
        selector: 'a[href*="/billing"]',
        title: { ja: '請求' },
        description: {
            ja: '組織のプラン、使用状況、支払い情報を管理します。',
        },
    },
    // チーム
    {
        type: 'hover',
        id: 'hover-team-create',
        selector: 'a[href*="/teams/new"], button[data-action*="create-team"]',
        title: { ja: 'チームを作成' },
        description: {
            ja: '新しいチームを作成。メンバーをグループ化してアクセス権限を管理します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-team-members',
        selector: 'a[href*="/team/"][href*="/members"]',
        title: { ja: 'チームメンバー' },
        description: {
            ja: 'チームに所属するメンバーの一覧。メンテナーとメンバーの区別があります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-team-repos',
        selector: 'a[href*="/team/"][href*="/repositories"]',
        title: { ja: 'チームリポジトリ' },
        description: {
            ja: 'チームがアクセスできるリポジトリの一覧と権限レベル。',
        },
    },
    {
        type: 'hover',
        id: 'hover-team-discussions',
        selector: 'a[href*="/team/"][href*="/discussions"]',
        title: { ja: 'チームディスカッション' },
        description: {
            ja: 'チーム内での議論や意思決定のためのディスカッションスペース。',
        },
    },
    // 権限
    {
        type: 'hover',
        id: 'hover-permission-read',
        selector: '[value="read"], [data-permission="read"]',
        title: { ja: '読み取り' },
        description: {
            ja: 'コードの閲覧とクローンが可能。プルリクエストやイシューの作成も可能。',
        },
    },
    {
        type: 'hover',
        id: 'hover-permission-triage',
        selector: '[value="triage"], [data-permission="triage"]',
        title: { ja: 'トリアージ' },
        description: {
            ja: 'イシューとプルリクエストの管理が可能。ラベル付け、マイルストーン設定など。',
        },
    },
    {
        type: 'hover',
        id: 'hover-permission-write',
        selector: '[value="write"], [data-permission="write"]',
        title: { ja: '書き込み' },
        description: {
            ja: 'コードのプッシュ、ブランチの管理が可能。プルリクエストのマージも可能。',
        },
    },
    {
        type: 'hover',
        id: 'hover-permission-maintain',
        selector: '[value="maintain"], [data-permission="maintain"]',
        title: { ja: 'メンテナンス' },
        description: {
            ja: 'リポジトリの一部設定が可能。機密性の高い操作以外の管理タスクを実行できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-permission-admin',
        selector: '[value="admin"], [data-permission="admin"]',
        title: { ja: '管理者' },
        description: {
            ja: 'リポジトリのすべての操作が可能。削除や設定変更も含む完全なアクセス権限。',
        },
    },
    // 通知
    {
        type: 'hover',
        id: 'hover-notifications',
        selector: 'a[href*="/notifications"]',
        title: { ja: '通知' },
        description: {
            ja: '@メンション、参加中のディスカッション、ウォッチ中のリポジトリの更新情報。',
        },
    },
    {
        type: 'hover',
        id: 'hover-notification-inbox',
        selector: '.notification-shelf',
        title: { ja: '通知インボックス' },
        description: {
            ja: '未読の通知を管理。フィルタリング、既読化、購読解除が可能です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-notification-settings',
        selector: 'a[href*="/notifications/settings"]',
        title: { ja: '通知設定' },
        description: {
            ja: 'どのイベントで通知を受け取るか設定。メール、Web、モバイルの設定が可能。',
        },
    },
    // スポンサー
    {
        type: 'hover',
        id: 'hover-sponsor-button',
        selector: 'a[href*="/sponsors/"], button[data-ga-click*="sponsor"]',
        title: { ja: 'スポンサー' },
        description: {
            ja: 'このユーザーの活動を金銭的にサポート。毎月の寄付を設定できます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-sponsoring',
        selector: 'a[href*="/sponsoring"]',
        title: { ja: 'スポンサー中' },
        description: {
            ja: 'あなたが支援しているユーザーや組織の一覧。',
        },
    },
    // セキュリティ
    {
        type: 'hover',
        id: 'hover-ssh-keys',
        selector: 'a[href*="/settings/keys"]',
        title: { ja: 'SSHキー' },
        description: {
            ja: 'SSHでの認証に使用する公開鍵。パスワードなしでgit操作が可能になります。',
        },
    },
    {
        type: 'hover',
        id: 'hover-gpg-keys',
        selector: 'a[href*="/settings/gpg"]',
        title: { ja: 'GPGキー' },
        description: {
            ja: 'コミットへの署名に使用するGPGキー。署名されたコミットはVerifiedと表示されます。',
        },
    },
    {
        type: 'hover',
        id: 'hover-pat',
        selector: 'a[href*="/settings/tokens"]',
        title: { ja: '個人アクセストークン' },
        description: {
            ja: 'APIやコマンドラインでの認証に使用するトークン。パスワードの代わりに使用します。',
        },
    },
    {
        type: 'hover',
        id: 'hover-2fa',
        selector: 'a[href*="/two_factor_authentication"]',
        title: { ja: '二要素認証' },
        description: {
            ja: 'パスワードに加えて、認証アプリまたはSMSでの確認を要求。アカウントセキュリティを強化します。',
        },
    },
    // ブロック・報告
    {
        type: 'hover',
        id: 'hover-block-user',
        selector: '[data-action*="block"]',
        title: { ja: 'ユーザーをブロック' },
        description: {
            ja: 'このユーザーからの@メンション、コメント、プルリクエストをブロックします。',
        },
    },
    {
        type: 'hover',
        id: 'hover-report-user',
        selector: '[data-action*="report"]',
        title: { ja: '報告' },
        description: {
            ja: '不正行為やコミュニティガイドライン違反をGitHubに報告します。',
        },
    },
    // コントリビューショングラフ
    {
        type: 'hover',
        id: 'hover-contrib-graph',
        selector: '.js-calendar-graph, [data-testid="contribution-graph"]',
        title: { ja: 'コントリビューショングラフ' },
        description: {
            ja: '過去1年間の活動を日ごとに表示。色が濃いほど多くの活動があった日です。',
        },
    },
    {
        type: 'hover',
        id: 'hover-contrib-activity',
        selector: '.contribution-activity, [data-testid="activity-timeline"]',
        title: { ja: 'アクティビティタイムライン' },
        description: {
            ja: 'コミット、プルリクエスト、イシュー、レビューなどの活動履歴を時系列で表示。',
        },
    },
    {
        type: 'hover',
        id: 'hover-contrib-streak',
        selector: '.contrib-streak',
        title: { ja: '連続活動日数' },
        description: {
            ja: '連続してコントリビューションを行った日数。継続的な活動を可視化します。',
        },
    },
    // アプリ
    {
        type: 'hover',
        id: 'hover-oauth-apps',
        selector: 'a[href*="/settings/applications"]',
        title: { ja: 'OAuthアプリ' },
        description: {
            ja: 'あなたのアカウントへのアクセスを許可したサードパーティアプリの一覧。',
        },
    },
    {
        type: 'hover',
        id: 'hover-github-apps',
        selector: 'a[href*="/settings/installations"]',
        title: { ja: 'GitHub Apps' },
        description: {
            ja: 'インストールしたGitHub Appsの一覧。リポジトリへのアクセス権限を管理できます。',
        },
    },
];
