import "../styles/tailwind.css"

import {Burger, Header, MediaQuery, Text, useMantineTheme} from "@mantine/core";
import {AppProps} from "next/app"
import Head from "next/head";
import {useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Head>
                <meta property="og:url" content="https://next-enterprise.vercel.app/"/>
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
                />
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>Next.js Enterprise Boilerplate</title>
            </Head>
            <Header
                height={{
                    base: 50,
                    md: 70
                }}
                p="md"
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%"
                }}>
                    <MediaQuery styles={{display: 'none'}} largerThan="sm">
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                    <Text>Header</Text>
                </div>
            </Header>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
