import { IEvents } from "../base/events";

export interface IModal {
  open(): void;
  close(): void;
  render(): HTMLElement
}

export class Modal implements IModal {
  protected modalContainer: HTMLElement;
  protected closeButton: HTMLButtonElement;
  protected _content: HTMLElement;
  protected _pageWrapper: HTMLElement;
  
  constructor(modalContainer: HTMLElement, protected events: IEvents) {
    
  }

  // принимает элемент разметки которая будет отображаться в "modal__content" модального окна
  set content(value: HTMLElement) {
    
  }

  // открытие модального окна
  open() {
    
  }

  // закрытие модального окна
  close() {
    
  }

  set locked(value: boolean) {
    
  }

  render(): HTMLElement {
    
  }
}