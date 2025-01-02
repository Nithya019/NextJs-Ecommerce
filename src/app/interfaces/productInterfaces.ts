export interface ProductInterface {
  id: number;
  type: string;
  image: string;
  title: string;
  price: string;
  shape: string;
}

export interface cartItemInterface extends ProductInterface {
  count: number;
}
