import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero pt-[5.5rem] flex flex-col-reverse items-center pb-10">
      <div className="hero-left flex flex-col text-center pt-10 ">
        <p className="hero-title text-xl text-white font-bold">
          Best Cloud Server
        </p>
        <p className="hero-text pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem ab sunt fuga magnam velit temporibus necessitatibus.
          Neque, nihil amet magnam esse quia minus, assumenda fugiat
        </p>
        <div className="hero-cta pt-5">
          <button className="bg-gradient-to-r  from-[#fea703] to-[#fe7d05] px-4 py-1 m-2 rounded">
            Get Started
          </button>
        </div>
      </div>
      <div className="right ">
        <img src="/img/server.png" className="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
