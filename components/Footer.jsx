const Footer = () => {
  return (
    <div className="footer ">
      <div className=" md:flex md:justify-around items-center rounded relative px-10 py-5 z-10 t footer-top m-4 mb-[-50px] bg-gradient-to-r from-[#1c4dd6] to-[#2e9bf1]">
        <p className="text-slate-200">Subscribe to our news</p>
        <div className="form">
          <input type="email" className="rounded-tl w-1/2 rounded-bl  py-1" />
          <button className="rounded-tr rounded-br bg-gradient-to-r  from-[#fea703] to-[#fe7d05] px-5 py-1">
            Subscribe
          </button>
        </div>
      </div>
      <div className="footer-middle p-4 flex justify-between items-center pt-20 bg-[#1e1957] relative z-5">
        <p className="text-[30px] brand">CloudBro</p>
        <div className="footer-socials">
          <span className=" m-2  social-font">f</span>
          <span className=" m-2  social-font">t</span>
          <span className=" m-2  social-font">y</span>
          <span className=" m-2  social-font">d</span>
          <span className=" m-2  social-font">c</span>
        </div>
      </div>
      <div className="footer-buttom md:flex md:justify-around items-center p-4 bg-[#1e1957] relative z-5">
        <div className="navigation">
          <p className="text-slate-200 text-bold">Navigtion</p>
          <ul className="text-slate-400 text-xs">
            <li className="m-1">Home</li>
            <li className="m-1">Pricing</li>
            <li className="m-1">About</li>
            <li className="m-1">Contact</li>
          </ul>
        </div>
        <div className="navigation my-10">
          <p className="text-slate-200 text-bold">Navigtion</p>
          <ul className="text-slate-400 text-xs">
            <li className="m-1">Home</li>
            <li className="m-1">Pricing</li>
            <li className="m-1">About</li>
            <li className="m-1">Contact</li>
          </ul>
        </div>
        <div className="navigation my-10">
          <p className="text-slate-200 text-bold">Navigtion</p>
          <ul className="text-slate-400 text-xs">
            <li className="m-1">Home</li>
            <li className="m-1">Pricing</li>
            <li className="m-1">About</li>
            <li className="m-1">Contact</li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-600 flex justify-around p-2">
        <span className="text-slate-200">
          Next X TailwindCss template by &#169; Gebeta Tech
        </span>
      </div>
    </div>
  );
};

export default Footer;
