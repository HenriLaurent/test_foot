import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerInfo } from '../app/action';


export default function PlayerList() {
    const players = useSelector((state) => state.players);
    const dispatch = useDispatch();
    return (
        <aside className='players-list-container'>
            <h2>Liste des joueurs</h2>
            <ul className='players-list'>
                {players.map((player) => {
                    return (
                        <li key={player.name} onClick={() => dispatch(setPlayerInfo({
                            playerName: player.name,
                            playerValue: player.value,
                            playerClub:player.team
                        }))}>{player.name}</li>
                    )
                })}
            </ul>
        </aside>
    )
}