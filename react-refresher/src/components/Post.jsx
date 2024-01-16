const Post = ({author , body}) => {
  return (
    <li className="bg-red-950 text-white p-6 border-x-4 border-yellow-600 rounded-2xl">
      <h3 className="text-yellow-600 font-extrabold">{author}</h3>  
      <p>{body}</p>
    </li>
  )
}

export default Post