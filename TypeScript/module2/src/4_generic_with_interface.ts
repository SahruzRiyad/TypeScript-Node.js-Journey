{
//  Generic type with interface

interface Developer <T> {
    computer: {
        name: string,
        model: string,
        realeaseYear: number,
    },
    smartWatch: T
};

type MIWatch =  {
    name: string;
    price: number;
    version: string;
}

const poorDeveloper: Developer<MIWatch> = {
    computer: {
        name: "Asus",
        model: "XY-645",
        realeaseYear: 2016,
    },

    smartWatch: {
        name: "MI-60",
        price: 200,
        version: "2.0.1"
    }
}

interface RealmeWatch {
    name: string;
    price: number;
    heartTrack: boolean;
    sleepTrack: boolean;
}


const richDeveloper: Developer<RealmeWatch> = {
    computer: {
        name: "HP",
        model: "XY-645",
        realeaseYear: 2024,
    },

    smartWatch: {
        name: "REALME-60",
        price: 500,
        heartTrack: true,
        sleepTrack: true,
    }
}


// Another biker developer
interface BikerDeveloper <T, X = null> { // by default X = Null
    computer: {
        name: string,
        model: string,
        realeaseYear: number,
    },
    smartWatch: T,
    bike?: X
};

const poorBikerDeveloper: BikerDeveloper<MIWatch> = { // Doesnt have bike
    computer: {
        name: "Asus",
        model: "XY-645",
        realeaseYear: 2016,
    },

    smartWatch: {
        name: "MI-60",
        price: 200,
        version: "2.0.1"
    }
}


type SuzukiBike = {
    name: string;
    model: string;
    realeaseYaer?: number; // realease year optional
}

const richBikerDeveloper: BikerDeveloper<RealmeWatch, SuzukiBike> = {
    computer: {
        name: "HP",
        model: "XY-645",
        realeaseYear: 2024,
    },

    smartWatch: {
        name: "REALME-60",
        price: 500,
        heartTrack: true,
        sleepTrack: true,
    },

    bike: {
        name: "Suzuki brand new",
        model: "version 2.0",
    }
}



}