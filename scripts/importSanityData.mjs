import { createClient } from '@sanity/client';
import fetch from 'node-fetch';

// Initialize Sanity client
const client = createClient({
  projectId: "dtv0dly1",
  dataset: "production",
  useCdn: false, // Set to true if you want faster reads
  apiVersion: '2025-01-13',
  token: "skQBlpJk7W9zeU1Ap2uTvl6XnIIbkPFXuX9ZC0Fn5nZV88tx5HeawkluXam9A8c8joxrsT3KAV2s2hS5oSRbhvDeSxRQX3RZNdRzTMph7sCTn27z4Ryyi7qg5beFneQyXkyBJmNCh2DJ4WpqxlYu7EwhXOotb4Ifpd3Of8RB35veGCKzVa0d", // Replace with your Sanity token
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: 'product',
        id: product.id,
        name: product.name,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price), // Ensure the price is a number
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start the migration
migrateProducts();