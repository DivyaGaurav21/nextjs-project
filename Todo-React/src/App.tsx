import React, { useState } from 'react';
import PostList from './components/PostList';
import type { PostData } from './types/post';
import MainHeader from './components/MainHeader';
import Modal from './components/Modal';
import NewPost from './components/NewPost';

const postsData: PostData[] = [
  { id: 1, author: 'John', body: "All rights reserved" },
  { id: 2, author: 'Divya', body: "Have to go there !" },
]

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>(postsData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModalHandler = () => {
    setIsModalVisible(true);
  };
  const hideModalHandler = () => {
    setIsModalVisible(false);
  };
  //IMPORTANT
  //React automatically passes the current value of posts to the function as prevPosts.
  //React sets posts to this new array, and the component re-renders with the updated state.
  const addPostHandler = (currentPost: PostData) => {
    setPosts((prevPosts) => [currentPost, ...prevPosts]);
  };
  const editPostHandler = (postId: number) => {
    console.log(postId);
  };
  const deletePostHandler = (postId: number) => {
    console.log(postId);
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
  }

  return (
    <>
      {isModalVisible &&
        <Modal onHideModal={hideModalHandler}>
          <NewPost
            onHideModal={hideModalHandler}
            onAddPost={addPostHandler} />
        </Modal>
      }
      <div className='p-5 md:p-14'>
        <MainHeader onModalShow={showModalHandler} />
        {
          posts.length > 0 ?
            <PostList
              posts={posts}
              onDeletePost={deletePostHandler}
              onEditPost={editPostHandler}
            />
            :
            <h1 className='text-center text-3xl font-bold text-purple-500'>
              No Any Post now 😍 Please add !
            </h1>
        }
      </div>
    </>
  )
}

export default App