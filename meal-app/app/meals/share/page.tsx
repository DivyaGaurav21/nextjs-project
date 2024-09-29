// import ImagePicker from '@/components/meals/ImagePicker';
// import { shareMeal } from '@/lib/serverAction';

export default function ShareMealPage() {
  return (
    <>
      <header className="flex flex-col gap-12 mx-auto my-12 lg:my-20 w-[90%] max-w-[75rem] text-[#4A4A4A] text-xl lg:text-2xl">
        <h1 className="font-montserrat text-center lg:text-left">
          Share your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9572a] to-[#ff8a05]">favorite meal</span>
        </h1>
        <p className="text-center lg:text-left">Or any other meal you feel needs sharing!</p>
      </header>
      <main className="w-[90%] max-w-[75rem] mx-auto my-12 lg:my-16 text-[#4A4A4A]">
        <form className="max-w-[50rem] mx-auto space-y-6" action="">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <label htmlFor="name" className="block mb-2 text-sm uppercase font-bold text-[#6B7280] font-montserrat">Your name</label>
              <input type="text" id="name" name="name" required className="block w-full p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b05] focus:border-transparent" />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 text-sm uppercase font-bold text-[#6B7280] font-montserrat">Your email</label>
              <input type="email" id="email" name="email" required className="block w-full p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b05] focus:border-transparent" />
            </div>
          </div>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm uppercase font-bold text-[#6B7280] font-montserrat">Title</label>
            <input type="text" id="title" name="title" required className="block w-full p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b05] focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="summary" className="block mb-2 text-sm uppercase font-bold text-[#6B7280] font-montserrat">Short Summary</label>
            <input type="text" id="summary" name="summary" required className="block w-full p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b05] focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="instructions" className="block mb-2 text-sm uppercase font-bold text-[#6B7280] font-montserrat">Instructions</label>
            <textarea id="instructions" name="instructions" rows="8" required className="block w-full p-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9b05] focus:border-transparent"></textarea>
          </div>
          {/* <ImagePicker label="your image" name="image" /> */}
          <div className="text-right">
            <button type="submit" className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold rounded-lg shadow-lg hover:from-[#fd4715] hover:to-[#f9b241] transition duration-300">
              Share Meal
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
