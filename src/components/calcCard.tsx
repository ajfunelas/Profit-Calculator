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

  let cost: number = 0;
  let resell: number = 0;
  let shipping: number = 0;
  let fees: number = 0;

  function handleCalc(
    cost: number,
    resell: number,
    shipping: number,
    fees: number
  ) {
    return resell - cost - (shipping - fees);
  }

  return (
    <div className={topDiv}>
      <div className={cardParent}>
        <h1 className={titleParent}>Sneaker Profit</h1>
        <div>
          <React.Fragment>
            <form>
              <Input placeholder="Cost" value={cost} />
              <br />
              <Input placeholder="Resell" value={resell} />
              <br />
              <Input placeholder="Shipping" value={shipping} />
              <br />
              <Input placeholder="Fees" value={fees} />
            </form>
          </React.Fragment>
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
          <h2 className={titleH2}>Profit:</h2>
        </div>
      </div>
    </div>
  );
};
