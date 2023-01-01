import { CiCircleCheck } from "react-icons/ci";
const Pricin = () => {
  return (
    <div className="pricing py-5 md:m-5 m-10 shadow flex flex-col items-center">
      <div className="card-top flex flex-col items-center">
        <p className="font-bold text-emerald-600">Basic</p>
        <p>
          <span>&#36;</span>
          <span className="text-xl">354</span>
        </p>
      </div>
      <div className="card-list flex flex-col items-start">
        <p className="flex items-center">
          <CiCircleCheck className="text-emerald-600" />
          <span className="m-2 ">Feature One</span>
        </p>
        <p className="flex items-center">
          <CiCircleCheck className="text-emerald-600" />
          <span className="m-2 ">Feature two</span>
        </p>
        <p className="flex items-center">
          <CiCircleCheck className="text-emerald-600" />
          <span className="m-2 ">Feature three</span>
        </p>
        <p className="flex items-center">
          <CiCircleCheck className="text-emerald-600" />
          <span className="m-2 ">Feature Four</span>
        </p>
      </div>
      <div className="nav-cta flex">
        <button className=" px-20 bg-gradient-to-r  from-[#fea703] to-[#fe7d05]   py-1 m-2 rounded">
          Order
        </button>
      </div>
    </div>
  );
};

export default Pricin;
