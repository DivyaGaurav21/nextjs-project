import ImageSlideshow from '@/components/common/image-slider';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-center mx-auto w-[90%] max-w-[75rem] my-8 lg:my-16">
        <div className="w-full lg:w-[40rem] h-[20rem] lg:h-[25rem] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <ImageSlideshow/>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-white">
            <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide font-montserrat text-[#e74c3c] mb-4">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="text-lg lg:text-xl text-white mb-6">
              Taste & share food from all over the world.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <Link
              href="/community"
              className="inline-block mt-2 lg:mt-0 text-lg text-[#e74c3c] font-semibold hover:text-[#c0392b] transition-colors"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block mt-2 lg:mt-0 px-6 py-3 rounded-md bg-gradient-to-r from-[#e67e22] to-[#f39c12] text-white font-bold hover:from-[#d35400] hover:to-[#e67e22] transition-colors"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-center lg:text-left text-white text-lg lg:text-xl max-w-[50rem] w-[90%] mx-auto my-8 lg:my-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#e74c3c] mb-6">
            How it works
          </h2>
          <p className="mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It's a place to discover new dishes and to
            connect with other food lovers.
          </p>
          <p>
            Discover new cuisines, share your experiences, and indulge in the
            best flavors from every corner of the globe.
          </p>
        </section>
      </main>
    </>
  );
}
