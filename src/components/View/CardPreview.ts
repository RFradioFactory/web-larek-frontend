import { Card } from "./Card";
import { IActions, IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface ICard {
  text: HTMLElement;
  button: HTMLElement;
  render(data: IProductItem): HTMLElement;
}

export class CardPreview extends Card implements ICard {
  text: HTMLElement;
  button: HTMLElement;

  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions) {
    super(template, events, actions);
    
  }

  notSale(data:IProductItem) {
    
  }

  render(data: IProductItem): HTMLElement {
    
  }
}