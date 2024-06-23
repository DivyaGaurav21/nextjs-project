import React from 'react';
import Posts from './Posts';
import type { PostListProps } from '../types/post';

const PostList: React.FC<PostListProps> = ({ posts, onDeletePost, onEditPost }) => {
    return (
        <ul className='flex flex-col md:flex-row flex-wrap gap-4 justify-center'>
            {posts.map((post) =>
                <Posts
                    author={post.author}
                    body={post.body}
                    key={post.id}
                    id={post.id}
                    onDeletePost={onDeletePost}
                    onEditPost={onEditPost}
                />
            )}
        </ul>
    )
}

export default PostList;