type CallbackFunction = () => void;

export class Eventing {
  events: { [key: string]: CallbackFunction[] } = {};

  on = (eventName: string, callback: CallbackFunction): void => {
    const handlers = this.events[eventName] ?? [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName] || [];

    if (!handlers?.length) {
      return;
    }

    for (let callback of handlers) {
      callback();
    }
  };
}
