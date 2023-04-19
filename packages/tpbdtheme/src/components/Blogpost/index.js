import React from "react"
import { connect, Head } from "frontity"
import dayjs from "dayjs"
import FeaturedMedia from "../featured-media";

import * as S from './styles'

const Blogpost = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formattedDate = dayjs(post.date).format("MMMM DD, YYYY")
  const fmediaId = post.featured_media;
  console.log("fmediaId", fmediaId);

  return (
    <div>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <S.TitleContainer>
        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <h3 dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </S.TitleContainer>
      <FeaturedMedia id={post.featured_media} />
      <S.PostInfo>
        {/* <S.AuthorAvatar /> */}
        <S.PostDate>
          <p>
            Por {author.name}
          </p>
          <span>
            {formattedDate}
          </span>
        </S.PostDate>
        <div className="separator" />
        {/* <S.SocialShare /> */}
      </S.PostInfo>
      <S.PostContent>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </S.PostContent>
    </div>
  )
}

export default connect(Blogpost)
