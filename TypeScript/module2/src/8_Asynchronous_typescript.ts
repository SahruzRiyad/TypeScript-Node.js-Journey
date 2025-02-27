{

// Asynchronous Typescript
// Promise -> fulfill or reject

const createPromise = (): Promise<string> =>{
    return new Promise <string> ((resolve , reject) =>{
        const data: string = "Contained info"

        if(data){
            resolve(data);
        }else{
            reject("Failed to fetch data");
        }
    });
};


// Calling create promise function

const showData = async() =>{
    const data: string = await createPromise()
    console.log(data)
}

showData();

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

const getTodo = async(): Promise<Todo> =>{
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
}

const logData = async() => {
    const getData = await getTodo();
    console.log( {getData} )
}


logData()


}