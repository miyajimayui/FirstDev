//変数の宣言（型宣言と初期化を同時に行う）
const r : number = 23;
console.log(r);

const v: string = "hello";
console.log(v);

//条件分岐
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
    dummyKna01? : string //?をつけるとオプショナルな変数となり、省略が可能。 オブジェクトで使うと良いかも。
    readonly dummyName : string = "佑衣" 
    
}

//クラスのnew
const dummy = new Dummy();
console.log(dummy.dummyCd01);
console.log(dummy.dummyName);

//uhyo.tsからのimport
//import宣言をする時は、拡張子は.jsをつける。じゃないとコンパイルが通らない。
import { name, age } from "./uhyo.js";
console.log(name, age);

//オブジェクトの型宣言
//インターフェースを使用
interface Car {
    name: string
    distance: number
    color: string
}

const fireCar : Car = {
    name: "消防車",
    distance: 200000,
    color: "赤"
}

console.log("車の名前は" + fireCar.name + "です");
console.log("色は" + fireCar.color + "です。");

//型エイリアスを使用
type Person = {
    id: number
    name: string
    age: number
    job: string
    marriage: boolean

}

const person1 : Person = {
    id: 1,
    name: "西園寺麗子",
    age: 21,
    job: "CA",
    marriage: false
}

const person2 : Person = {
    id: 2,
    name: "山本隆",
    age: 54,
    job: "陶芸家",
    marriage: true
}


const person3 : Person = {
    id: 3,
    name: "山本悠里",
    age: 34,
    job: "ピアノの先生",
    marriage: true
}


const person4 : Person = {
    id: 4,
    name: "山本彩",
    age: 3,
    job: "陶芸家",
    marriage: false
}


const person5 : Person = {
    id: 5,
    name: "山本哲士",
    age: 54,
    job: "体育教師",
    marriage: false
}


const person6 : Person = {
    id: 6,
    name: "山本・ジャック・モンロー",
    age: 27,
    job: "音楽家",
    marriage: false
}

//各Person情報をリストにまとめる。
//現時点では空リスト
const people : Array<Person> = [];

//リストに追加していく。
people.push(person1);
people.push(person2);
people.push(person3);
people.push(person4);
people.push(person5);
people.push(person6);

//リストの要素数
console.log("peopleリストの要素数は" + people.length);

//いくつかデータを作って、結婚していない人のデータだけを若い順に出力。
/*
@param id
@return 取得結果（リストで受け取る）

取得条件　marriageがfalse
*/

export function nonMarriage(id : number) {
    const nonMarriagePeople = new Array<Person>;
    //引数で指定したidのPersonの情報をpeopleリストの中から取得
    people.forEach(p => {
        if(p.marriage = false) {
            //別のリストを新規作成
            
            nonMarriagePeople.push(p);
            return nonMarriagePeople.values.name;

            //id使ってないじゃん
        }
       
    })
}
    //メソッドの呼び出し
    console.log("未婚者は" + nonMarriage(5));

    
    



    



