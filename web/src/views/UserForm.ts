import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <input 
          type="text"
          name="name"
          placeholder="${this.model.get("name")}"
        />
        <button class="set-name">Change name</button>
        <button class="set-age">Randomize Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetNameClick,
      "click:.set-age": this.onSetAgeClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input?.value) {
      this.model.set({ name: input.value });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveClick = (): void => {
    this.model.save();
  };
}
