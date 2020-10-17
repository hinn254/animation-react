import React from "react";
import { Spring } from "react-spring/renderprops";

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Welcome to Code With Benny</h1>
            <p>Check out my youtube channel</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              expedita corporis sequi veritatis nam nesciunt deleniti quos iusto
              exercitationem, tempora eligendi quibusdam cupiditate sint quasi
              asperiores et perferendis, hic eos!
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {(props) => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
};

const c1Style = {
  background: "#032535",
  color: "white",
  padding: "1.5rem",
};

const counter = {
  background: "#ff9a00",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto",
};
export default Component1;
