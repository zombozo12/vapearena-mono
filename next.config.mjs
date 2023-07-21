import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import {env} from "./env.mjs"

/**
 * @types {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({enabled: env.ANALYZE})]], {
    reactStrictMode: true,
    experimental: {instrumentationHook: true},
    rewrites() {
        return [
            {source: "/healthz", destination: "/api/health"},
            {source: "/api/healthz", destination: "/api/health"},
            {source: "/health", destination: "/api/health"},
            {source: "/ping", destination: "/api/health"},
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gateway.storjshare.io',
                port: '',
                pathname: '/vape-images/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
})

export default config
