import React from "react";
import Heroimg from '../src/images/login.png';
import Searchimg from '../src/images/search.png';
import Dowloadimg from '../src/images/dowload1.png';
import Initstate from '../src/images/inistate.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="div-1">
            <a href="#" className="link"><h1 className="brand">ICONOASIS</h1></a>
        </div>

        <div className="div-2">
            <a href="" className='link'><span className='sp-1' >About</span></a>
            <a href="" className='link'><span className='sp-2' >Features</span></a>
            <a href="http://ec2-3-21-134-116.us-east-2.compute.amazonaws.com" className='link'><span className='sp-2' >Try For Free</span></a>

        </div>

      </div>

      <div className="hero">
        <div className="herocontents">
            <div className="herotext">
                Your one-stop Photo destination
            </div>

            <div className="heroimg">
                <img src={Heroimg} alt=""/>
            </div>
        </div>
          <div className="button--try">
              <a href="http://ec2-3-21-134-116.us-east-2.compute.amazonaws.com" className="link"><div>Try for free</div></a>
          </div>
      </div>

        <div className="feature">
            <div className="herotext spec">FEATURES</div>
            <div className="searchImage">
                <div className="ftcont">

                    <div className="ftimg">
                        <img src={Searchimg} className='scaleimg' alt=""/>
                    </div>


                    <div className="fttext">
                        <div className="ftheadertext">
                            Searchable Images
                        </div>

                        <div className="ftextcont">
                            Quickly locate the ideal image
                            or icon using our powerful,
                            top-of-page search feature for
                            instant results.
                        </div>

                    </div>

                </div>

            </div>

            <hr/>

            <div className="searchImage dowloadimg">
                <div className="ftcont">

                    <div className="ftimg">
                        <img src={Dowloadimg} className='scaleimg' alt=""/>
                    </div>


                    <div className="fttext">
                        <div className="ftheadertext">
                            Downloadable Images
                        </div>

                        <div className="ftextcont">
                            Access our content effortlessly
                            through the prominent download button
                            for an instant and hassle-free experience.
                        </div>

                    </div>

                </div>

            </div>
            <hr/>
            <div className="searchImage">
                <div className="ftcont">

                    <div className="ftimg">
                        <img src={Initstate} className='scaleimg' alt=""/>
                    </div>


                    <div className="fttext">
                        <div className="ftheadertext">
                            Responsive Design
                        </div>

                        <div className="ftextcont">
                            Effortlessly access our responsive website on any device for optimal viewing.
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
  );
}

export default App;
