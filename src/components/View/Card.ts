import { IActions, IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface ICard {
  render(data: IProductItem): HTMLElement;
}

export class Card implements ICard {
  protected _cardElement: HTMLElement;
  protected _cardCategory: HTMLElement;
  protected _cardTitle: HTMLElement;
  protected _cardImage: HTMLImageElement;
  protected _cardPrice: HTMLElement;
  protected _colors = <Record<string, string>>{
    "дополнительное": "additional",
    "софт-скил": "soft",
    "кнопка": "button",
    "хард-скил": "hard",
    "другое": "other",
  }
  
  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions) {
    
  }

  protected setText(element: HTMLElement, value: unknown): string {
    
  }

  set cardCategory(value: string) {
    
  }

  protected setPrice(value: number | null): string {
    
  }

  render(data: IProductItem): HTMLElement {
    
  }
}