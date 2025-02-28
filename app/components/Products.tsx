import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import CategoryCard from "./CategoryCard";

const CategoriesList = async () => {
  // Fetch categories
  const { categories } = await client.fetch(groq`
    {
      "categories": *[_type == "category"]{
        name,
        "slug": slug.current,
        "image": image
      }
    }
  `);

  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[50px]">
      <div className="md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto">
        <div className="py-4 text-center">
          <h1 className="text-3xl font-bold">Shop by Category</h1>
          <h2 className="text-gray-600">Discover the best collections</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {categories.map((category: any) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
