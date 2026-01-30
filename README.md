# Gittohabu

GitHub向けChrome拡張の雛形です。
Vite, TypeScript, CRXJS Vite Pluginを使用しています。

## 前提条件

*   Node.js (LTS推奨)
*   npm

## セットアップ

リポジトリをクローンした後、依存関係をインストールしてください。

```bash
npm install
```

## 開発方法

開発サーバーを起動するには以下のコマンドを実行します。
これにより、ファイルの変更を監視し、自動的にリビルドが行われます（HMR対応）。

```bash
npm run dev
```

### Chromeへの読み込み方法

1.  Google Chromeを開き、アドレスバーに `chrome://extensions` と入力して移動します。
2.  右上の「デベロッパーモード」トグルをオンにします。
3.  「パッケージ化されていない拡張機能を読み込む」ボタンをクリックします。
4.  プロジェクトの `dist` ディレクトリを選択します。（※事前に `npm run dev` または `npm run build` の実行が必要です）

## ビルド方法

本番用にビルドするには以下のコマンドを実行します。
`dist` ディレクトリに最適化されたファイルが出力されます。

```bash
npm run build
```

## ディレクトリ構成

*   `src/background`: Service Workerとして動作するバックグラウンドスクリプト
*   `src/content`: GitHubのページ上で動作するコンテンツスクリプト
*   `src/popup`: 拡張機能のアイコンをクリックしたときに表示されるポップアップ
*   `src/options`: 拡張機能のオプションページ
*   `src/dictionary`: 辞書データ（UIテキストの置換やホバー解説の定義）関連の処理
*   `public`: 静的アセット（アイコンなど）
