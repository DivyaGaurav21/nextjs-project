import Link from 'next/link';
import Image from 'next/image';

interface MealItemProps {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
  return (
    <article className="bg-orange-900 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <header className="relative">
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-yellow-500">{title}</h2>
          <p className="text-sm text-red-200">by {creator}</p>
        </div>
      </header>
      <div className="p-4">
        <p className="text-yellow-100 mb-4">{summary}</p>
        <div className='mt-5'>
          <Link href={`/meals/${slug}`} className="text-yellow-950 p-2 rounded-2xl bg-gradient-to-r from-red-500 to-yellow-300 bg-white font-bold">
              View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
