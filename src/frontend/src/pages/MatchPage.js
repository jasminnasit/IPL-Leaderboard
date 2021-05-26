import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../component/MatchDetailCard';


export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const teamName = "Delhi Capitals";

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=2019`);
                const data = await response.json();
                setMatches(data);
            };
 
            fetchMatches();
        }, []
    );


    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            { matches.map(match => <MatchDetailCard teamName={teamName} match={match} />)}
        </div>
    );
}

