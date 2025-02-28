import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const CategoryCard = ({ category }: { category: any }) => {
  if (!category || !category.slug) return null;

  return (
    <Link href={`/category/${category.slug}`} className="block">
      <div className="bg-white p-5 rounded-xl shadow-lg text-center transition duration-300 hover:scale-105">
        {category.image ? (
          <Image
            src={urlFor(category.image).url()}
            alt={category.name}
            width={200}
            height={150}
            className="object-cover w-full h-32 rounded-lg"
          />
        ) : (
          <div className="w-full h-32 bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-500">No Image</p>
          </div>
        )}
        <h1 className="text-lg font-bold text-gray-800 mt-2">{category.name}</h1>
      </div>
    </Link>
  );
};

export default CategoryCard;
