import Image from "next/image";
import { getMeal } from "@/lib/meals";

interface MealDetailProps {
    mealSlug: string;
}

export default async function MealDetail({ params }: { params: MealDetailProps }) {
   const mealData = await getMeal(params.mealSlug);

    // if (!mealData) {
    //     return <div>Loading...</div>; // you can use loading.js instead
    // }

    const { title, image, summary, instructions, creator, creator_email } = mealData;
    console.log(image)
    const mealInstruction = instructions.replace(/\n/g, '<br/>');

    return (
        <>
            <header className="relative w-full h-40 md:h-52">
                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white bg-black bg-opacity-60 p-4 rounded-lg shadow-lg">
                    <h1 className="text-3xl md:text-5xl font-extrabold">{title}</h1>
                    <p className="text-md md:text-lg mt-1">
                        by <a href={`mailto:${creator_email}`} className="underline hover:text-yellow-400">{creator}</a>
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 md:py-16 text-white">
                <div className="md:flex md:gap-12 md:items-start">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src={image}
                            alt={title}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-md object-cover z-12"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <section className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">Meal Summary</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {summary}
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-800">Instructions</h2>
                            <div
                                className="prose prose-invert prose-lg text-gray-200 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: mealInstruction }}
                            />
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}