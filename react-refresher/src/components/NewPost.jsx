import { useState } from "react";

function NewPost({onCancel , onAddPost}) {

    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    const AuthorChangeHandler = (e) => {
        setEnteredAuthor(e.target.value);
      };
      const changeBodyHandler = (e) => {
        setEnteredBody(e.target.value);
      };
      const submitHandler = (e) => {
        e.preventDefault();
        const postData = {
            body : enteredBody,
            author:enteredAuthor
        }
        onAddPost(postData);
        onCancel();
      };

  return (
    <form
     onSubmit={submitHandler}
     className="bg-slate-900 p-4 rounded-3xl flex flex-col justify-between min-w-[350px] z-20"
     >
      <p className="w-full">
        <label htmlFor="body" className="block font-bold mb-3 text-white">
          Text
        </label>
        <textarea
          id="body"
          required
          rows={3}
          className="w-full pl-2"
          value={enteredBody}
          onChange={changeBodyHandler}
        />
      </p>
      <p className="w-full">
        <label htmlFor="name" className="block font-bold mb-3 text-white">
          Your name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full h-9 outline-none pl-2"
          value={enteredAuthor}
          onChange={AuthorChangeHandler}
        />
      </p>
      <div className="p-4 flex justify-between">
        <button onClick={onCancel}>Cancel</button>
        <button className="bg-yellow-800 text-white">Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
