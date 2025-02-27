{
// Mapped types

const numberArray: number[] = [1,2,3,4]
const stringArray: string[] = ["1","2","3","4"]

const convertNumberToString: string[] = numberArray.map(number=> number.toString())

console.log(convertNumberToString)


type AreaNumber = {
    height: number;
    widht: number;
}

type AreaString = {
    [key in keyof AreaNumber]: string
}

type Height = AreaNumber["height"] // look up type

type AreaString1 <T> = {
    [key in keyof T] : T[key]
}

type Shape = {
    height: number,
    widht: number,
    name: string,
    isShape: boolean
}

const area1: AreaString1<Shape> = {
    height: 100,
    widht: 60,
    name: "rectangle",
    isShape: true
}

console.log( {area1} )
}