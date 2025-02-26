{

// Union types

type FrontendDeveloper = "fakibazdeveloper" | "juniordeveloper"
type BackendDeveloper = "attentivedeveloper" | "seniordeveloper"

type Developer = FrontendDeveloper | BackendDeveloper

const newDeveloper : FrontendDeveloper = 'fakibazdeveloper'
const websiteDeveloper: Developer = "seniordeveloper"

type User = {
    name: string,
    email?: string,
    gender: "male" | "female",
    bloodGroup : "A+" | "B+" | "O+" | "AB+"
};

const user1: User = {
    name: "Rahim",
    gender: "male",
    bloodGroup: "O+",
};

// Intersection types

type CricketPlayer = {
    skills: string[],
    designation1: "Batter" | "Bowler" | "Alrounder"
};

type FootballPlayer = {
    skills: string[],
    designation2: "Forward" | "Midfielder" | "Defense"
};

type Player = CricketPlayer & FootballPlayer;

const player1: Player = {
    skills: ["speed", "shot"],
    designation1: "Batter",
    designation2: "Forward"
};

}