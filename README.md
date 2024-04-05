# iOSショートカットから Googleスプレッドシートの家計簿シートに登録する

かんたんに入力できる家計簿ツール

# つかいかた
## スプレッドシート側
1. 適当なスプレッドシートを作成し、データ記録用のシートとして `data` という名前のシートをつくる
2. `拡張機能 > App Script` から GAS を起動し、このリポジトリのコードを貼り付ける
3. 右上の`デプロイ` から、`アクセスできるユーザ` を `全員` に設定して、スクリプトのURLを取得する

## ショートカット側
1. [このURL](https://www.icloud.com/shortcuts/d831adcb4121416eab0e9d6973f35d1b)からショートカットを取得する
2. セットアップ段階でスクリプトのURLを問われるので、先ほど取得したURLを設定する