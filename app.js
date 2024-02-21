// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }  

function createInstructor(firstName, lastName){
    return{
    firstName,
    lastName,
    }
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"


const favoriteNumber = 42;
//const instructor = {
   // firstName: 'Colt',
 //   [favoriteNumber]: "That is my favorite!"
//}

const instructor = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + "says bye!";
    }
  }


  const d = createAnimal("dog", "bark", "Woooof!")
  // {species: "dog", bark: ƒ}
  d.bark()  //"Woooof!"
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
  // {species: "sheep", bleet: ƒ}
  s.bleet() //"BAAAAaaaa"

  function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
            return noise;
        }
    }
  }














// function makePerson(first, last, age){
//     return { 
//          first,
//          last,
//          age,
//         isAlive : true
//     };
// }

// // const mathStuff = {
// //     x: 200,
// //     add : function(a,b){
// //         return a + b
// //     },
// //     square : function(a){
// //         return a ** 2;
// //     }
// // } //or 

// const mathStuff = {
//     x : 200,
//     add(a,b){
//         return a + b;
//     },
//     square(a){
//         return a * a;
//     }
// }

// function makeColor (name, hex) {
//     return {
//         [name] : hex,
//         [hex]: name
//     };
// }

// const mystery = {
//     [6 + 6]: 'twelve'
// };