import React from 'react';
import './styles.scss';
import PlayerList from './PlayerList';
import ClubList from './ClubList';
import AddPlayer from './AddPlayer';
import AddClub from './AddClub';
import PlayerInfo from './PlayerInfo';
import ClubInfo from './ClubInfo';
import Transfert from './Transfert';


function App() {
  return (
    <div className="app">
      <aside className='players-container'>
        <PlayerList />
        <AddPlayer />
      </aside>
      <div className='info-container'>
        <PlayerInfo />
        <ClubInfo />
        <Transfert/>

      </div>
      <aside className='clubs-container'>
        <ClubList />
        <AddClub />
      </aside>
    </div>
  );
}

export default App;

