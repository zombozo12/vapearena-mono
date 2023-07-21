import { IronSessionOptions } from "iron-session"
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next"
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from "next"

export const sessionOptions: IronSessionOptions = {
  password: String(process.env.IRON_SESSION_KEY),
  cookieName: String(process.env.IRON_SESSION_COOKIE_NAME),
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr<P extends { [key: string]: unknown } = { [key: string]: unknown }>(
  handler: (context: GetServerSidePropsContext) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
  return withIronSessionSsr(handler, sessionOptions)
}

declare module "iron-session" {
  interface IronSessionData {
    user: string
  }
}
