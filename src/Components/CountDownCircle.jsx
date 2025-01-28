import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const CountDownCircle = ({marathonStartDate}) => {

    

     // Calculate the remaining time in seconds until the marathon starts
  const currentTime = Date.now() / 1000; // Current time in seconds
  const startTime = new Date(marathonStartDate).getTime() / 1000; // Marathon start time in seconds
  const remainingTime = Math.max(startTime - currentTime, 0); // Ensure no negative value

  // Helper function to format remaining time
  const formatTime = (time) => {
    const days = Math.floor(time / (60 * 60 * 24));
    const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    return { days, hours, minutes };
  };

  const renderTime = ({ remainingTime }) => {
    const { days, hours, minutes } = formatTime(remainingTime);

    return (
      <div className="flex flex-col items-center">
        <div className="text-md font-bold">Marathon Starts in</div>
        <div className="text-lg">
          {days}d {hours}h {minutes}m
        </div>
      </div>
    );
  };




    return (
        <div className="flex justify-center items-center">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          initialRemainingTime={remainingTime}
          colors={["#4caf50", "#ffa726", "#f44336"]}
          colorsTime={[remainingTime, remainingTime / 2, 0]}
          onComplete={() => ({ shouldRepeat: false })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    );
};

export default CountDownCircle;