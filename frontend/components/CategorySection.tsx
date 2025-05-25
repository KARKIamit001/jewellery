"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ICategory {
  _id: string;
  name: string;
  imageUrl: string;
}

export default function CategorySection() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  // fetch all data
  const fetchAllCategories = async () => {
    try {
      const allProducts = await axios.get(
        "https://jewellery-y5qn.onrender.com/api/category"
      );
      console.log(allProducts.data.data);
      setCategories(allProducts.data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  console.log(categories);
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div>
      <p className="text-3xl font-medium mb-12 text-center">
        Explore Categories
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories?.map((category, index) => (
          <div key={index}>
            <Image
              src={category.imageUrl}
              height={200}
              width={300}
              alt="category-image"
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
