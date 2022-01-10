import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transfertPlayer, setPlayerInfo, setClubInfo } from '../app/action';



export default function Transfert() {
    const playerInfo = useSelector((state) => state.playerInfo);
    const clubInfo = useSelector((state) => state.clubInfo);
    const clubs = useSelector((state) => state.clubs);
    const [buyers, setBuyers] = useState('');
    const [buyersBudget, setBuyersBudget] = useState(0);
    const dispatch = useDispatch();
    const isClub = clubs.filter((club) => {
        if (club.capital > playerInfo.value && club.name !== playerInfo.club) {
            return club.name
        }
    });

    if (playerInfo.name === '') {
        return (
            <div className='transfert-container'>
                <p className='info-message'>Cliquez sur le nom d'un joueur pour débuter un transfert</p>
            </div>
        )
    } else if (isClub.length === 0) {
        return (
            <div className='transfert-container'>
                <h2>Aucun transfert n'est possible pour ce joueur</h2>
            </div>
        )
    }
    return (
        <div className='transfert-container'>
            <h2>Transfert de joueur</h2>
            <span>Dans quelle équiper souhaitez-vous transférer {playerInfo.name} ?</span>
            <ul>

                {clubs.map((club) => {
                    console.log(isClub.length)
                    if (club.capital > playerInfo.value && club.name !== playerInfo.team) {
                        return (
                            <button onClick={() => {
                                setBuyers(club.name);
                                setBuyersBudget(club.capital)
                            }}>
                                <img src={club.picture} alt='club logo' />

                            </button>
                        )
                    }
                })}
            </ul>
            <button onClick={() => {
                if (buyers !== playerInfo.club) {

                    dispatch(transfertPlayer(playerInfo, {
                        name: buyers,
                        capital: buyersBudget
                    }));
                    dispatch(setPlayerInfo({
                        playerName: playerInfo.name,
                        playerValue: playerInfo.value,
                        playerClub: buyers
                    }));
                    if (clubInfo.name === buyers) {
                        dispatch(setClubInfo({
                            clubName: buyers,
                            clubCapital: buyersBudget - playerInfo.value
                        }));
                    }
                }
            }
            } className='transfert-btn'>Transférer</button>
        </div>
    )
}