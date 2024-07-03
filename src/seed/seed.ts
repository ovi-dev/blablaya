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
      description: "Tarifa Contrato Vodafone",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 100,
      price: 20,
      sizes: [ "L_20", ],
      slug: "contrato_vodafone_20",
      type: 'vodafone',
      tags: [ 'jacket' ],
      title: "Contrato Vodafone 20",
      gender: 'contrato'
    },
    {
      description: "Contrato Vodafonre",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 100,
      price: 40,
      sizes: ["XL_40"],
      slug: "contrato_vodafone",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "Contrato Vodafone 40",
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
      description: "Prepago Vodafone M llamadas internacionales",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 10,
      price: 130,
      sizes: [ "M_15" ],
      slug: "women_chill_half_zip_cropped_hoodie",
      type: 'orange',
      tags: [ 'hoodie' ],
      title: "Prepago vodafone M",
      gender: 'prepago'
    },
    {
      description: "Prepago L Vodafone 200GB.",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 162,
      price: 100,
      sizes: [ "L_20" ],
      slug: "prepago_vodafone_L",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "Women's Raven Joggers",
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
      sizes: [ "S_10", "M_15", "L_20" ],
      slug: "Tv_Gratis",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "Tv Gratis mas Fibra mas Tv",
      gender: 'fibra_tv'
    },
    {
      description: "Fibra mas Tv .",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 10,
      price: 65,
      sizes: [ "S_10", "M_15", "L_20" ],
      slug: "kids_cyberquad_bomber_jacket",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "v Gratis mas Fibra mas Tv",
      gender: 'fibra_tv'
    },
    {
      description: "Fibra mas TV .",
      images: [
        'logovodafone.jpg',
        'logovodafone.jpg',
      ],
      inStock: 10,
      price: 30,
      sizes: [ "S_10", "M_15", "L_20" ],
      slug: "kids_corp_jacket",
      type: 'vodafone',
      tags: [ 'shirt' ],
      title: "v Gratis mas Fibra mas Tv",
      gender: 'fibra_tv'
    },
  ]
};