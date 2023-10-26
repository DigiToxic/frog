import React from "react";

function Roadmap() {
  return (
    <div className="h-screen relative" id="Roadmap">
      <div className="flex justify-center items-center mt-20">
        <p className="text-5xl">Roadmap</p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="w-[800px] mb-20 mt-14 max-[875px]:w-[700px] max-[750px]:w-[600px] max-[650px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[330px]">
          <p className="text-3xl mb-4">Phase 1 :</p>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Launch Crazy Frog Coin with a leap and a hop, bringing nostalgic
            vibes to the crypto world!
          </li>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Ensure Crazy Frog flows through the crypto ecosystem like a
            well-oiled frog slide!
          </li>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Hire amphibious advisors, host a "Frog Olympics" with lily pad long
            jumps, and distribute Tokens to early adopters.
          </li>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Achieve 1,000 holders while croaking "Crypto-hop to the moon!" in
            unison.
          </li>
        </div>

        <div className="w-[800px] mb-20 max-[875px]:w-[700px] max-[750px]:w-[600px] max-[650px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[330px]">
          <p className="text-3xl mb-4">Phase 2 :</p>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Propagate Crazy Frog across the swampy shores of success!
          </li>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Organize a Frog Fashion Show featuring the latest in amphibious
            attire, and launch a virtual Froggy Disco where the beats are as hot
            as a Louisiana summer.
          </li>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Hit 10,000 holders while synchronized croaking sessions become the
            new norm.
          </li>
        </div>

        <div className="w-[800px] mb-20 max-[875px]:w-[700px] max-[750px]:w-[600px] max-[650px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[330px]">
          <p className="text-3xl mb-4">Phase 3 :</p>
          <li className="mb-4 text-xl max-[650px]:text-lg">
            Achieve 1 million holders while transforming the crypto world into a
            colossal, croaking carnival extravaganza! !
          </li>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10 pb-28">
        <div className="border-2 border-black w-3/4" />
      </div>

      <div className="flex flex-col justify-center items-center pb-20">
        <div className="w-5/6 text-center">
          <p className="text-3xl mb-4">Disclaimer :</p>
          <p className="text-xl max-[650px]:text-lg">
            This roadmap is purely fictional and intended for comedic purposes
            only. Remember, investing in cryptocurrencies should be approached
            with careful consideration and research. Crazy Frog is not a real
            cryptocurrency. <br />
            <br />
            Crazy Frog coin has no association with Swedish actor and playwright
            Erik Wernquist or his creation Crazy Frog. This token is simply
            paying homage to a meme we all love and recognize.
          </p>
        </div>
      </div>

      <img className="absolute -z-10 opacity-60 rounded-3xl left-0 bottom-0" src="/froggrt.png" alt="" />
      <img className="absolute -z-10 opacity-60 rounded-3xl top-20 right-10 w-72" src="/crazy.png" alt="" />
      <img className="absolute -z-10 opacity-60 rounded-3xl -bottom-[350px] right-10 w-[550px]" src="/rocket.png" alt="" />
    </div>
  );
}

export default Roadmap;
