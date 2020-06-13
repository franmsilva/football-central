import React from 'react';
import './Table.css';

// Routing
import { useHistory } from 'react-router-dom';

const Table = ({standings, leagueID, leagueName}) => {
  let history = useHistory();

  const handleClick = (teamID, teamName) => {
    history.push(`/team/${teamID}/${leagueID}/${teamName}/${leagueName}`)
  }

  return (
    <table id='standings'>
      <thead>
        <tr className='table__header'> 
          <th></th>
          <th></th>
          <th>PL</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>FRM</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody> 
        {standings.map(team => {
          return ( 
            <tr key={team.teamName} onClick={() => handleClick(team.team_id, team.teamName)}>
              <td>{team.rank}</td>
              <td className='table__team'>
                <img src={team.logo} width={30} alt='' />
                <p>{team.teamName}</p>
              </td>
              <td>{team.all.matchsPlayed}</td>
              <td>{team.all.win}</td>
              <td>{team.all.draw}</td>
              <td>{team.all.lose}</td>
              <td>{team.goalsDiff}</td>
              <td>{team.forme}</td>
              <td>{team.points}</td>
            </tr>
          )})
        }
      </tbody>
    </table>
  );
}

export default Table;
