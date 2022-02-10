import { Model } from "./Model";
import { Collection } from "./Collection";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { APISync } from "./APISync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(props: UserProps): User {
    return new User(
      new Attributes<UserProps>(props),
      new Eventing(),
      new APISync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(rootUrl, (jsonData: UserProps) =>
      User.buildUser(jsonData)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);

    this.set({ age });
  }
}
