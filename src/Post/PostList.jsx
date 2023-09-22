import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor'
import TimeComponent from './TimeComponent'
import Reactions from './Reactions'

const PostList = () => {
    const posts = useSelector(state=> state.posts)
    const renderPosts = posts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          {/* <TimeComponent timeStamp = {post.date} /> */}
          <Reactions post= {post} />
        </p>
      </article>
    ));
  return (
    <section>
        <h1>Posts</h1>
        {renderPosts}
    </section>
  )
}

export default PostList