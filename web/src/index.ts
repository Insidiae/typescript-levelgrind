import { User } from "./models/User";

const user = User.buildUser({ id: 3 });

user.fetch();

user.on("change", () => {
  console.log("User was changed, we might probably need to update the HTML!");
  console.log(user);
});

user.on("save", () => {
  console.log("Saving user to database...");
});

// user.trigger("change");
user.set({ name: "Test III", age: 420 });
user.save();
