// var pet = {
//     name: "Poppy",
//     type: "dog",
//     age: 3,
//     happiness: 30,
//     hunger: 45,

//     // Methods
//     feed: function() {
//         this.hunger -= 20; // Decrease hunger by 20
//         if (this.hunger < 0) {
//             this.hunger = 0; // hunger doesn't go below 0
//         }
//         alert(`${this.name} has been fed! The hunger level is now ${this.hunger}.`);
//     },

//     play: function() {
//         this.happiness += 20;
//         if (this.happiness > 100) {
//             this.happiness = 100; // happiness doesn't go above 100
//         }
//         alert(`${this.name} played! Happiness level is now ${this.happiness}.`);
//     },

//     agePet: function() {
//         this.age += 1;
//         this.happiness -= 5;
//         this.hunger += 10;
        
//         // Correct conditions for happiness and hunger limits
//         if (this.happiness < 0) {
//             this.happiness = 0;
//         }
//         if (this.hunger > 100) {
//             this.hunger = 100;
//         }
//         alert(`${this.name} has aged! Age: ${this.age}, Happiness: ${this.happiness}, Hunger: ${this.hunger}`);
//     }
// };

// function interactive() {
//     while (true) {
//         // Ask the user what they want to do
//         let action = prompt("What would you like to do? (feed, play, age, exit...)");

//         if (action === "feed") {
//             pet.feed();
//         } else if (action === "play") {
//             pet.play();
//         } else if (action === "age") {
//             pet.agePet();
//         } else if (action === "exit") {
//             alert("Thanks for taking care of your pet!");
//             break;
//         } else {
//             alert("Invalid action. Please choose Correct action.");
//         }
//     }
// }

// // Start the interactive function
// interactive();
