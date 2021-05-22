import { React } from 'react';


export const MatchDetailCard = ({match}) => {
    if(!match) return null;
  return (
    <div className="MatchDetailCard">
      <h3>Latest Mathches</h3>
      <h3>Match Details Card</h3>
      <h4>{match.team1} vs {match.team2}</h4>
    </div>
  );
}