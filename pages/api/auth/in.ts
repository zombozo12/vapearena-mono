import {NextApiRequest, NextApiResponse} from "next"
import {ResponseHandler} from "../../../lib/api"
import {withSessionRoute} from "../../../lib/withSession"
import {AuthRequest, ResponseBase} from "../../../types/app-types"

export default withSessionRoute(handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {email, password} = req.body

    const data: AuthRequest = {
        email: email,
        password: password,
    }

    const loginRes = await fetch(`${process.env.API_URL}/api/auth/in`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const loginBody = await ResponseHandler(loginRes)

    const resBody: ResponseBase = {
        is_error: loginBody.is_error,
        elapsed_time: loginBody.elapsed_time,
    }

    if (loginBody.is_error) {
        resBody.error = loginBody.data.error
        res.status(401).json(resBody)
        return
    }

    req.session.user = loginBody.data.token

    await req.session.save()

    res.json(resBody)
}
