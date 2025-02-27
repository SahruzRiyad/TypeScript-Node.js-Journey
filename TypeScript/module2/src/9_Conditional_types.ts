{
// Conditional type

type a1 = number
type a2 = undefined

type x = a1 extends null? true : false; // Conditional type
type y = a1 extends null? true : a2 extends undefined? undefined : any;

type Developer = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof Developer? true : false;

type HasTractor = CheckVehicle<"tractor">


}