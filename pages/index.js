import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-evenly items-center mt-20 max-[550px]:flex-col">
        <div className="flex flex-col w-1/2 max-[550px]:w-5/6 max-[550px]:mb-16">
          <div className="text-4xl font-bold mb-2">
            Guess who&apos;s back, folks?
          </div>
          <p className="text-xl">
            The one and only Crazy Frog is here to ribbit and take your money
            once more! Get ready for some froggy fun and nostalgic vibes! The
            biggest movement in the whimsical world of animated amphibians.
          </p>
        </div>
        <div>
          <img src="/R-removebg-preview.png" alt="" />
        </div>
      </div>

      <div className="overflow-x-hidden -ml-10 mt-20 border-y-4 bg-[#5a83d4] border-black py-8">
        <Marquee gradient={false} speed={125}>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
          <div className="mr-32">
            <p className="text-4xl my-1">Crazy Frog</p>
          </div>
        </Marquee>
      </div>

      <Roadmap />
    </div>
  );
}
