# frontend-template

## 使っているフレームワーク・ライブラリ

- react
- typescript
- react-router
- react-redux
- redux-toolkit
- styled-components
- husky
- lint-staged
- typescript-eslint
- prettier

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

1. あとは独立したプロジェクトとして使える
