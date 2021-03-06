import React, { useState } from "react";
import { Transition, animated } from "react-spring/renderprops";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const toggle = () => setShowComponent(!showComponent);

  return (
    <div className="App">
      <Component1 />
      <Component2 toggle={toggle} />
      <Transition
        native
        items={showComponent}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
}

export default App;
