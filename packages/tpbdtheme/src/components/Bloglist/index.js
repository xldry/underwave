import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import FeaturedMedia from "../featured-media";

import * as S from './styles'

const Bloglist = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <S.LatestPost>
        {data.items.slice(0,1).map((item) => {
          const post = state.source[item.type][item.id]
          const fmediaId = post.featured_media;
          console.log("fmediaId", fmediaId);
          return (
            <div>
              <Link className="post-link" key={item.id} link={post.link}>
                <FeaturedMedia id={post.featured_media} />
                <h2 className="latest-post-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <div className="latest-post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <div className="separator" />
              </Link>
            </div>
          )
        })}
      </S.LatestPost>
      <S.AllPosts>
        <h2>Todos os posts</h2>
        {data.items.slice(1).map((item) => {
          const post = state.source[item.type][item.id]
          const fmediaId = post.featured_media;
          console.log("fmediaId", fmediaId);
          return (
            <div>
              <Link className="post-link" key={item.id} link={post.link}>
                <FeaturedMedia id={post.featured_media} />
                <h3 className="post-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </div>
          )
        })}
      </S.AllPosts>
    </>
  )
}

export default connect(Bloglist)
