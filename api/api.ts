import { ErrorResponse, ResponseBase } from "./types"

type BaseResponse =
  | (Omit<Response, "json"> & {
      status: 200
      json: () => ResponseBase | PromiseLike<ResponseBase>
    })
  | (Omit<Response, "json"> & {
      json: () => ErrorResponse | PromiseLike<ErrorResponse>
    })

export const MarshalResponse = (res: BaseResponse) => {
  return res.json()
}

export const ResponseHandler = (response: Response) => {
  const res = response as BaseResponse
  return MarshalResponse(res)
}
