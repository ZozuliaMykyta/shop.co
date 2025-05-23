export interface IProduct {
  _id: string;
  title: string;
  description?: string;
  price: number;
  imageUrl: string;
  rating?: number;
  quantity: number;
  totalPrice?: number;
  size?: string;
}
