import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClub } from '../app/action';


export default function AddClub() {
    const [clubName, setClubName] = useState('');
    const [clubCapital, setClubCapital] = useState(NaN);
    const [clubLogo, setClubLogo] = useState('');
    const dispatch = useDispatch();
    return (
        <div className='add-player-container'>
            <h2>Ajouter un club</h2>
            <div className='input-container'>
                <label>Nom du club :</label>
                <input value={clubName} onChange={(evt) => setClubName(evt.target.value)} type='text' />
            </div>
            <div className='input-container'>
                <label>Capital du club :</label>
                <input value={clubCapital} onChange={(evt) => setClubCapital(evt.target.value)} type='number' />
            </div>
            <div className='input-container'>
                <label>Logo du club :</label>
                <input value={clubLogo} onChange={(evt) => setClubLogo(evt.target.value)} type='text' />
            </div>
            <button onClick={() => {
                if(clubName !== '' && clubCapital !== 0 && clubLogo !== '') {

                    dispatch(addClub({
                        clubName,
                        clubCapital,
                        clubLogo
                    }));
                    setClubCapital(NaN);
                    setClubName("");
                    setClubLogo("");
                }
            }}>
                Ajouter un Club
            </button>
        </div>
    )
}