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
