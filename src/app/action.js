
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_CLUB = 'ADD_CLUB';
export const SET_PLAYER_INFO= 'SET_PLAYER_INFO';
export const SET_CLUB_INFO='SET_CLUB_INFO';
export const MODIFY_CLUB = "MODIFY_CLUB";
export const MODIFY_PLAYER= 'MODIFY_PLAYER';
export const TRANSFERT_PLAYER= "TRANSFERT_PLAYER";


export const addPlayer = (player) => ({
    type: ADD_PLAYER,
    value: player
});

export const addClub = (club) => ({
    type: ADD_CLUB,
    value:club
});

export const setPlayerInfo = (player) => ({
    type: SET_PLAYER_INFO,
    value:player
});

export const setClubInfo = (club) => ({
    type: SET_CLUB_INFO,
    value:club
});

export const modifyClub = (club) => ({
    type: MODIFY_CLUB,
    value:club
});

export const modifyPlayer = (player) => ({
    type: MODIFY_PLAYER,
    value:player
});

export const transfertPlayer = (player,club) => ({
    type:TRANSFERT_PLAYER,
    value: {
        player,
        club
    }
});