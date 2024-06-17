const Modal = ({children , hideModalHandler}) => {
  return (
    <div 
    className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-10 flex justify-center items-center"
    >
      {children}
  </div>
  
  )
}

export default Modal