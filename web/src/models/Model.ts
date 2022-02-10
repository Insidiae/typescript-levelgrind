import { AxiosPromise, AxiosResponse } from "axios";

export interface ModelAttributes<DataType> {
  get<Key extends keyof DataType>(key: Key): DataType[Key];
  getAll(): DataType;
  set(update: DataType): void;
}

export interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface ModelSync<DataType> {
  fetch(id: number): AxiosPromise;
  save(data: DataType): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class Model<DataType extends HasId> {
  constructor(
    private _attributes: ModelAttributes<DataType>,
    private _events: ModelEvents,
    private _sync: ModelSync<DataType>
  ) {}

  get = this._attributes.get;
  on = this._events.on;
  trigger = this._events.trigger;

  set(props: DataType): void {
    this._attributes.set(props);
    this._events.trigger("change");
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
