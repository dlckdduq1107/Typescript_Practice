function sum(a: number, b: number): number{
    return a+b;
}

sum(10,20,30,40);//파라미터 개수도 맞아야 한다.

//ts튜플
let item: [string,number] = ['str',100];
//길이를 딱 맞춰 줘야함

//ts객체
let obj: object = {
    name:'fansor',
    age:222
}
let obj2: {name:string, age:number}={
    name:'fansor',
    age:21
}
// 옵셔널 파리미터
function option(a:string, b?:number){

}
option('asd',10);
option('asd');

let num : any = 123;

function voidFunc(): void{
    console.log("void");
}