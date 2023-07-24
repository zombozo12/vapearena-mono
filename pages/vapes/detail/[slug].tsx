import { Badge } from "@mantine/core"
import { withIronSessionSsr } from "iron-session/next"
import { sanitize } from "isomorphic-dompurify"
import { snakeCase } from "lodash"
import { marked } from "marked"
import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ResponseHandler } from "../../../lib/api"
import { sessionOptions } from "../../../lib/withSession"
import { Battery, Cartridge, Display, ErrorResponse, Processor, Vape } from "../../../types/app-types"

export const getServerSideProps = withIronSessionSsr<{
  vape: Vape | null
  body: Body | null
  processor: Processor | null
  display: Display | null
  cartridge: Cartridge | null
  battery: Battery | null
  error: ErrorResponse | null
}>(async function ({ params }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { slug } = params

  let errorResponse: ErrorResponse

  const vapeRes = await fetch(`${process.env.API_URL}/api/vape/s/${slug}`)
  const vapeBody = await ResponseHandler(vapeRes)
  if (vapeBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = vapeBody as ErrorResponse
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  const vape: Vape = vapeBody.data

  const bodyRes = await fetch(`${process.env.API_URL}/api/body/vape/${vape.id}`)
  const bodyBody = await ResponseHandler(bodyRes)
  if (bodyBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = bodyBody
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  const body: Body = bodyBody.data

  const processorRes = await fetch(`${process.env.API_URL}/api/processor/vape/${vape.id}`)
  const processorBody = await ResponseHandler(processorRes)
  if (processorBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = processorBody
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const processor: Processor = processorBody.data

  const displayRes = await fetch(`${process.env.API_URL}/api/display/vape/${vape.id}`)
  const displayBody = await ResponseHandler(displayRes)
  if (displayBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = displayBody
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const display: Display = displayBody.data

  const cartridgeRes = await fetch(`${process.env.API_URL}/api/cartridge/vape/${vape.id}`)
  const cartridgeBody = await ResponseHandler(cartridgeRes)
  if (cartridgeBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = cartridgeBody
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cartridge: Cartridge = cartridgeBody.data

  const batteryRes = await fetch(`${process.env.API_URL}/api/battery/vape/${vape.id}`)
  const batteryBody = await ResponseHandler(batteryRes)
  if (batteryBody.is_error) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    errorResponse = batteryBody
    return {
      props: {
        vape: null,
        body: null,
        processor: null,
        display: null,
        cartridge: null,
        battery: null,
        error: errorResponse,
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const battery: Battery = batteryBody.data

  return {
    props: {
      vape: vape,
      body: body,
      processor: processor,
      display: display,
      cartridge: cartridge,
      battery: battery,
      error: null,
    },
  }
}, sessionOptions)

export default function Slug({
  vape,
  body,
  processor,
  display,
  cartridge,
  battery,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (error) {
    return (
      <>
        <Head>
          <title>404</title>
        </Head>
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-semibold text-gray-800 dark:text-gray-200">404</h1>
            <p className="text-gray-800 dark:text-gray-300">Page not found. Check the address or</p>
            <Link href="/" className="text-blue-500 hover:underline dark:text-blue-400">
              go to main page
            </Link>
          </div>
        </div>
      </>
    )
  }

  const html = marked.parse(vape?.description || "")
  return (
    <>
      <section className="bg-blue-500 dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
              {vape?.name}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-white dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              {vape?.brand}
            </p>
          </div>
          <div className="lg:col-span-5 lg:mt-0 lg:flex">
            <div className="stack">
              {vape?.images.map((image, index) => (
                <Image
                  key={"vapes-image-" + index}
                  className="rounded shadow"
                  src={image}
                  alt="mockup"
                  width="500"
                  height="500"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="mx-auto max-w-3xl py-6 sm:px-6 lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-8 lg:px-8">
          <main className="lg:col-span-6 xl:col-span-7">
            <div className="bg-white px-5 py-3">
              <h2 className="mt-5 text-xl font-bold underline decoration-dashed">Description</h2>
              <article
                className="prose prose-slate lg:max-w-full"
                dangerouslySetInnerHTML={{
                  __html: sanitize(html, {
                    RETURN_DOM: true,
                  }).innerHTML,
                }}
              />
              <h2 className="mt-5 text-xl font-bold underline decoration-dashed">Brand</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{vape?.brand}</dd>
                </div>
              </dl>
              <h2 className="text-xl font-bold underline decoration-dashed">Release Date</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Release Date</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">release_date</dd>
                </div>
              </dl>
            </div>
            <section className="bg-white px-5 py-3">
              <h2 className="text-xl font-bold underline decoration-dashed">Body</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{body?.name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{body?.brand}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Dimension</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {body?.dimension.x + " x " + body?.dimension.y + " x " + body?.dimension.z + " mm"}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Weight</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {body?.weight.value + " " + body?.weight.unit}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Materials</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {body?.materials.map((material: string, index: number) => (
                        <li key={"body-material-" + index} className="mt-1">
                          {material}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Colors</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {body?.colors.map((color: string, index: number) => (
                      <Badge key={"body-color-" + index} className="mr-1" color={color} variant="dot">
                        {snakeCase(color)}
                      </Badge>
                    ))}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Buttons</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {body?.buttons.map((button: string, index: number) => (
                        <li key={"body-button-" + index} className="mt-1">
                          {button}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Airflow Control</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {body?.airflow_control ? "Yes" : "No"}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Connections</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {body?.connections.map((connection: string, index: number) => (
                        <li key={"body-connection-" + index} className="mt-1">
                          {connection}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </section>
            <section className="bg-white px-5 py-3">
              <h2 className="text-xl font-bold underline decoration-dashed">Processor</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{processor?.name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{processor?.brand}</dd>
                </div>
              </dl>
            </section>
            <section className="bg-white px-5 py-3">
              <h2 className="text-xl font-bold underline decoration-dashed">Battery</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{battery?.name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{battery?.brand}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{battery?.type}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Capacity</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{battery?.capacity}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Watt Range</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {battery?.watt_range.min + "-" + battery?.watt_range.max + " W"}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Power Output</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {battery?.power_output.min + "-" + battery?.power_output.max + battery?.power_output.unit}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Charge Time</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {battery?.charge_time + " minutes"}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Charge Type</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {battery?.charge_type.map((charge_type, index) => (
                        <li key={"battery-charge_type-" + index} className="mt-1">
                          {charge_type}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Others</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {battery?.others.map((other, index) => (
                        <li key={"battery-other-" + index} className="mt-1">
                          {other}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </section>
            <section className="bg-white px-5 py-3">
              <h2 className="text-xl font-bold underline decoration-dashed">Display</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{display?.type}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Size</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {display?.size.value + " " + display?.size.unit}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Resolution</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {display?.resolution.width + " x " + display?.resolution.height}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Protections</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {display?.protections.map((protection, index) => (
                        <li key={"display-protection-" + index} className="mt-1">
                          {protection}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Others</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {display?.others.map((other, index) => (
                        <li key={"display-other-" + index} className="mt-1">
                          {other}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </section>
            <section className="bg-white px-5 py-3">
              <h2 className="text-xl font-bold underline decoration-dashed">Cartridge</h2>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cartridge?.name}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.description}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Materials</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {cartridge?.materials ??
                        cartridge?.materials.map((material: string, index: number) => (
                          <li key={"cartridge-material-" + index} className="mt-1">
                            {material}
                          </li>
                        ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Colors</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.colors.map((color, index) => (
                      <Badge key={"cartridge-color-" + index} className="mr-1" color={color} variant="dot">
                        {snakeCase(color)}
                      </Badge>
                    ))}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Volume</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.volume.value + " " + cartridge?.volume.unit}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Weight</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.weight.value + " " + cartridge?.weight.unit}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Dimension</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.dimension.x + " x " + cartridge?.dimension.y + " x " + cartridge?.dimension.z + " mm"}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Protections</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {cartridge?.protections.map((protection, index) => (
                        <li key={"cartridge-protection-" + index} className="mt-1">
                          {protection}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Mouth Piece</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {cartridge?.mouthpiece}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Coil</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cartridge?.coil}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Atomizer</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{cartridge?.atomizer}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Connections</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <ul>
                      {cartridge?.connections.map((connection, index) => (
                        <li key={"cartridge-connection-" + index} className="mt-1">
                          {connection}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </section>
            <ul>
              <li>user reviews</li>
            </ul>
          </main>
          <aside className="hidden border-2 xl:col-span-3 xl:block">
            <div className="sticky top-6 space-y-4">320×568</div>
          </aside>
          <div className="hidden border-2 lg:col-span-3 lg:block xl:col-span-2">
            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
              320×568
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
