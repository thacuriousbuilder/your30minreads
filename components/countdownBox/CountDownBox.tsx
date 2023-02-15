import { useEffect, useState } from "react";

export interface ICountDownBox {
    days: number;
    hours:number;
    minutes:number;
    seconds:number;

  }
  export const CountDownBox: React.FC<ICountDownBox> =() => {
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        const target = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 7,
          0,
          0,
          0
        );
        const distance = target.getTime() - now.getTime();
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  
    return(
      <div className="flex justify-between items-center xs:text-2xl md:text-4xl  bg-primary-bg md:w-96 md:h-24 w-56 h-12 p-2 rounded-lg xs:w-72 xs:h-20 xs:p-4 xs:rounded-xl text-white font-semibold">
        <div>{countdown.days}d :</div>
        <div>{countdown.hours}h :</div>
        <div>{countdown.minutes}m :</div>
        <div>{countdown.seconds}s</div>
      </div>
    );
  };
  
