import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'contrato' | 'prepago' | 'fibra_tv';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = "S_10" | "M_15" | "L_20" | "XL_40" | "XL_50";
type ValidTypes = 'vodafone' | 'movistar' | 'orange' | 'digi';
                  //'shirts' | 'pants' | 'hoodies' | 'hats';

interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}




export const initialData: SeedData = {

  users: [
    {
      email: 'adrian311@gmail.com',
      name: 'Adrian',
      password: bcryptjs.hashSync('Madrid24'),
      role: 'admin'
    },
    {
      email: 'yarelys.lugo@gmail.com',
      name: 'Melissa Flores',
      password: bcryptjs.hashSync('Madrid'),
      role: 'user'
    },


  ],


  categories: [
    'vodafone', 'movistar', 'orange', 'digi'
  ],
  products: [
    {
      description: "Tarifa Contrato Vodafone",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg'
      ],
      inStock: 100,
      price: 15,
      sizes: [ "S_10" ],
      slug: "prepago_vodafone",
      type: 'vodafone',
      tags: [ 'sweatshirt' ],
      title: "Tarifa Contrato Vodafone",
      gender: 'contrato'
    },
    
    
    {
      description: "Tarifa Prepago S 100Gb",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 100,
      price: 50,
      sizes: [ "XL_50" ],
      slug: "prepago_Orange_50",
      type: 'orange',
      tags: [ 'hoodie' ],
      title: "Prepago Vodafone S",
      gender: 'prepago'
    },
    

    {
      description: "Fibra mas Tv Gratis.",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ "S_10", ],
      slug: "Tv_Gratis",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "Tv Gratis mas Fibra mas Tv",
      gender: 'fibra_tv'
    },
    
    
  ]
};