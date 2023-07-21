export type ResponseBase =
  | {
      is_error: boolean
      elapsed_time: string
      request_id: string
    }
  | Auth
  | Brand
  | Body
  | Vape
  | Battery
  | ErrorResponse

export type ErrorResponse = {
  error: string
}

export type Auth = ResponseBase & {
  data: {
    token: string
  }
}

export type AuthToken = {
  exp: number
  iat: number
  nbf: number
  sub: string
}

export type AuthRequest = {
  email: string
  password: string
}

export type Battery = {
  id: number
  vape_id: number
  name: string
  brand: string
  type: string
  capacity: number
  watt_range: WattRange
  power_output: PowerOutput
  resistance_range: ResistanceRange
  charge_time: number
  charge_type: string[]
  others: string[]
  created_by: number
  created_at: string
  updated_at: string
}

export type Body = {
  id: number
  vape_id: number
  name: string
  brand: string
  dimension: Dimension
  weight: Weight
  materials: string[]
  colors: string[]
  buttons: string[]
  airflow_control: boolean
  connections: string[]
  created_by: number
  created_at: string
  updated_at: string
}

export type BodyButton = {
  id: number
  name: string
  created_by: number
  created_at: string
  updated_at: string
}

export type Brand = {
  id: number
  slug: string
  name: string
  description: string
  created_by: number
  created_at: string
  updated_at: string
}

export type Cartridge = {
  id: number
  vape_id: number
  name: string
  description: string
  materials: string[]
  colors: string[]
  volume: Volume
  weight: Weight
  dimension: Dimension
  protections: string[]
  mouthpiece: string
  coil: string
  atomizer: string
  connections: string[]
  created_by: number
  created_at: string
  updated_at: string
}

export type Dimension = {
  x: number
  y: number
  z: number
}

export type Display = {
  id: number
  vape_id: number
  type: string
  size: Size
  resolution: Resolution
  protections: string[]
  others: string[]
  created_by: number
  created_at: string
  updated_at: string
}

export type DisplayProtection = {
  id: number
  name: string
  created_by: number
  created_at: string
  updated_at: string
}

export type Liquid = {
  id: number
  name: string
  brand: string
  description: string
  volume: number
  type: string
  nicotine: number
  flavor: string[]
  vg: number
  pg: number
  resistance: number
  created_by: number
  created_at: string
  updated_at: string
}

export type Material = {
  id: number
  name: string
  created_by: number
  created_at: string
  updated_at: string
}

export type PowerOutput = {
  min: number
  max: number
  unit: string
}

export type Processor = {
  id: number
  vape_id: number
  name: string
  brand: string
  created_by: number
  created_at: string
  updated_at: string
}

export type Protection = {
  id: number
  vape_id: number
  name: string
  brand: string
  created_by: number
  created_at: string
  updated_at: string
}

export type ResistanceRange = {
  min: number
  max: number
  unit: string
}

export type Resolution = {
  width: number
  height: number
}

export type Size = {
  value: number
  unit: string
}

export type Vape = {
  id: number
  slug: string
  name: string
  model: string
  brand: string
  type: string
  images: string[]
  known_as: string
  description: string
  created_by: number
  created_at: string
  updated_at: string
}

export type VapeByBrandNameResponse = {
  id: number
  slug: string
  name: string
  model: string
  brand: string
  type: string
  images: string[]
  known_as: string
  description: string
  basic_infos: {
    label: string
    type: string
  }[]
  created_by: number
  created_at: string
  updated_at: string
}

export type Volume = {
  value: number
  unit: string
}

export type WattRange = {
  min: number
  max: number
}

export type Weight = {
  value: number
  unit: string
}
