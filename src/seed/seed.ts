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
  gender: 'contrato' | 'prepago' | 'fibra_tv'| 'otros';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'user'
}



type ValidSizes = "L_10" | "L_15" | "L_20" | "L_40" | "L_50";
type ValidTypes = 'vodafone' | 'movistar' | 'orange' | 'digi'| 'Mas Movil'| 'JazzTel'| 'Simyo';
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
    'Vodafone', 'Movistar', 'Orange', 'Digi'
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
      sizes: [ "L_10" ],
      slug: "prepago_vodafone",
      type: 'vodafone',
      tags: [ 'prepago' ],
      title: "Tarifa Contrato Vodafone",
      gender: 'contrato'
    },
    
    
    {
      description: "Tarifa Prepago S 100Gb",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 12,
      price: 1,
      sizes: [ "L_50" ],
      slug: "prepago_Orange_50",
      type: 'orange',
      tags: [ 'prepago' ],
      title: "Prepago Vodafone S",
      gender: 'prepago'
    },
  
    
  ]
};