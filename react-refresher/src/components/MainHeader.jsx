import { MdPostAdd, MdMessage } from 'react-icons/md';


function MainHeader({ showModalHandler  }) {
  return (
    <header className={`p-4 flex justify-between items-center border-b-2 border-purple-200 h-28`}>
      <h1 className={`text-2xl flex items-center gap-4 text-slate-900`}>
        <MdMessage />
        Oneline Poster
      </h1>
      <p>
        <button
          className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md shadow-md cursor-pointer font-bold hover:bg-purple-700`}
          onClick={showModalHandler}
        >
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
