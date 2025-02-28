import React from "react";
import CategoryCard from "./CategoryCard";

const CategoriesList = ({ categories }: { categories: any[] }) => {
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[50px]">
      <div className="md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto">
        <h1 className="text-3xl font-bold text-center">Shop by Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
