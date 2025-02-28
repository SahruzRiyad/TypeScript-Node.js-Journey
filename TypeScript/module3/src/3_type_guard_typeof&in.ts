{
// Type Guards using Typeof & In
// typeof

type AlphaNumeric = string | number;

const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric =>{
    if(typeof param1 === "number" && typeof param2 == "number")
        return param1 + param2;
    else 
        return param1.toString() + param2.toString();
}

console.log(add(12,30) , add("12","21") , add("12",21))

// in guard

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string
    role: string
}

const guestUser = (user: NormalUser | AdminUser) =>{
    if("role" in user) // in guard to check "role" property is in user
        console.log(`My name is ${user.name} and my designation is ${user.role}`)
    else 
        console.log(`My name is ${user.name} and I am a normal user`)
}

const normalUser: NormalUser = {
    name: "Shawkot"
};

const adminUser: AdminUser = {
    name: "Liakot",
    role: "admin",
};

guestUser(normalUser);
guestUser(adminUser);


}