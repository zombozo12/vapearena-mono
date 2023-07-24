import { IconAspectRatio, IconBattery4, IconCpu } from "@tabler/icons-react"
import { capitalize } from "lodash"
import Image from "next/image"
import React from "react"
import { VapeByBrandNameResponse } from "../../types/app-types"

export function ProductCards({ slug, name, brand, images, basic_infos }: VapeByBrandNameResponse) {
  const infos = basic_infos.map((info) => {
    const type = info.type
    switch (type) {
      case "processor":
        return (
          <div key={info.type} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconCpu
              size="1.05rem"
              className="h-4 w-4 text-indigo-700"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={2}
            />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">{capitalize(info.type)}</p>
              <p className="font-medium">{info.label}</p>
            </div>
          </div>
        )
      case "display":
        return (
          <div key={info.type} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconAspectRatio
              size="1.05rem"
              className="h-4 w-4 text-indigo-700"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={2}
            />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">{capitalize(info.type)}</p>
              <p className="font-medium">{info.label}</p>
            </div>
          </div>
        )
      case "battery":
        return (
          <div key={info.type} className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <IconBattery4
              size="1.05rem"
              className="h-4 w-4 text-indigo-700"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={2}
            />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">{capitalize(info.type)}</p>
              <p className="font-medium">{info.label}</p>
            </div>
          </div>
        )
    }
  })

  return (
    <a href={`/vapes/detail/${slug}`} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <Image
        alt="Home"
        src={
          images
            ? images[0]
            : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        }
        className="h-56 w-full rounded-md object-cover"
        width={1770}
        height={1000}
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Brand</dt>
            <dd className="text-sm text-gray-500">{brand}</dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">{infos}</div>
      </div>
    </a>
  )
}
