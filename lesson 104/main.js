
const greeter = {
  sayHello: function(name, age) {
    return `Hello "${name}", мне ${age} лет`;
  }
};


const users = [
  { name: "Alice", isAdmin: true },
  { name: "Bob", isAdmin: false },
  { name: "Charlie", isAdmin: false },
  { name: "Diana", isAdmin: true },
  { name: "Eve", isAdmin: false }
];


let regularUserCount = 0;


for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    regularUserCount++;
  }
}


console.log("Количество обычных пользователей:", regularUserCount);


console.log(greeter.sayHello("Влад", 20));
