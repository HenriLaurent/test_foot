import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyClub } from '../app/action';


export default function ClubInfo() {
    const clubInfo = useSelector((state) => state.clubInfo);
    const [mode, setMode] = useState('read');
    const dispatch = useDispatch();
    const [clubName, setClubName] = useState('');
    const [clubCapital, setClubCapital] = useState(0);
   
    
    useEffect(() => {
        setClubCapital(clubInfo.capital);
        setClubName(clubInfo.name);
    }, [clubInfo])

    if (mode === 'read' && clubInfo.name !== '') {
        return (
            <div className='club-info-container'>
                <h2>Profil du club</h2>
                <span onDoubleClick={() => setMode('edit')}>Nom du club : {clubInfo.name}</span>
                <span onDoubleClick={() => setMode('edit')}>Capital du club : {clubInfo.capital} €</span>
                <div className='btn-player-info'>
                    <button onClick={() => setMode('edit')}>Modifier</button>
                </div>
            </div>
        )
    } else if(mode === 'edit' && clubInfo.name !== '') {
        return (
            <div className='club-info-container'>
                <div className='input-container'>
                    <label>Nom du club :</label>
                    <input defaultValue={clubInfo.name} onChange={(evt) => setClubName(evt.target.value)} type='text' />
                </div>
                <div className='input-container'>
                    <label>Capital du club :</label>
                    <input defaultValue={clubInfo.capital} onChange={(evt) =>setClubCapital(evt.target.value)} type='number' />
                </div>
                <div className='btn-player-info'>
                    <button onClick={() => setMode('read')}>Annuler</button>
                    <button onClick={() => {
                        if(clubCapital > 0){
                            dispatch(modifyClub({
                                previousClubName: clubInfo.name,
                                clubName: clubName,
                                clubCapital: clubCapital
                            }));
                            setMode('read');
                        }
                    }}>Valider</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='club-info-container'>
                <p className='info-message'>Cliquez sur le nom d'un club pour voir son profil</p>
            </div>
        )
    }
}