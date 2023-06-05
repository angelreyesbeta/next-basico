import  { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
    title?: string
}
const origin = (typeof window === 'undefined' ? '' : window.location.origin)

export const Layout: FC<Props> = ({children, title}) => {

    

  return (
    <>
        <Head>
            <title>{title || 'Pokemon Appsss'}</title>
            <meta name='author' content='Angel Reyes' />
            <meta name='description' content={`Información sobre el pokemon ${title}`} />
            <meta name='keywords' content={`${title}, pokemon, pkedex`} />
            <meta property="og:title" content={`Información sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina del ${title}`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`}/>
        </Head>
        <Navbar/>
        <main style={
            {
                padding: '0px 20px'
            }
        }>
            {children}
        </main>
    </>
    )
}
