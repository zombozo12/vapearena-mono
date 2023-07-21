import { ResponseBase } from "../types/app-types"

type BaseResponse = Omit<Response, "json"> & {
  json: () => ResponseBase | PromiseLike<ResponseBase>
}

export const MarshalResponse = (res: BaseResponse) => {
  return res.json()
}

export const ResponseHandler = (response: Response) => {
  const res = response as BaseResponse
  return MarshalResponse(res)
}
