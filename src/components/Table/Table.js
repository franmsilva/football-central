import React from 'react';
import './Table.css';

// Routing
import { useHistory } from 'react-router-dom';

const Table = ({standings, leagueID}) => {
  let history = useHistory();

  const handleClick = (teamID, teamName) => {
    history.push(`/team/${teamID}/${leagueID}/${teamName}`)
  }

  return (
    <table id='standings'>
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
    </table>
  );
}

export default Table;
