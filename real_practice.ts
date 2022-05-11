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