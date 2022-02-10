export class Attributes<DataType> {
  constructor(private _data: DataType) {}

  get = <Key extends keyof DataType>(key: Key): DataType[Key] => {
    return this._data[key];
  };

  getAll(): DataType {
    return this._data;
  }

  set(props: DataType): void {
    Object.assign(this._data, props);
  }
}
