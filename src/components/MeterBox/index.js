import { useEffect, useRef } from "react";
import style from "./style.module.css";

export default function MeterBox({ value, width }) {
  const refPin = useRef(null);
  const timer = useRef(null);
  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    timer.current = setInterval(() => {
      refPin.current.style.webkitTransform =
        "rotate(" + (90 - Number(value)) + "deg)";
    }, 2000);
  }, [value]);

  return (
    <div
      id={style["meter-box"]}
      style={{
        width: width + "px",
        height: width * 0.6 + "px"
      }}
    >
      <img
        id={style["meter"]}
        alt="meter"
        style={{ width: "100%" }}
        src="https://res.cloudinary.com/dptwdk7ky/image/upload/v1673605954/Temp/01_meter.png"
      />
      <img
        ref={refPin}
        id={style["pin"]}
        alt="pin"
        src="https://res.cloudinary.com/dptwdk7ky/image/upload/v1673938837/Temp/02_meter_new.png"
      />
    </div>
  );
}
