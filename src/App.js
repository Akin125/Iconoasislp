import React from "react";
import Heroimg from '../src/images/login.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="div-1">
          <h1 className="brand">ICONOASIS</h1>
        </div>

        <div className="div-2">
          <span className='sp-1'>About</span>
          <span className='sp-2'>Feature</span>
          <span className='sp-3'>Try for free</span>
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
              <div>Try for free</div>
          </div>
      </div>

    </div>
  );
}

export default App;
