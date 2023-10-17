import { ApiResponse } from '@/types/apiResponse.type'
import { CancelToken, RawAxiosRequestHeaders } from 'axios'

type Payload = {
  cancelToken?: CancelToken
}

export type GetPageListPayload = {
  params: {}
} & Payload

export type GetPageListResponse = ApiResponse
