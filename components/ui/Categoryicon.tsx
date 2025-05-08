"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Category } from "@prisma/client"

type CategoryiconProps = {
  category: Category
}

export default function Categoryicon({ category }: CategoryiconProps) {
  const params = useParams<{ category: string }>()
  const selectedCategory = params.category
  return (
    
    <div className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b 
      ${category.slug === selectedCategory ? "bg-amber-400" : ""
      }`}>
      <div className="w-16 h-16 relative">
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt="Imagen Categoria"
        />
      </div>
      <Link
        className="text-xl font-bold"
        href={`/order/${category.slug}`}
      >
        {category.name}
      </Link>
    </div>
  )
}

