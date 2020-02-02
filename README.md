# frontend-template

### 使用しているフレームワーク・ライブラリ

- react
- typescript
- react-router
- react-redux
- redux-toolkit
- styled-components
- axios
- husky
- lint-staged
- typescript-eslint
- prettier

### 使用しているデザインパターン

- アトミックデザイン

### ディレクトリ構造と定義付け

```
.
├── README.md
├── package.json
├── node_modules/
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── api
│   │   ├── base.ts     <- axiosの共通部分
│   │   └── sample.ts
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── modules/     <- actionとreducerを管理（唯一stateを変更できる部分）
│   │   ├── selectors/      <- stateを管理
│   │   └── store.js      <- reduxの初期設定など
│   ├── serviceWorker.js
│   ├── utils
│   │   ├── history.ts      <- 履歴情報を作成（変更不要）
│   │   ├── size.ts     <- 共通して使いたい長さや大きさ
│   │   └── types.ts　    <- バックのDBと同じ型を格納
│   └── views
│       ├── Pages.tsx       <- [Rooting] templatesのみに依存
│       ├── atoms/      <- [Presentational] 依存なし 最小単位のパーツ
│       ├── molecules/      <- [Presentational] atomsのみに依存 セットで使いたいパーツ
│       ├── organisms/      <- [Container] atomsとmoleculesに依存 独立した区画 selectorからデータ取る
│       └── templates/      <- [Container] organismのみに依存 ページ全体 イベントの処理書く
├── tsconfig.json
└── yarn.lock
```

## 使い方

1. cloneする
    ```bash
    git clone https://github.com/dodokk/frontend-template
    ```
    
1. ディレクトリ名を新しいプロジェクト名に変更する
    ```bash
    mv frontend-template {プロジェクト名}
    ```

1. ディレクトリ内に移動し、gitの情報を新しくする
    ```bash
    cd {プロジェクト名}
    rm -rf .git
    git init
    git remote add origin {新しいプロジェクトのリポジトリURL}
    ```

1. パッケージをインストールし、念のため最新にする
    ```bash
    yarn
    yarn upgrade
    ```

1. プロジェクト情報を書き換える

    - `public/`内の`favicon.ico`,`logo192.png`,`logo512.png`
    - `public/index.html`のdescliptionとtitle
    - `package.json`のname,version,private

1. 独立したプロジェクトとして開発する

