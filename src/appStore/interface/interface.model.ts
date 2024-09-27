export interface Card {
  el: string;
  id: string;
  maxChar: number;
  name: string;
}
export interface Template {
  isReorderable: boolean;
  comps: Card[];
}
export interface Inpt {
  id: string;
  value: string;
}
