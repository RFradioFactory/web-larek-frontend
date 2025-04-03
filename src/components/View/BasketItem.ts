import { IActions, IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface IBasketItem {
  basketItem: HTMLElement;
	index:HTMLElement;
	title: HTMLElement;
	price: HTMLElement;
	
	render(data: IProductItem, item: number): HTMLElement;
}

export class BasketItem implements IBasketItem {
  basketItem: HTMLElement;
	index:HTMLElement;
	title: HTMLElement;
	price: HTMLElement;
	

  constructor (template: HTMLTemplateElement, protected events: IEvents, actions?: IActions) {
    
  }

	protected setPrice(value: number | null) {
    
  }

	render(data: IProductItem, item: number) {
		
	}
}