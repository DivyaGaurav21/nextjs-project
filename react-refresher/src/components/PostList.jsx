import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import { useState } from "react";

const PostList = ({ hideModalHandler, isModalVisible }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (currentPost) => {
    setPosts((prevPost) => [currentPost, ...prevPost]);
  };

  return (
    <div>
      {isModalVisible && (
        <Modal hideModalHandler={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className="bg-stone-100 rounded-2xl p-5 flex flex-row gap-3">
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
          ))}
        </ul>
      ) : (
        <h1 className="text-center">Not any Post Yet :) Add now !!</h1>
      )}
    </div>
  );
};

export default PostList;
