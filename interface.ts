interface User{
    age:number,
    name: string
}

const a:User = {
    age:12,
    name:'asd'
}

const getUser = (user: User)=>{
    console.log(user);
}

//인터페이스를 가지고 함수의 구조를 설정할 수 도 있다.
interface sumFunc{
    (a:number, b:number):number
}
let suma: sumFunc;

suma = (a:number, b:number):number=>{
    return a+b;
}

//인터페이스 인덱싱
interface stringArray{
    [index:number]:string
}

const array: stringArray = ['a','b'];
//array[0] = 10 은 안된다.

//딕셔너리 패턴
interface strDic{
    [key:string]: RegExp
}

const rex: strDic = {
    cssfile: /\.css$/
}

//인터페이스 상속
interface Person{
    name:string,
    age:number
}
interface Developer extends Person{
    lan: string
}

const saram: Developer = {
    name:'me',
    age:12,
    lan:'go'
}

//type alias
type MyName = string;
const myname: MyName = 'asd';

//type alias vs interface
interface Person1{
    name:string,
    age: number
}

type Person2 = {
    name:string,
    age:number
}

const humann:Person1 = {
    name: 'asd',
    age: 10
}

//union type
function logMessage(val: string | number):void{
    if(typeof val === 'number'){
        val.toString();
    }
    if(typeof val === 'string'){
        val.replace('a','');
    }
}