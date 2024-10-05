"use client"
import { useFormStatus } from 'react-dom';


const ShareMealButton = () => {
    const {pending} = useFormStatus();
  return (
    <div className="text-right">
    <button type="submit" disabled={pending} className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold rounded-lg shadow-lg hover:from-[#fd4715] hover:to-[#f9b241] transition duration-300">
     {pending? "meal submitting" : " Share Meal"}
    </button>
  </div>
  )
}

export default ShareMealButton