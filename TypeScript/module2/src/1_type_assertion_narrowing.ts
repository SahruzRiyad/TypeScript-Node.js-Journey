{

// type assertion

const kgToGram = (value: string | number) : string | number | undefined =>{
    if(typeof value === "number"){
        return value * 1000;
    }

    else if(typeof value === "string"){
        const convertedValue = parseFloat(value) * 1000;
        return convertedValue;
    }
}

const result1 = kgToGram(1000) as number // type assertion use 'as' to fixed the type regardless the compiler
const result2 = kgToGram("1000") as string


type CustomError = {
    message: string,
}


try{

}catch(error){
    console.log((error as CustomError).message);
}

}