import React from "react";
import { useStyletron } from "styletron-react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import "../styles.scss";
import { totalmem } from "os";

export const CalcCard = () => {
  const [css] = useStyletron();

  const topDiv: string = css({
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  });

  const cardParent: string = css({
    width: "550px",
    height: "600px",
    marginTop: "180px",
    justifyContent: "center",
    background: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0px 3px 6px #00000029"
  });

  const titleParent: string = css({
    fontFamily: "sheep",
    fontSize: "35px",
    color: "#4B9CD3"
  });

  const titleH2: string = css({
    fontSize: "35px",
    color: "#4B9CD3"
  });

  return (
    <div className={topDiv}>
      <div className={cardParent}>
        <h1 className={titleParent}>Sneaker Profit</h1>
        <div>
          <React.Fragment>
            <form>
              <Input placeholder="Cost" />
              <br />
              <Input placeholder="Resell" />
              <br />
              <Input placeholder="Shipping" />
              <br />
              <Input placeholder="Fees" />
              <br />
              <Button
                overrides={{
                  BaseButton: {
                    style: {
                      backgroundColor: "#4B9CD3"
                    }
                  }
                }}
                onClick={() => alert("Your profits will be shown soon...")}
              >
                Calculate
              </Button>
            </form>
          </React.Fragment>
          <br />
          <h2 className={titleH2}>Profit:</h2>
        </div>
      </div>
    </div>
  );
};
