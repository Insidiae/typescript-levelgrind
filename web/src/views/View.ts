import { Model } from "../models/Model";

export abstract class View<ModelType extends Model<ModelProps>, ModelProps> {
  regions: { [key: string]: Element } = {};

  abstract template(): string;

  constructor(public parent: Element, public model: ModelType) {
    this.bindModel();
  }

  bindModel() {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let regionKey in regionsMap) {
      const selector = regionsMap[regionKey];
      const regionElement = fragment.querySelector(selector);

      if (regionElement) {
        this.regions[regionKey] = regionElement;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.bindRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
