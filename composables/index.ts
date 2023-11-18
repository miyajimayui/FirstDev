//11/18 勉強内容

const greeting = "hello";
console.log(greeting);
//consoleの使い方
//デバックする際に、コードで使用した変数の値を出力して正しい値が入っているかを確認するために使用。

//ブロックスコープ→{}で囲まれた範囲
//letはスコープの中で宣言可。letは再宣言も可能だが、同じブロックスコープ内では不可。

//型と変数名を同時に宣言
const age : number = 23;
if(age > 20) {
    let name : string = "yui";
    console.log(name);
}
else {
    let name = 'ai';
    console.log(name);
}

//nullやundefinedを型として定義出来る。「データがない」という状況を表すのに有用。
const val1 : null = null;
const val2 : undefined = undefined;

