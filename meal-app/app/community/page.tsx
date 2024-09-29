import Image from 'next/image';

import mealIcon from '@/images/icons/meal.png';
import communityIcon from '@/images/icons/community.png';
import eventsIcon from '@/images/icons/events.png';

export default function CommunityPage() {
  return (
    <>
      <header className="text-center py-12 text-white">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
          One shared passion: <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">Food</span>
        </h1>
        <p className="text-lg md:text-xl">Join our community and share your favorite recipes!</p>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-white">Community Perks</h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="flex flex-col items-center gap-4">
            <Image src={mealIcon} alt="A delicious meal" width={80} height={80} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <p className="text-xl font-bold text-white">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image src={communityIcon} alt="A crowd of people, cooking" width={80} height={80} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <p className="text-xl font-bold text-white">Find new friends & like-minded people</p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <Image src={eventsIcon} alt="A crowd of people at a cooking event" width={80} height={80} className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            <p className="text-xl font-bold text-white">Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
