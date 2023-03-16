import React from "react";
import "./count.css";
import CountUp, { useCountUp } from "react-countup";

function Count() {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 200,
    delay: 1,
    duration: 8,
  });
  return (
    <div className="count">
      BUTONLAR ORTADAKİ SAYI İÇİNDİR
      <div className="boxes">
        <div className="box box1">
          <CountUp end={100} duration={5} delay={2} />
        </div>
        <div className="box box2" ref={countUpRef}>
          0
        </div>
        <div className="box box3">
          <CountUp
            end={500}
            duration={7}
            delay={4}
            prefix="&#8378;"
            suffix=" TL"
          />
        </div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={start}>
          Start
        </button>
        <button className="btn" onClick={pauseResume}>
          pauseResume
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
        <button className="btn" onClick={() => update(500)}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Count;
