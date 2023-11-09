import { useEffect, useState } from "react";

export function useCountdown(targetDate) {
  const [millisecondsTillTargetTime, setMillisecondsTillTargetTime] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMillisecondsTillTargetTime(
        targetDate.getTime() - new Date().getTime()
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getReturnValues(millisecondsTillTargetTime);
}

const getReturnValues = (millisecondsTillTargetTime) => {
  // Calculate time left in various time intervals
  const days = round(millisecondsTillTargetTime / (1000 * 60 * 60 * 24));
  const hours = round(
    (millisecondsTillTargetTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = round(
    (millisecondsTillTargetTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = round((millisecondsTillTargetTime % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Round down if positive number, round up if negative number
function round(value) {
  if (value > 0) {
    return Math.floor(value);
  }
  return Math.ceil(value);
}
