"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { needProducts } from "@/sanity/lib/queries"
import { Product } from "@/types/products"
import Image from "next/image"
import { useEffect, useState } from "react"

const Products = () => {

  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response: Product[] = await client.fetch(needProducts)
      setProduct(response);

    }
    fetchProducts()

  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-8 lg:p-16">

      {/* Product 1 */}

      {product.map((product) => (
        <div key={product._id}>
          {product.image && (<Image src={urlFor(product.image).url()} alt="product" width={287} height={287} priority={true} className="w-full h-60" />)}
          <div className="w-full h-auto text-center md:text-left md:w-[194px] md:h-[71px] mt-3">
            <p>{product.name}</p>
            <p className="text-xl md:text-2xl font-medium">Rs.{product.price}</p>
          </div>
        </div>
      ))}

      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 mx-auto mt-28 mb-24">
        <Image src={"/products/group.svg"} alt="group of Products" width={392} height={60} className="w-full h-auto" />
      </div>


    </div>
  )
}

export default Products
