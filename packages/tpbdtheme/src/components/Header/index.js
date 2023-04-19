import React, { useState } from 'react';
import { connect, Head } from "frontity"
import Link from "@frontity/components/link"

import * as S from './styles'

const MainHeader = ({ state }) => {
  const data = state.source.get(state.router.link);
  const [activeTab, setActiveTab] = useState('home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <Head>
      <title>UnderWave</title>
      <meta
        name="description"
        content="Music and every day life struggles"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Cinzel+Decorative&family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
      <S.Header isPostType={data.isPostType} isPage={data.isPage}>
        <S.HeaderContent>
          <Link className="logo" link="/">
            <h1>UnderWave</h1>
          </Link>
          <S.Menu>
            <Link link="/" className={activeTab === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Blog</Link>
            {/* <br />
            <Link link="/page/2" className={activeTab === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>Reviews</Link>
            <br />
            <Link link="/about" className={activeTab === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Sobre</Link> */}
          </S.Menu>
        </S.HeaderContent>
      </S.Header>
    </>
  )
}

export default connect(MainHeader)
