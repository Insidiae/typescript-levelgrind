import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const rootElement = document.getElementById("root");

const user = User.buildUser({ name: "Render Test", age: 0 });

if (rootElement) {
  const userForm = new UserForm(rootElement, user);
  userForm.render();
} else {
  throw new Error("Root element not found.");
}
