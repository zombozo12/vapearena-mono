export type ResponseBase = {
    is_error: boolean,
    data: Brand | Error,
    elapsed_time: string,
    request_id: string,
}

export type Brand = {
    id: number,
    slug: string,
    name: string,
    description: string,
    updated_at: string,
}

export type ErrorResponse = {
    is_error: boolean,
    message: string,
    elapsed_time: string,
    request_id: string,
}

export type VapeBasicInfo = {
    label: string,
    type: string,
}

export type Vape = {
    id: number,
    slug: string,
    name: string,
    model: string,
    brand: string,
    type: string,
    images: string[],
    known_as: string,
    description: string,
    basic_infos: VapeBasicInfo[],
    price: string
}

export class BaseResponse {
}