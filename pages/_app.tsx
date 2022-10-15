import React from 'react'
import { QueryClientProvider, QueryClient, Hydrate, DehydratedState } from '@tanstack/react-query'
import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import '../styles/globals.css'

interface PageProps {
  dehydratedState: DehydratedState
}

/* 
hydrate은 서버 사이드에서 렌더링된 정적 페이지와 번들링된 JS파일을 클라이언트에 보내고,
클라이언트 단에서 HTML 코드와 React인 JS코드를 서로 매칭시키는 것을 의미합니다.

1. app내부에 QueryClient를 만들면 다른 사용자와 요청간에 공유되지 않는다.
2. 내부에서 useQuery를 쓰려면 QueryClientProvider가 있어야 한다.
3. Hydrate로 감싸주어 hydrate 해주기 위함
*/
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps<PageProps>> = ({
  Component, pageProps
}: AppProps<PageProps>) => {
  const [queryClient] = React.useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />      
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
