export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Size;
  image: string;
}


export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}


type Category = 'contrato' | 'prepago' | 'fibra_tv';
export type Size = "S_10" | "M_15" | "L_20" | "XL_40" | "XL_50";
export type Type = 'vodafone' | 'movistar' | 'orange' | 'digi';