import commonAxios from '@/utils/axios/common.axios'

import type { AxiosResponseData } from '@/utils/axios'
import type { GetPageListPayload } from './page.api.types'

const pageApi = {
  getList: (payload: GetPageListPayload) => {
    return commonAxios.get<AxiosResponseData>('/json/apiResponse.json', {
      ...payload.params,
      cancelToken: payload.cancelToken,
    })
  },
}

export default pageApi
