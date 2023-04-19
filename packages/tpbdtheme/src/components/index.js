import React from "react"
import { connect, Global, css, styled, Head } from "frontity"
import Switch from "@frontity/components/switch"
import Bloglist from "./Bloglist"
import Blogpost from "./Blogpost"
import Page from "./page"
import Loading from "./loading"
import Error from "./error"
import MainHeader from './Header'
import Footer from "./Footer"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
    <Head>
      <title>My First Frontity Theme</title>
      <meta
        name="description"
        content="Based on the Frontity step by step tutorial"
      />
    </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      <MainHeader/>
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Bloglist when={data.isArchive} />
          <Blogpost when={data.isPost} />
          <Page when={data.isPage} />
          <Error when={data.isError} />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default connect(Root)

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;

  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
