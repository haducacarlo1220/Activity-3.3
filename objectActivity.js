let car = {
    type: "Sedan",
    model: "Camry",
    color: "Red"
};

console.log("Type of car object:", typeof car); 

car.type = "Toyota";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Car object after adding wheels property:", car);
