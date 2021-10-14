export interface ShoppingDocument {
  id?: string;
  product: {
    productId: string;
    name: string;
  };
  quantity: number;
  price?: number;
  createTime?: Date;
}
