import {Badge} from "@mantine/core";
import {sanitize} from "isomorphic-dompurify";
import {marked} from "marked";

export default function Index() {
    const markdown = `
Lorem markdownum, culmine mundum sic deprendi Amnis? Vos enim **tum volucer**
parens, victrix; omnia aurum minitantem, traxit. Gravis [certare
incursat](http://vixque.io/corporis) leves: **tum** illi ore iamiam quae ergo.
Vitam Hector inpiger, sanguine acer, *est nihil inani*, suo iudicium rebus, non
iam viros diu. Suasit erant metus.

Occiderat sua, et Troiana tactis me longum faciem vocat corvo funesta inpius
Parnasosque fugato. Ab magna tantummodo tellus omnis abstitimus rigent
Phaestiadas barbae: palmite quod nosces! Pinu induerat, clara sorte, candida
iaculum; sed strictis sanguinis coniunx propinquos piasque.

Sedere qui processit stetit fratres pectora **querellae in fero**, est cum
terrae ducis. Et ubi ferro, est erant ante adiit tantos relinquam Tisiphone ossa
falsosque. In numina nescit tantumque Alpheias pressa subvolat, habere adpellare
Typhoea arcem unum Minervam, agitatis. Amisit Clymeni caecis ausa **loquerentur
feretro**, aut novae multorum. Sim per: omnes sic quam genitoris **adsueta**,
rata ipsis me poena.

Si in alius nostris. Ita qui arma, laedi, occallescere propter massa mirer
certamine. Multaque communes **quoque integer**, me vimina lapis quod orare,
namque talia. Iactis facta qua Arcadiae, *nec* in annos cauda plectrumque in
auras furibunda. Erit vigil sed, inpositaque lauro saxoque vertice di invadere
aethera sit, agna *Phrygiae grave* habetur, sic trepidat.

Nec ibat sed viribus solis acer nullumque modus et pretium terrae saltumque. Et
atque.

Ite nos alta vidit eliso, fertilis hoc caper praesentia in vultus carina, artus.
Sum hora quantusque sed, [in](http://spectasse.org/praepes) ipse, ne nec quas
sequiturque fuit constituunt frondescere spumantiaque.`

    const html = marked.parse(markdown)
    return (
        <>
            <section className="bg-blue-500 dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                            product_name
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
                            product_short_description
                        </p>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex">
                        <div className="stack">
                            <img
                                className="rounded shadow"
                                src="https://vape.com/cdn/shop/products/7Daze-Reds-x-Keep-It-100-30mL-Slapple-Iced_5000x.png?v=1671418636"
                                alt="mockup"/>
                            <img
                                className="rounded shadow"
                                src="https://vape.com/cdn/shop/products/7Daze-Reds-x-Keep-It-100-30mL-Slapple-Iced_5000x.png?v=1671418636"
                                alt="mockup"/>
                            <img
                                className="rounded shadow"
                                src="https://vape.com/cdn/shop/products/7Daze-Reds-x-Keep-It-100-30mL-Slapple-Iced_5000x.png?v=1671418636"
                                alt="mockup"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen">
                <div
                    className="mx-auto max-w-3xl py-6 sm:px-6 lg:grid lg:max-w-full lg:grid-cols-12 lg:gap-8 lg:px-8">
                    <main className="lg:col-span-6 xl:col-span-7">
                        <div className="bg-white px-5 py-3">
                            <h2 className="text-xl underline decoration-dashed mt-5 font-bold">Description</h2>
                            <article className="prose prose-slate lg:max-w-full" dangerouslySetInnerHTML={{
                                __html: sanitize(html, {
                                    RETURN_DOM: true,
                                }).innerHTML,
                            }}/>
                            <h2 className="text-xl underline decoration-dashed mt-5 font-bold">Brand</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        brand_name
                                    </dd>
                                </div>
                            </dl>
                            <h2 className="text-xl underline decoration-dashed font-bold">Release Date</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Release Date</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        release_date
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <section className="bg-white px-5 py-3">
                            <h2 className="text-xl underline decoration-dashed font-bold">Body</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        name
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        brand_name
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Dimension</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        dimension
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Weight</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        weight
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Materials</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                material 1
                                            </li>
                                            <li className="mt-1">
                                                material 2
                                            </li>
                                            <li className="mt-1">
                                                material 3
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Colors</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <Badge className="mr-1" color="red" variant="dot">Red</Badge>
                                        <Badge className="mr-1" color="green" variant="dot">Green</Badge>
                                        <Badge className="mr-1" color="blue" variant="dot">Blue</Badge>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Buttons</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                button 1
                                            </li>
                                            <li className="mt-1">
                                                button 2
                                            </li>
                                            <li className="mt-1">
                                                button 3
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Airflow Control</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        airflow_control
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Connections</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                connection 1
                                            </li>
                                            <li className="mt-1">
                                                connection 2
                                            </li>
                                            <li className="mt-1">
                                                connection 3
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </section>
                        <section className="bg-white px-5 py-3">
                            <h2 className="text-xl underline decoration-dashed font-bold">Processor</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        name
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        brand_name
                                    </dd>
                                </div>
                            </dl>
                        </section>
                        <section className="bg-white px-5 py-3">
                            <h2 className="text-xl underline decoration-dashed font-bold">Battery</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        name
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Brand</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        brand_name
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        type
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Capacity</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        capacity
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Watt Range</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        min-max
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Power Output</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        min-max unit
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Charge Time</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        charge_time
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Charge Type</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                A
                                            </li>
                                            <li className="mt-1">
                                                B
                                            </li>
                                            <li className="mt-1">
                                                C
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Others</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                A
                                            </li>
                                            <li className="mt-1">
                                                B
                                            </li>
                                            <li className="mt-1">
                                                C
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </section>
                        <section className="bg-white px-5 py-3">
                            <h2 className="text-xl underline decoration-dashed font-bold">Display</h2>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Type</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                A
                                            </li>
                                            <li className="mt-1">
                                                B
                                            </li>
                                            <li className="mt-1">
                                                C
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Size</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        value unit
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Resolution</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        width x height
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Protections</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                A
                                            </li>
                                            <li className="mt-1">
                                                B
                                            </li>
                                            <li className="mt-1">
                                                C
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Others</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <ul>
                                            <li>
                                                A
                                            </li>
                                            <li className="mt-1">
                                                B
                                            </li>
                                            <li className="mt-1">
                                                C
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </section>
                        <h2 className="text-xl underline decoration-dashed font-bold">Cartridge</h2>
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    name
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    description
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Materials</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        <li>
                                            A
                                        </li>
                                        <li className="mt-1">
                                            B
                                        </li>
                                        <li className="mt-1">
                                            C
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Colors</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <Badge className="mr-1" color="red" variant="dot">Red</Badge>
                                    <Badge className="mr-1" color="green" variant="dot">Green</Badge>
                                    <Badge className="mr-1" color="blue" variant="dot">Blue</Badge>
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Volume</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    value unit
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Weight</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    value unit
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Dimension</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    X x Y x Z unit
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Protections</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        <li>
                                            A
                                        </li>
                                        <li className="mt-1">
                                            B
                                        </li>
                                        <li className="mt-1">
                                            C
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Mouth Piece</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    mouth_piece
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Coil</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    mouth_piece
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Atomizer</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    atomizer
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Connections</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <ul>
                                        <li>
                                            A
                                        </li>
                                        <li className="mt-1">
                                            B
                                        </li>
                                        <li className="mt-1">
                                            C
                                        </li>
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                        <ul>
                            <li>
                                user reviews
                            </li>
                        </ul>
                    </main>
                    <aside className="hidden xl:col-span-3 xl:block border-2">
                        <div className="sticky top-6 space-y-4">
                            320×568
                        </div>
                    </aside>
                    <div className="hidden lg:col-span-3 lg:block xl:col-span-2 border-2">
                        <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                            320×568
                        </nav>
                    </div>
                </div>
            </section>
        </>

    )
}