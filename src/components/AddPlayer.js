import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer } from '../app/action';


export default function AddPlayer() {
    const clubs = useSelector((state) => state.clubs);
    const [clubValue, setClubValue] = useState('Paris Saint Germain');
    const [playerName, setPlayerName] = useState('');
    const [playerValue, setPlayerValue] = useState(NaN);
    const dispatch = useDispatch();
    return (
        <div className='add-player-container'>
            <h2>Ajouter un joueur</h2>
            <div className='input-container'>
                <label>Nom du joueur :</label>
                <input type='text' value={playerName} onChange={(evt) => setPlayerName(evt.target.value)} />
            </div>
            <div className='input-container'>
                <label>Valeur du joueur :</label>
                <input  type='number' value={playerValue} onChange={(evt) => setPlayerValue(evt.target.value)} />
            </div>
            <div className='input-container'>
                <label>Club du joueur :</label>
                <select
                    name="clubs"
                    id="clubs"
                    value={clubValue}
                    onChange={(evt) => { setClubValue(evt.target.value); console.log(clubValue, 'cluc') }}>
                    {clubs.map((club) => {
                        return (
                            <option key={club.name} value={club.name}>{club.name}</option>
                        )
                    })}
                </select>
            </div>
            <button onClick={() => {
                if(playerName !== '' && playerValue !== 0){
                    dispatch(addPlayer({
                        playerName: playerName,
                        playerValue: playerValue,
                        playerClub: clubValue
                    }));
                    setPlayerName("");
                    setPlayerValue(NaN);
                    setClubValue('Paris Saint Germain')
                }
            }}>
                Ajouter un joueur
            </button>
        </div>
    )
}