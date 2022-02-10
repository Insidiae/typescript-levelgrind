import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <p>Name: ${this.model.get("name")}</p>
        <p>Age: ${this.model.get("age")}</p>
      </div>
    `;
  }
}
