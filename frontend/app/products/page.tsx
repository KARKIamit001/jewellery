"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IProduct {
  _id: string;
  name: string;
  description: string;
  proviousPrice: number;
  currentPrice: number;
  rating: number;
  category: string;
  imageUrl: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // fetch all product

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(
        "https://jewellery-y5qn.onrender.com/api/products"
      );
      setProducts(response.data.data);
    } catch (error) {
      console.log("something went wrogn", error);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product: IProduct, index: number) => (
        <div >
          <Image
            src={product.imageUrl}
            height={200}
            width={200}
            alt="product-image"
            
          />
          <div>
            <p>ProductName:  {product.name}</p>
            <p>Description:  {product.description}</p>
            <p>PreviousPrice:  {product.proviousPrice}</p>
            <p>CurrentPrice:  {product.currentPrice}</p>
            <p>Rating:  {product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
