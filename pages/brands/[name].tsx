import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import React from "react";
import {ResponseHandler} from "../../api/api";
import {Brand, ErrorResponse, Vape} from "../../api/types";
import {ProductCards} from "../../components/ProductCards/ProductCards";

export const getServerSideProps: GetServerSideProps<{
    brand: Brand | null,
    vapes: Vape[] | null,
    error: ErrorResponse | null,
}> = async ({params}) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const {name} = params;

    let errorResponse: ErrorResponse;

    const brandRes = await fetch(`http://127.0.0.1:8008/api/brand/s/${name}`);
    const brandBody = await ResponseHandler(brandRes);

    if (brandBody.is_error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errorResponse = brandBody;
        return {
            props: {
                brand: null,
                vapes: null,
                error: errorResponse,
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const brand: Brand = brandBody.data;

    const vapeRes = await fetch(`http://127.0.0.1:8008/api/vape/all-brand/${brand.slug}`)
    const vapeBody = await ResponseHandler(vapeRes);

    if (vapeBody.is_error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errorResponse = brandBody;
        return {
            props: {
                brand: null,
                vapes: null,
                error: errorResponse
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const vapes: Vape[] = vapeBody.data;

    return {
        props: {
            brand: brand,
            vapes: vapes,
            error: null
        }
    }
}


export default function Brands({brand, vapes, error}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(brand, vapes, error)

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
                        <div
                            className="justify-center space-y-8">
                            No Vapes Found
                        </div>
                    ) : (
                        <div
                            className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
                            {vapes && vapes.map((singleItem, index) => (
                                <ProductCards key={index} {...singleItem} />
                            ))}
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}
