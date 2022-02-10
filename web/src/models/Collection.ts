import axios, { AxiosResponse } from "axios";

import { Eventing } from "./Eventing";

export class Collection<ModelType, ModelProps> {
  models: ModelType[] = [];

  private _events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (jsonData: ModelProps) => ModelType
  ) {}

  get on() {
    return this._events.on;
  }

  get trigger() {
    return this._events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((value: ModelProps) => {
        const user = this.deserialize(value);
        this.models.push(user);
      });

      this._events.trigger("change");
    });
  }
}
