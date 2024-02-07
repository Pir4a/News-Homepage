import gaming from "../../assets/images/image-gaming-growth.jpg"
import retro from "../../assets/images/image-retro-pcs.jpg"
import webdesktop from "../../assets/images/image-web-3-desktop.jpg"
import laptops from "../../assets/images/image-top-laptops.jpg"
import webmobile from "../../assets/images/image-web-3-mobile.jpg"

function Home() {
  return (
    <div className="home">
      <div className="gridtop"></div>
      <img src={webdesktop} />
      <div className="blogposts flex flex-col">
        <h1>New</h1>
        <div className="post">
          <h2>Hydrogen VS Electric Cars</h2>
          <p>Will Hydrogen-fueled cars even catch up to EVs?</p>
        </div>
        <div className="post">
          <h2>The Downsides of AI Artistry</h2>
          <p>
            What are the possible adverse effecst of on-demand AI image
            generations?{" "}
          </p>
        </div>
        <div className="post">
          <h2>Is VC Funding Drying Up?</h2>
          <p>
            Private funding by BC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className="gridbottom"></div>
    </div>
  )
}

export default Home
