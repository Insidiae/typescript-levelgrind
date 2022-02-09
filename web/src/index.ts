import { User } from "./models/User";

const user = new User({ id: 2 });

user.fetch();

console.log(user);

// setTimeout(() => {
//   user.set({ name: "Electric Boogaloo" });
//   user.save();
//   console.log(user);
// }, 1000);
