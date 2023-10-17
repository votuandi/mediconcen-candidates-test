export type ApiResponse = {
  success: boolean
  requestId: string
  data: PageList
}

export type PageList = {
  documentId: number
  pages: Page[]
}

export type Page = {
  fileName: string
  items: Item[]
  imageWidth: number
  imageHeight: number
}

export type Item = {
  netAmount: number
  chargeDate: string
  grossAmount: string
  boundingBoxes: BoundingBoxes
  originalIndex: number
  particularsEn: string
  particularsTc: string
  matchOptions: MatchOption[]
  selected: number
}

export type BoundingBoxes = {
  netAmount: NetAmount
  chargeDate: ChargeDate
  grossAmount: GrossAmount
  particularsEn: ParticularsEn
  particularsTc: ParticularsTc
}

export type NetAmount = {
  top: number
  left: number
  width: number
  height: number
}

export type ChargeDate = {
  top: number
  left: number
  width: number
  height: number
}

export type GrossAmount = {
  top: number
  left: number
  width: number
  height: number
}

export type ParticularsEn = {
  top: number
  left: number
  width: number
  height: number
}

export type ParticularsTc = {
  top: number
  left: number
  width: number
  height: number
}

export type MatchOption = {
  id: number
  value: string
}
