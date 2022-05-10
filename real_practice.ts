//유틸리티 타입
interface Address{
    name:string
    num: number
}

type part = Partial<Address>

//Pick
interface Product{
    id: string
    name: string
    price:number
    brand: string
}

interface ProductDetail{
    id: string
    name: string
}
type detail = Pick<Product,'id'|'name'>
type omittype = Omit<Product,'brand'|'price'>

//상품의 일부분을 업데이트 하는 함수
function updatepartial(updateItem: Partial<Product>){

}

//Partial 구현
//#1
// type productUpdate = {
//     id?:Product['id']
//     name?:Product['name']
//     price?:Product['price']
//     brand?:Product['brand']
// }

//#2 - mapped type use
// type productUpdate = {
//     [p in 'id'|'name'|'price'|'brand']?: Product[p]
// }

//#3 - use keyof
type productUpdate = {
    [p in keyof Product]?: Product[p]
}

//#4
type PartialCopy<T> = {
    [p in keyof T]?: T[p]
}

//mapped type
type Heros = 'hulk'|'captain'|'thor';
type HerosAge = { [p in Heros]: number}
let ages: HerosAge = {
    hulk: 33,
    captain: 100,
    thor : 1000
}