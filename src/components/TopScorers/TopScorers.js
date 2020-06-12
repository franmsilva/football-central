import React from 'react';
import './TopScorers.css';

const TopScorers = ({topscorers, teams}) => {
  const mostGoals = topscorers[0].goals.total;
  return (
    <div className="TopScorers">
      {topscorers.map(scorer => {
        return (
          <div 
            className='topscorer__container' 
            style={{width: `${scorer.goals.total / mostGoals * 100}%`}}
          >
            <div className='topscorer__player'>
              <img src={teams[scorer.team_name]} width={60} alt=''/>
              <p>
                {scorer.player_name.split(' ').length < 2 
                  ? <p><span>{scorer.player_name}</span></p>
                  : scorer.player_name.split(' ').length === 2 
                    ? <p>{scorer.player_name.split(' ')[0]} <span>{scorer.player_name.split(' ')[1]}</span></p>
                    : <p>{scorer.player_name.split(' ')[0]} <span>{scorer.player_name.split(' ').pop()}</span></p>
                }
              </p>
            </div>
            <div className='topscorer__goals'>{scorer.goals.total}</div>
          </div>
        )
      })}
    </div>
  );
}

export default TopScorers;
