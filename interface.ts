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

interface Person3{
    name: string,
    age: number
}
interface Developer1{
    name: string,
    skill: string
}

function askSomeone(someone: Person3 | Developer1){
    someone.name;
    // someone.skill;
    // someone.age;
}
askSomeone({name:'delveloper', skill: 'python'})
askSomeone({name: 'person', age:12})

//intersection
function askSomeone2(someone: Person3 & Developer1):void{
    someone.name
    someone.age;
    someone.skill
}
askSomeone2({name:'meme', skill: 'c', age:12});

//enum
enum shoes{
    nike='나이키',
    adidas='아디다스'
}

let myshoes = shoes.nike;
console.log(myshoes) // 나이키

//이넘 활용
enum Ask{
    yes ='Y',
    no = 'N'
}
function ask(q: Ask){
    if( q === Ask.yes){
        console.log("correct");
    }
    if(q === Ask.no){[
        console.log('no')
    ]}
}

ask(Ask.yes)

// class PersonClass{
//     constructor(name,age){
//         console.log(name,age)
//     }
// }

//prototype
let u = {name:'asd', age:10};
let admin: {} = {};
// admin.__proto__ = u;
// console.log(admin.name);

//생성자,  프로토 타입
function human(this: any, name:string,age:number){
    this.name= name;
    this.age = age;
}
// let h = new human('name',100);

class human1{
    public name:string;
    private age:number;
    readonly skill:string;

    constructor(name:string,age:number, skill:string){
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

//제네릭은 재사용성을 위해 쓰인다.
//제너릭은 타입을 미리지정하지 않고 선언 시점에 타입을 정의하겠다는 의미이다.
function logText<T>(text: T):T{
    console.log(text);
    return text;
}
logText<string>('hi');// <> 를 이용해 제네릭 타입을 명시해주는 것이 좋다.

//기존 타입 미리 지정할떄의 문제점
function logText2(text:string){
    console.log(text);
    return text;
}
function logNumber(num:number){
    console.log(num);
    return num;
}
logText('hi');
logNumber(12);

//중복 타입 문제 해결을 위해 유니온을 써보자
//이렇게 하면 중복은 줄일 수 있지만 함수 내부에서 text. 하고 메서드를 사용할떄 string과 number의 공통적인 메서드만 표시가 된다.
function logTextUnion(text:string | number){
    console.log(text);
    return text;
}

let gena = logText<string>('hi');
gena.split("")
let bool = logText<boolean>(true);


interface DropDownItem<T>{
    value: T;
    selected: boolean;
}
// interface Email {
//     value: string;
//     selected : boolean;
// }
const emails: DropDownItem<string>[] = [
    {value:'asds', selected: true},
    {value:'bbbb', selected: false}
]

// interface Product{
//     value: number;
//     selected: boolean;
// }
const numProduct: DropDownItem<number>[] = [
    {value:1, selected: true},
    {value:2, selected: false}
]

function createDropdown<T>(item:DropDownItem<T>){
    const option = document.createElement('option');
    console.log(item.value);
    return option;
}
emails.forEach((email)=>{
    const dropDown = createDropdown<string>(email);

})

//인터페이스에 제니릭 선언
interface Drop<T>{
    value: T;
    selected: boolean;
}
const obj3:Drop<string> = {value:"Asd", selected: true}

//제네릭 타입 제한
interface LengType{
    length: number
}
function logTextPrint<T extends LengType>(text:T):T{
    text.length;
    return text;
}
logTextPrint("hi")
// logTextPrint(10)

//제네릭 타입제한3 - keyof 를 통한 타입제한
interface Shopping{
    name: string;
    val : number;
    price: number;
}
function buyProduct<T extends keyof Shopping>(item:T):T{
    return item
}
buyProduct('name')

//fetch api에서 제네릭 사용하기
// function fetchitems():Promise<string[]>{
//     let items : string[]= ['a','b'];
//     return new Promise((resolve) => {
//         resolve(items);
//     })
// }

//enum을 통한 타입 제한
enum PhoneType{
    Home='home',
    Office='office'
}
const phone1 : {home:string}= {
    home:'mymy'
}
const phone2:{office:string} = {
    office:'myoffice'
}
function findPhone(phone:PhoneType): void{
    const arr = [phone1,phone2];
    console.log(phone)
}
findPhone(PhoneType.Home)

//타입 추론
let aa = 19
let abc:number;

function temp(b=10){
    let s = 'asd';
    return s+b
}

interface ShoppingType<T>{
    value: T
    cost:number
}
interface DetailShopping<K> extends ShoppingType<K>{
    description: string
    tag: K
}
let sh:ShoppingType<string> = {
    value : 'as',
    cost: 100
}

let detail:DetailShopping<string> = {
    description: 'asd',
    tag: 'tag',
    value:'value',
    cost: 100
}

//best common type
let arr = [1,2,true];

//타입 단언(type assertion)
let asse;
asse = 10
asse = 'a'
let b = asse as string

let dom = document.querySelector('div');
if(dom){
    dom.innerHTML = 'asd';
}

let div = document.querySelector('div') as HTMLDivElement
div.innerHTML = 'asd';

//타입가드
interface Develop{
    name:string
    skill:string
}
interface People{
    name:string
    lan:string
}
function reobj(): Develop | People{
    return {name:'tony', skill: 'java', lan:'kr'}
}
let tony = reobj();
// console.log(tony.skill) //이렇게 쓰면 유니온 이기 때문에 공통적인 것만 불러올수 있어 에러남

//타입가드가 없으면 이렇게 가독성이 떨어지게 작성해야 한다.
if((tony as Develop).skill){
    (tony as Develop).skill
}else if((tony as People).lan){
    (tony as People).lan
}

//타입 가드 적용
function isDevelop(target: Develop | People): target is Develop{
    return (target as Develop).skill !== undefined
}
if(isDevelop(tony)){
    tony.skill
}else{
    tony.lan
}

//타입 호환
interface del{
    name:string
    skill: string
}
interface peo{
    name:string
}

let devel:del;
let peopl:peo;
// devel = peopl//오른쪽 구조가 더 커야 할당 할 수 있다.
// peopl = devel;

let add = function(a:number){
    //...
}
let sum2 = function(a:number, b:number){
    //...
}
sum2 = add;

interface Empty<T>{
    //...
}
let empty1:Empty<string>
let empty2:Empty<number>
empty1 = empty2

interface NotEmpty<T>{
    name: T
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>
notEmpty1 =notEmpty2