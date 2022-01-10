import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyPlayer } from '../app/action';


export default function PlayerInfo() {
    const playerInfo = useSelector((state) => state.playerInfo);
    const [mode, setMode] = useState('read');
    const [playerName, setPlayerName] = useState('');
    const [playerValue, setPlayerValue] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        setPlayerValue(playerInfo.value);
        setPlayerName(playerInfo.name);
    }, [playerInfo]);

    if (mode === 'read' && playerInfo.name !== '') {
        console.log(playerInfo, 'tets')
        return (
            <div className='player-info-container'>
                <h2>Profil du joueur</h2>
                <span>Nom du joueur : {playerInfo.name}</span>
                <span>Valeur du joueur : {playerInfo.value} €</span>
                <span>Club du joueur: {playerInfo.team}</span>
                <div className='btn-player-info'>
                    <button onClick={() => setMode('edit')}>Modifier</button>
                </div>
            </div>
        )
    } else if(mode === 'edit' && playerInfo.name !== '') {
        return (
            <div className='player-info-container'>
                <h2>Profil du joueur</h2>
                <div className='input-container'>
                    <label>Nom du joueur :</label>
                    <input defaultValue={playerInfo.name} onChange={(evt) => setPlayerName(evt.target.value)} type='text' />
                </div>
                <div className='input-container'>
                    <label>Valeur du joueur :</label>
                    <input defaultValue={playerInfo.value} onChange={(evt) => setPlayerValue(evt.target.value)} type='number' />
                </div>
                <span>Club du joueur: {playerInfo.team}</span>
                <div className='btn-player-info'>
                    <button onClick={() => setMode('read')}>Annuler</button>
                    <button onClick={() => {
                        if(playerValue > 0) {
                            dispatch(modifyPlayer({
                                previousPlayerName: playerInfo.name,
                                playerName: playerName,
                                playerValue: playerValue
                            }));
                            setMode('read');
                        }
                    }}>Valider</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='player-info-container'>
                <p className='info-message'>Cliquez sur le nom d'un joueur pour voir son profil</p>
            </div>
        )
    }

}