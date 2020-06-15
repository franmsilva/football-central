import React, { useEffect, useState } from 'react';
import './FixtureCountdown.css';

// Utils 
import moment from 'moment';

const FixtureCountdown = ({startTime}) => {
  const [timeToStart, setTimeToStart] = useState('')

  const countdown = () => {
    const timeDifference = Date.parse(startTime) - Date.now();;
    return moment(timeDifference).format('HH:mm:ss')
  }

  useEffect(() => {
    setInterval(() => setTimeToStart(countdown()), 500)
  })

  return (
    <div className="fixturecountdown">
      <span id='precountdown'>The Action Starts in </span>
      <span>{timeToStart}</span>
    </div>
  );
}

export default FixtureCountdown;
