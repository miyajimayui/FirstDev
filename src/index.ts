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

//refオブジェクト

