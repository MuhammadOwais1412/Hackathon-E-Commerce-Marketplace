export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
     
    ],
  };
  