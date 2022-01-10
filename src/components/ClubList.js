import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClubInfo } from '../app/action';


export default function ClubList() {
    const clubs = useSelector((state) => state.clubs);
    const dispatch = useDispatch();

    return (
        <aside className='clubs-list-container'>
            <h2>Liste des clubs</h2>
            <ul className='clubs-list'>
                {clubs.map((club) => {
                    return (
                        <li key={club.name} onClick={() => dispatch(setClubInfo({
                            clubName: club.name,
                            clubCapital: club.capital
                        }))}>
                            <img src={club.picture} alt='logo club'/>
                            <p>{club.name}</p>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}