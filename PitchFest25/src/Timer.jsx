import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [Day, setDay] = useState(null);
  const [Hour, setHour] = useState(null);
  const [Min, setMin] = useState(null);
  const [Sec, setSec] = useState(null);

  const prevDay = useRef(Day);
  const prevHour = useRef(Hour);
  const prevMin = useRef(Min);
  const prevSec = useRef(Sec);

  const TargetDate = new Date("February 19, 2025 00:00:00 GMT+0530");

  const FormatTime = (number) => {
    return number < 10 ? "0" + number : number;
  };
  const calculateTime = () => {
    const TimeDifference = TargetDate - Date.now();

    const NewDay = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));
    const NewHour = Math.floor(
      (TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const NewMin = Math.floor(
      (TimeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const NewSec = Math.floor((TimeDifference % (1000 * 60)) / 1000);

    if (TimeDifference <= 0) {
      setDay("00");
      setHour("00");
      setMin("00");
      setSec("00");
    }

    if (NewDay !== prevDay.current) {
      setDay(FormatTime(NewDay));
      prevDay.current = NewDay;
    }
    if (NewHour !== prevHour.current) {
      setHour(FormatTime(NewHour));
      prevHour.current = NewHour;
    }
    if (NewMin !== prevMin.current) {
      setMin(FormatTime(NewMin));
      prevMin.current = NewMin;
    }
    if (NewSec !== prevSec.current) {
      setSec(FormatTime(NewSec));
      prevSec.current = NewSec;
    }
  };
  useEffect(() => {
    const Timer = setInterval(() => {
      calculateTime();
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Math.floor(Day / 10)}
            </span>
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Day % 10}
            </span>
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-normal text-white">DAYS</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-1 sm:gap-2">
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Math.floor(Hour / 10)}
            </span>
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Hour % 10}
            </span>
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-normal text-white">HRS</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center  gap-1 sm:gap-2">
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Math.floor(Min / 10)}
            </span>
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Min % 10}
            </span>
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-normal text-white">MIN</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center  gap-1 sm:gap-2">
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Math.floor(Sec / 10)}
            </span>
            <span className="bg-slate-400/30 text-2xl md:text-3xl font-semibold text-white p-2 sm:p-3 md:p-4 rounded-lg">
              {Sec % 10}
            </span>
          </div>
          <div className="text-sm sm:text-lg md:text-xl font-normal text-white">SEC</div>
        </div>
      </div>
    </div>
  );
};
export default Timer;
