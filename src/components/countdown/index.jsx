import React from "react";
import CountdownTimer from "../countdown/CountdownTimer/CountdownTimer";

export const CountDownMarried = () => {
  return (
    <div>
      {/* ES EL SEGUNDO: MILISEGUNDOS */}
      <CountdownTimer countdownTimestampMs={1664017200000} />
    </div>
  );
};
