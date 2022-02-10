import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { APISync } from "./APISync";

interface UserProps {
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
}
