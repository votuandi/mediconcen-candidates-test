import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { TssCacheProvider } from 'tss-react'
import { createEmotionCache, createTssEmotionCache } from '@/utils/emotion'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/assets/theme/theme.default'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-app',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P, appProps: {}) => ReactNode
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
  emotionCache?: EmotionCache
  tssEmotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()
const tssClientSideEmotionCache = createTssEmotionCache()

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    tssEmotionCache = tssClientSideEmotionCache,
    pageProps: { session, ...pageProps },
  } = props

  const headerLocale = 'en-US'

  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())

  return (
    <main className={roboto.variable}>
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <TssCacheProvider value={tssEmotionCache}>
            <ThemeProvider theme={theme}>
              <CssBaseline />

              {getLayout(<Component {...pageProps} />, pageProps, {})}
            </ThemeProvider>
          </TssCacheProvider>
        </CacheProvider>
      </QueryClientProvider>
    </main>
  )
}

export default MyApp
