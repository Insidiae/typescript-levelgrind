import { AxiosResponse } from "axios";

import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  private _events: Eventing = new Eventing();
  private _sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private _attributes: Attributes<UserProps>;

  constructor(props: UserProps) {
    this._attributes = new Attributes<UserProps>(props);
  }

  get get() {
    return this._attributes.get;
  }

  set(props: UserProps): void {
    this._attributes.set(props);
    this._events.trigger("change");
  }

  get on() {
    return this._events.on;
  }

  get trigger() {
    return this._events.trigger;
  }

  fetch(): void {
    const id = this._attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch user without an id.");
    }

    this._sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this._sync
      .save(this._attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch((): void => {
        this.trigger("error");
      });
  }
}
