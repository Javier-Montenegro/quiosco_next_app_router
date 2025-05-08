import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import Link from "next/link"
import { notFound } from "next/navigation"

async function getProductBiId(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id
    }
  })
  if (!product) {
    notFound()
  }
  return product
}


export default async function EditProductsPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = Number(params?.id)

  if (isNaN(id)) {
    notFound();
  }

  const product = await getProductBiId(id);

  //const product = await getProductBiId(+params.id)

  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>

      <GoBackButton />

      <EditProductForm>
        <ProductForm
          product={product}
        />
      </EditProductForm>
    </>
  )
}
