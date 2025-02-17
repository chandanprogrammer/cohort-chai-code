const teas ={
    name: "green tea",
    type: "green",
    caffine: "low"
}

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "Assam";

teas.caffine = "Medium";
delete teas.type
console.log(teas);

console.log("origin" in teas);

for(let key in teas){
    console.log(key + ": " + teas[key]);
    
}

const myTeas = {
    greenTea: {
        name: "Green tea"
    },
    blackTea: {
        name: "Black tea"
    }
}

const teaCopy = {...myTeas}

