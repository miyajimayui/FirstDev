/** 製造知識メモ */ 

/*

■typescriptの実行の流れ
JavaScriptにコンパイル→Node.jsでJavaScriptを実行

■UI（User Interface）部品
ユーザーインターフェース
→ユーザーとインターフェースの相互作用を可能にする手段や仕組みの総体。ボタン、テキストボックス、プルダウンなどの細かい部品も含まれる。

GUI・・・グラフィカルユーザーインターフェース
画面上にアイコンやボタンなどの視覚的な要素を配置して、ユーザーと対話する手段を提供。

CLI・・・コマンドラインユーザーインターフェース
コマンド入力やテキストの入力によって、ユーザーと対話する。開発者向け。

コンポーネント
→アプリケーションの部品や機能を表すための再利用可能な単位。

■静的なwebページ、動的なwebページ
静的なwebページ
サーバーから一度に送信されてブラウザに表示される。
コンテンツが頻繁に変わらない、固定の情報を提供するページに適している。

動的なwebページ
サーバーサイド・スクリプトやデータベースと連携し、リクエストに対して動的にコンテンツを生成する。
リアルタイムの変更が可能。

■DOM（Document Object Model）
HTMLやXML文書を構造的に表現し、プログラムから文書の内容や構造にアクセスおよび操作するための手段を提供。

※仮想DOM
DOMツリーの複製品。
コンポーネントの状態が更新されると、新しい仮想DOMが生成される。
変更がある場合、差分を算出してそれを反映させる。

■node.jsとnuxt.js
node.js
サーバーサイドでJavascriptを実行するためのプラットフォーム
nuxt.js
vue.jsを拡張し、サーバーサイドレンダリングをサポートするフレームワーク

■レンダリング
与えられた情報やデータを視覚的な形に変換するプロセスを指す。
web開発の文脈では、Webページをブラウザに表示することを指す。

SSR　サーバーサイドレンダリング
サーバー上で動的なコンテンツを生成し、その結果をブラウザに返す。

CSR　クライアントサイドレンダリング
ブラウザ上でJavascriptが実行され、動的なコンテンツの生成と表示を行う。

■静的型付けと動的型付け
typescriptはJavascriptの機能+静的型付け

静的型付け・・・変数や関数の型が実行前に決定される　ex)Java, C#, typescript,
動的型付け・・・実行時に決定される　ex)Python, Javascript, Ruby

■関数を使って共通処理化するとき
処理の目的を明確に
共通化する前に細分化して処理を記述
→繰り返している部分は共通化
→ものによって違うところは引数にして渡す


*/

/*
■DB
mysqlとposgreの違い
mysql→

■ソケット通信とTCP/IP通信
ソケット・・・プロトコルを使った通信ではなく、ネットワークプログラミングを行うためのAPI

■ターミナルコマンド基礎
cd.. 一つ前のディレクトリに戻る
cd ~ ホームディレクトリに戻る

*/

/** やりたいこと */ 

/*
・typescriptでvueが使えるように。
参照：https://ja.vuejs.org/guide/typescript/overview.html
・仕事中に出てくる言葉で理解が曖昧なものの理解
[TODO]
async/await
refオブジェクト
 APIの渡り方
 

[DONE]
listのメソッドの使い方 foreach/oush
型宣言
・ファイル構成の理解
・サーバー周りの知識
・mysqlの接続

■12/2
明日やること
サーバー周り
ネットワーク周りの勉強
githubのリポジトリを整理
githubのパッケージについて勉強
ママに電話する
ヒャぁ

■12/3
今日やること
部屋の掃除

■12/4
今日やること
日記とここ最近の事象まとめ


■12/6
整理していこ


*/
