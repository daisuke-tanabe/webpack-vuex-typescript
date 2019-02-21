# webpack-vuex-typescript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints files
```
npm run lint
```

### Formats files
```
npm run fix
```

### Type check files
```
npm run type-check
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Node.js

理由がない限りはLTS版を指定してください。

[Node.js日本語サイト](https://nodejs.org/ja/)

## Format of the commit message

`<scope>`、`#<issue>`、`<boddy>` は不要であれば省略可能とする。

```
<type>(<scope>): #<issue> <subject>

<body>
```

### Allowed `<type>` values:
- feat: 新しい機能の追加
- fix: バグの修正
- docs: ドキュメントの変更
- style: ソースコードフォマットの変更（lint他）
- refactor: コードリファクタリング
- test: テストコード
- chore: 雑用作業（パッケージの更新他）

### Message example

`<body>` には作業したことではなく「何故それをやったのか？」に対しての答えを書くこと。

```
chore(package): #1 updated node_modules

週次定期更新対応をした
```

```
feat(header): #2 wrote markup
```

```
feat(header): #3 wrote javascript
```

```
refactor(modal): #4 delete bad javascript code 
```

```
docs: updated README.md

ステージング環境が更新されたので更新した
```

## Loose typescript

コンパイル時には暗黙のanyを許可し、`npm run type-check` で厳密に型を確認する。
構文とフォーマットは修正し、`type-check` はエラーが出力されても許容する。

## node_modules

### tslint-config-prettier
prettierと競合するルールを無効化する。
https://github.com/prettier/tslint-config-prettier
