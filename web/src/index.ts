import { User } from "./models/User";

const collection = User.buildUserCollection();
collection.on("change", () => {
  console.log("Collection has been changed!");
  console.log(collection);
});

collection.fetch();
