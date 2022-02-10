import { UserList } from "./views/UserList";
import { User } from "./models/User";

const collection = User.buildUserCollection();
collection.on("change", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const userList = new UserList(rootElement, collection);
    userList.render();
    console.log(userList);
  } else {
    throw new Error("Root element not found.");
  }
});

collection.fetch();
