import atm from "./assets/smartOPT-one-touch 1.png";
import invoice from "./assets/Vector.png";
import contactless from "./assets/contactlesspayment-svgrepo-com 1.png";
import thumb from "./assets/touch--id_1_.png";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App App-header">
      <Navbar />
      <section>
        <div>
          <div className="title">
            <span className="bold">smartOPT</span> | One Touch
          </div>
          <div className="scroll-text">Scroll till the end</div>
          <img src={atm} className="App-logo" alt="logo" />
        </div>
      </section>

      <section>
        <div className="flex">
          <img src={atm} className="App-logo" alt="logo" />
          <div className="rightSide">
            <div className="heading">
              Log in with <span className="bold">one finger</span>,<br />
              pay with <span className="bold">a tap</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <img src={atm} className="App-logo" alt="logo" />
          <div className="rightSide">
            <div className="heading">
              Log in with <span className="bold">one finger</span>,<br />
              pay with <span className="bold">a tap</span>
            </div>
            <div className="align-center">
              <div className="line" />
              <img src={thumb} alt="logo" />
              <div className="line" />
            </div>
            <div className="subHeading" style={{ marginTop: 0 }}>
              One Touch, the latest version of the Fortech intelligent terminal,
              also with a fingerprint sensor.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <img src={atm} className="App-logo" alt="logo" />
          <div className="rightSide">
            <img src={contactless} alt="logo" />
            <div className="heading">
              Innovativo contactless “<span className="bold">One Touch</span>”
            </div>
            <div className="subHeading">
              Equipped with Ingenico's contactless payment system, smartOPT |
              One Touch allows you to refuel with just one touch on the screen.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <div className="rightSide">
            <img src={invoice} alt="logo" />
            <div className="heading">
              New cover <br /> “<span className="bold">keyless</span>”
            </div>
            <div className="subHeading">
              About the new smartOPT | One Touch the printer door key slot is no
              longer present.
              <br></br>
              <br></br>
              In fact, the new front cover, made up of a single element, is more
              resistant and aesthetically more linear.
            </div>
          </div>
          <img src={atm} className="App-logo" alt="logo" />
        </div>
      </section>
    </div>
  );
}

export default App;
