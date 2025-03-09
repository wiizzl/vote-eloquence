"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: Date;
};

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const Countdown = (props: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(props.targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [props.targetDate]);

  if (!timeLeft) {
    throw new Error("Invalid date");
  }

  const renderTimeUnit = (value: number) => (
    <div className="relative p-3">
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="bg-gradient-to-br from-gray-800 to-black rounded-t-md"></div>
        <div className="bg-gradient-to-br from-gray-700 to-black rounded-b-md"></div>
      </div>
      <span className="relative text-white font-mono text-4xl">{value}</span>
      <div className="absolute inset-0 flex items-center">
        <div className="h-px w-full bg-black" />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-x-0.5">
      {renderTimeUnit(timeLeft.days)}
      {renderTimeUnit(timeLeft.hours)}
      {renderTimeUnit(timeLeft.minutes)}
      {renderTimeUnit(timeLeft.seconds)}
    </div>
  );
};

export { Countdown };
