interface IProduct {
  id?: number;
  title: string;
  content?: string;
  price: number;
  imageUrl: string;
  regionCode: string;
  categoryCode?: string;
  createdAt: string;
}

export default IProduct;
