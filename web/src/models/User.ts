import axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type CallbackFunction = () => void;

export class User {
  events: { [key: string]: CallbackFunction[] } = {};

  constructor(private _data: UserProps) {}

  get(propName: string): string | number {
    return this._data[propName];
  }

  set(props: UserProps): void {
    Object.assign(this._data, props);
  }

  on(eventName: string, callback: CallbackFunction) {
    const handlers = this.events[eventName] ?? [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];

    if (!handlers?.length) {
      return;
    }

    for (let callback of handlers) {
      callback();
    }
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this._data);
    } else {
      axios.post("http://localhost:3000/users", this._data);
    }
  }
}
