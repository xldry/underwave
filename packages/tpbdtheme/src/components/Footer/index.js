import React from 'react';
import { connect } from "frontity"

import * as S from './styles'

const Footer = () => {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aldry-vinicius-9276561b8/'
    },
    {
      id: 2,
      label: 'Github',
      url: 'https://github.com/xldry/'
    },
    {
      id: 3,
      label: 'last.fm',
      url: 'https://www.last.fm/user/jumiknight'
    },
    {
      id: 4,
      label: 'rateyourmusic',
      url: 'https://www.rateyourmusic.com/~jumi'
    },
  ];
  return (
    <>
      <S.FooterContainer>
        <div>
          <span>UnderWave</span>
          <p>UNDERWAVE é um blog pessoal feito por Aldry Vinícius. Aqui eu falo principalmente dos meus hobbies que envolvem música, games e outras coisas. Você pode me achar nas redes sociais abaixo</p>
          <ul>
          {links.map(link => (
            <li key={link.id}>
              <a target="_blank" href={link.url}>{link.label}</a>
            </li>
          ))}
          </ul>
        </div>
      </S.FooterContainer>
    </>
  )
}

export default connect(Footer)
