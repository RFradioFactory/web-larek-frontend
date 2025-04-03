import { IEvents } from "../base/events";

export interface IOrder {
  formOrder: HTMLFormElement;
  buttonAll: HTMLButtonElement[];
  paymentSelection: String;
  formErrors: HTMLElement;
  render(): HTMLElement;
}

export class Order implements IOrder {
  formOrder: HTMLFormElement;
  buttonAll: HTMLButtonElement[];
  buttonSubmit: HTMLButtonElement;
  formErrors: HTMLElement;

  constructor(template: HTMLTemplateElement, protected events: IEvents) {
    
  }

  
  set paymentSelection(paymentMethod: string) {
    
  }

  set valid(value: boolean) {
    
  }

  render() {
    return this.formOrder
  }
}