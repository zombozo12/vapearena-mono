import { Pagination } from "@mantine/core"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import React from "react"
import { ProductCards } from "../../../components/ProductCards/ProductCards"
import { ResponseHandler } from "../../../lib/api"
import { Brand, ErrorResponse, Pagination as PaginationType, VapeByBrandNameResponse } from "../../../types/app-types"

export const getServerSideProps: GetServerSideProps<{
  brand: Brand | null
  vapes: VapeByBrandNameResponse[] | null
  pagination: PaginationType | null
  error: ErrorResponse | null
}> = async ({ params, query }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { name } = params
  const { page } = query

  const currentPage = parseInt(page as string)

  if (Number.isNaN(currentPage)) {
    return {
      redirect: {
        destination: `/brands/${name}?page=1`,
        permanent: false,
      },
    }
  }

  if (currentPage < 1) {
    return {
      redirect: {
        destination: `/brands/${name}?page=1`,
        permanent: false,
      },
    }
  }

  let errorResponse: ErrorResponse

  const brandRes = await fetch(`${process.env.API_URL}/api/brand/s/${name}`)
  const brandBody = await ResponseHandler(brandRes)

  if (brandBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = brandBody
    return {
      props: {
        brand: null,
        vapes: null,
        pagination: null,
        error: errorResponse,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const brand: Brand = brandBody.data

  const vapeRes = await fetch(`${process.env.API_URL}/api/vape/all-by-brand/${brand.slug}?page=${currentPage}&limit=50`)
  const vapeBody = await ResponseHandler(vapeRes)

  if (vapeBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = brandBody
    return {
      props: {
        brand: null,
        vapes: null,
        pagination: null,
        error: errorResponse,
      },
    }
  }

  const pagination: PaginationType = vapeBody.data

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const vapes: VapeByBrandNameResponse[] = vapeBody.data.rows

  return {
    props: {
      brand: brand,
      vapes: vapes,
      pagination: pagination,
      error: null,
    },
  }
}

export default function Brands({
  brand,
  vapes,
  pagination,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <section className="w-full bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              {brand?.name}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {brand?.description}
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          {error ? (
            <div className="justify-center space-y-8">No Vapes Found</div>
          ) : (
            <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
              {vapes && vapes.map((singleItem, index) => <ProductCards key={index} {...singleItem} />)}
            </div>
          )}
        </div>
        <Pagination
          className="mx-auto max-w-screen-xl justify-center px-4 py-8 sm:py-16 lg:px-6"
          value={pagination?.page}
          total={Number(pagination?.total_pages)}
          onChange={(page) => {
            window.location.href = `/brands/${brand?.slug}?page=${page}`
          }}
        />
      </section>
    </>
  )
}
