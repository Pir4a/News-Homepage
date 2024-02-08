import gaming from "../../assets/images/image-gaming-growth.jpg"
import retro from "../../assets/images/image-retro-pcs.jpg"
import webdesktop from "../../assets/images/image-web-3-desktop.jpg"
import laptops from "../../assets/images/image-top-laptops.jpg"
import webmobile from "../../assets/images/image-web-3-mobile.jpg"

function Home() {
  return (
    <div className="home flex flex-col gap-6 w-full m-auto">
      <div className="gridtop gap-7 w-11/12 xl:w-4/5 grid grid-cols-1 grid-rows-1 xl:grid-cols-3 xl:grid-rows-4 xl:gap-x-7 xl:gap-y-12 m-auto">
        <div className="xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-1">
          <img src={webdesktop} className="object-cover hidden xl:block" />
          <img src={webmobile} className="object-cover xl:hidden block" />
        </div>
        <div className="bigtext text-6xl xl:col-start-1 xl:col-end-1 xl-row-start-2 py-1 xl:hidden block">
          <h1 className="font-extrabld text-5xl">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="block xl:hidden">
          <p className="pb-12 font-reg text-lg ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="cursor-pointer bg-buttonorange font-bld tracking-widemax text-xs text-white w-56 h-14">
            READ MORE
          </button>
        </div>
        <div
          className="blogposts flex flex-col bg-deepblue px-6 mt-12
         py-9 gap-9 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-5"
        >
          <h1 className="font-extrabld text-golden text-4xl">New</h1>
          <div className="post text-white border-b-graytext flex flex-col ">
            <h2 className="font-bld">Hydrogen VS Electric Cars</h2>
            <p className="font-reg text-graytext">
              Will Hydrogen-fueled cars even catch up to EVs?
            </p>
          </div>
          <hr className="text-xs w-full m-auto opacity-50" />
          <div className="post text-white">
            <h2 className="font-bld">The Downsides of AI Artistry</h2>
            <p className="font-reg text-graytext">
              What are the possible adverse effecst of on-demand AI image
              generations?{" "}
            </p>
          </div>
          <hr className="text-xs w-full m-auto opacity-50" />
          <div className="post text-white">
            <h2 className="font-bld">Is VC Funding Drying Up?</h2>
            <p className="font-reg text-graytext">
              Private funding by BC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="bigtext text-6xl xl:col-start-1 xl:col-end-1 xl-row-start-2 py-1 hidden xl:block">
          <h1 className="font-extrabld ">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="xl:block hidden">
          <p className="pb-12 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="cursor-pointer bg-buttonorange font-bld tracking-widemax text-xs text-white w-56 h-14">
            READ MORE
          </button>
        </div>
      </div>
      <div className="gridbottom w-11/12 m-auto grid gap-2 pt-10">
        <div className="Articles flex py-4 gap-5">
          <img src={retro} className="w-1/3 pr-2" />
          <div className="flex flex-col gap-3 ">
            <h1 className="font-extrabld text-gray-300 text-5xl">01</h1>
            <h2 className="font-extrabld text-xl">Reviving Retro PCs</h2>
            <p className="font-reg text-base">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="Articles flex py-4 gap-5">
          <img src={laptops} className="w-1/3 pr-2" />
          <div className="flex flex-col gap-3 ">
            <h1 className="font-extrabld text-gray-300 text-5xl">02</h1>
            <h2 className="font-extrabld text-xl">Top 10 Laptops of 2022</h2>
            <p className="font-reg text-base">
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className="Articles flex py-4 gap-5">
          <img src={gaming} className="w-1/3 pr-2" />
          <div className="flex flex-col gap-3 ">
            <h1 className="font-extrabld text-gray-300 text-5xl">03</h1>
            <h2 className="font-extrabld text-xl">The Growth of Gaming</h2>
            <p className="font-reg text-base">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
        <h1></h1>
      </div>
    </div>
  )
}

export default Home
