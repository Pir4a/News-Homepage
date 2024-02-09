import gaming from "../../assets/images/image-gaming-growth.jpg"
import retro from "../../assets/images/image-retro-pcs.jpg"
import webdesktop from "../../assets/images/image-web-3-desktop.jpg"
import laptops from "../../assets/images/image-top-laptops.jpg"
import webmobile from "../../assets/images/image-web-3-mobile.jpg"

function Home() {
  return (
    <div className="home flex flex-col gap-6 w-full m-auto lg:grid lg:grid-row-3 lg:grid-cols-3">
      <div
        className="gridtop lg:min-h-[1000px] gap-7 w-11/12 lg:w-4/5 grid grid-cols-1 grid-rows-1
         lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-7 lg:gap-y-12 
          lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-3 m-auto"
      >
        <div className="lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <img
            src={webdesktop}
            className="object-cover hidden lg:block lg:h-[300px] xl:h-auto"
          />
          <img src={webmobile} className="object-cover lg:hidden block" />
        </div>
        <div className="bigtext text-6lg lg:col-start-1 lg:col-end-1 lg-row-start-1 py-1 lg:hidden block">
          <h1 className="font-extrabld text-5lg">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="block lg:hidden">
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
          className="blogposts flex flex-col bg-deepblue px-6 mt-12 lg:mt-0
         py-9 gap-9 lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3
         lg:min-h-[500px] lg:max-h[600px] xl:max-h-[560px] 2xl:max-h-[552px]"
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
        <div className="bigtext text-6xl lg:col-start-1 lg:col-end-1 lg-row-start-2 lg:pt-[2px] hidden lg:block">
          <h1 className="font-extrabld ">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="lg:block hidden lg:pt-[75px] xl:pt-0">
          <p className="pb-12 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="cursor-pointer bg-buttonorange font-bld tracking-widemax text-xs text-white w-56 h-14">
            READ MORE
          </button>
        </div>
        <div className="gridbottom lg:-mt-5 lg:gap-x-8  m-auto grid gap-2 pt-10 lg:pt-0 xl:-mt-[7.5rem] lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:grid-cols-3 lg:grid-rows-1">
          <div className="Articles flex py-4 gap-7">
            <img src={retro} className="w-1/3 pr-2 object-cover" />
            <div className="flex flex-col gap-3 ">
              <h1 className="font-extrabld text-gray-300 text-5lg">01</h1>
              <h2 className="font-extrabld text-lg">Reviving Retro PCs</h2>
              <p className="font-reg text-base">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="Articles flex py-4 gap-7">
            <img src={laptops} className="w-1/3 pr-2 object-cover" />
            <div className="flex flex-col gap-3 ">
              <h1 className="font-extrabld text-gray-300 text-5lg">02</h1>
              <h2 className="font-extrabld text-lg">Top 10 Laptops of 2022</h2>
              <p className="font-reg text-base">
                Our best picks for various needs and budgets
              </p>
            </div>
          </div>
          <div className="Articles flex py-4 gap-7">
            <img src={gaming} className="w-1/3 pr-2 object-cover" />
            <div className="flex flex-col gap-3 ">
              <h1 className="font-extrabld text-gray-300 text-5lg">03</h1>
              <h2 className="font-extrabld text-lg">The Growth of Gaming</h2>
              <p className="font-reg text-base">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}

export default Home
