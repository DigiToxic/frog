import React from "react";

function Utility() {
  return (
    <div className="h-full relative">
      <div className="flex justify-center items-center mt-20">
        <p className="text-5xl">Utility</p>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="w-[800px] max-[815px]:w-[700px] max-[730px]:w-[600px] max-[625px]:w-[500px] max-[530px]:w-[400px] max-[425px]:w-[350px]">
          <p className="text-3xl mb-5">Froggy Emoji Marketplace :</p>
          <p className="text-xl">
            Establish a marketplace for Crazy Frog-themed emojis and stickers.
            Users can purchase and use these fun expressions in their digital
            communication, paid for with Crazy Frog tokens.
          </p>
        </div>
      </div>

      <img className="absolute -z-10 opacity-60 rounded-3xl top-32 right-20 w-72" src="/frog_crazy.png" alt="" />

      <div className="flex justify-center items-center mt-10">
        <div className="w-[800px] max-[815px]:w-[700px] max-[730px]:w-[600px] max-[625px]:w-[500px] max-[530px]:w-[400px] max-[425px]:w-[350px]">
          <p className="text-3xl mb-5">Froggy Farming Game :</p>
          <p className="text-xl">
            Create a decentralized farming game where users can earn Crazy Frog
            tokens by growing and nurturing virtual frogs. The more care they
            provide, the crazier and more valuable the frogs become.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Utility;
