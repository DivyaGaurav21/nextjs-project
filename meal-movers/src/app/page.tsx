import { MdOutlineTravelExplore } from "react-icons/md";
import { MdAddComment } from "react-icons/md";
import ImageSlide from "@/components/ImageSlide";
import ButtonLink from "@/components/reusableComponent/LinkButton";
import ContentContainer from "@/components/reusableComponent/ContentContainer";
import Typography from "@/components/reusableComponent/Typography";

export default function Home() {
  return (
    <>
      <main className="bg-gray-900">
        <ContentContainer>
        <div className="w-full lg:w-2/5">
          <ImageSlide />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left">
            <Typography variant="h1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, nam!</Typography>
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-orange-500 mb-4">NextLevel Food Will be Deliver at your place !</h1>
            <p className="text-lg mb-8">Taste & share food from all over the world.</p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-2">
              <ButtonLink href="/community">
                <MdOutlineTravelExplore className="icon-size" />
                Explore Meals
              </ButtonLink>
              <ButtonLink href="/community">
                <MdAddComment className="icon-size" />
                Join the Community
              </ButtonLink>
            </div>
          </div>
        </div>
        </ContentContainer>
      </main>
      {/* <main className="py-12 px-6 md:px-12 lg:px-24">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">How it works</h2>
          <p className="text-lg mb-4">NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.</p>
          <p className="text-lg mb-4">NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
    </main > */}
    </>
  );
}
