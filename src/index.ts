const r : number = 23;
console.log(r);

/*
typescriptの実行の流れ
JavaScriptにコンパイル→Node.jsでJavaScriptを実行

*/

const v: string = "hello";
console.log(v);

if(r > 25) {
    console.log("rは25以上です")
}
else {
    console.log("rは25以下です。")
}

//クラスの宣言
class Dummy {
    dummyCd01 : number = 2
    dummyCd02 : number = 0
    dummyMei01 : string = ""
    dummyKna01? : string //?をつけるとオプショナルな変数となり、省略が可能。 
    readonly dummyName : string = "佑衣" 
    
}

//クラスのnew
const dummy = new Dummy();
console.log(dummy.dummyCd01);
console.log(dummy.dummyName);


/*
今日の目標
refオブジェクトを作る
exportとimportができるようになる
for文を使って、入れ子構造をぶん回す
独自の型宣言をする
コンポーネント・コンポーサブルの概念を理解する

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
コンテンツが頻繁に変わらない、固定の情報を提供するページい適している。

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




*/

//refオブジェクト

//uhyo.tsからのimport
//import宣言をする時は、拡張子は.jsをつける。じゃないとコンパイルが通らない。
import { name, age } from "./uhyo.js";
console.log(name, age);

/*
typescriptでvueが使えるようになる。
参照：https://ja.vuejs.org/guide/typescript/overview.html
理解が曖昧なところを解消したい。
特に言語ごとにできることとできないことを明確に理解したい。
◯◯をするならこれ、というのを根拠を持って言えるように。
後は、ファイル構成もちゃんと理解したい。
あとサーバーの知識。

*/


