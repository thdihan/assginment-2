//  {
//     "name": "Wireless Mouse",
//     "description": "Ergonomic wireless mouse with adjustable DPI settings.",
//     "price": 29.99,
//     "category": "Electronics",
//     "tags": ["computer", "peripherals", "wireless", "ergonomic"],
//     "variants": [
//       {
//         "type": "color",
//         "value": "Black"
//       },
//       {
//         "type": "color",
//         "value": "White"
//       }
//     ],
//     "inventory": {
//       "quantity": 150,
//       "inStock": true
//     }
//   },

export type Variant = {
    type: string;
    value: string;
};

export type Inventory = {
    quantity: number;
    inStock: boolean;
};

export type Product = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
};
