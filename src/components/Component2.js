import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Glad you are here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                inventore sapiente, natus nisi aspernatur neque debitis minus
                cupiditate, maiores quae alias laboriosam voluptates unde
                accusamus libero itaque doloremque harum officia temporibus
                ducimus architecto voluptatibus sequi corrupti. Similique
                accusamus maxime voluptatum sed nemo. Delectus rem unde minima
                tenetur vitae ipsum veritatis!
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const btn = {
  background: "#ff5700",
  color: "white",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0",
};

const c2Style = {
  background: "#ffb515",
  color: "white",
  padding: "1.5rem",
};

export default Component2;
