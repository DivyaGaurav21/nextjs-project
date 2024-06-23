import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hideModalHandler = () => {
    setIsModalVisible(false);
  };
  const showModalHandler = () => {
    setIsModalVisible(true);
  };




  return (
    <>
      <MainHeader
        showModalHandler={showModalHandler}
      />
      <div className="w-[70%] m-auto h-full">
        <PostList
          hideModalHandler={hideModalHandler}
          isModalVisible={isModalVisible}
        />
      </div>
      ;
    </>
  );
}

export default App;
