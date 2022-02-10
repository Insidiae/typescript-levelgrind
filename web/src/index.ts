import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const rootElement = document.getElementById("root");

const user = User.buildUser({ name: "Render Test", age: 0 });

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found.");
}
