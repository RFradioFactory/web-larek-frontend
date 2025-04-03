import { createElement } from "../../utils/utils";
import { IEvents } from "../base/events";

export interface IBasket {
  basket: HTMLElement;
  title: HTMLElement;
  basketList: HTMLElement;
  button: HTMLButtonElement;
  basketPrice: HTMLElement;
  headerBasketButton: HTMLButtonElement;
  headerBasketCounter: HTMLElement;
  renderHeaderBasketCounter(value: number): void;
  renderSumAllProducts(sumAll: number): void;
  render(): HTMLElement;
}

export class Basket implements IBasket {
  basket: HTMLElement;
  title: HTMLElement;
  basketList: HTMLElement;
  button: HTMLButtonElement;
  basketPrice: HTMLElement;
  headerBasketButton: HTMLButtonElement;
  headerBasketCounter: HTMLElement;
  
  constructor(template: HTMLTemplateElement, protected events: IEvents) {
    
  }

  set items(items: HTMLElement[]) {
    
  }

  renderHeaderBasketCounter(value: number) {
    
  }
  
  renderSumAllProducts(sumAll: number) {
    
  }

  render() {
    
  }
}