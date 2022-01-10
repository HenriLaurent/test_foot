import { ADD_PLAYER, ADD_CLUB, SET_CLUB_INFO,SET_PLAYER_INFO, MODIFY_CLUB, MODIFY_PLAYER, TRANSFERT_PLAYER } from "./action";
const initialState = {
  clubInfo: {
    name: '',
    capital: 0,
    logo:'',
  },
  playerInfo: {
    name: '',
    value: 0,
    club: ''
  },
  clubs: [
    {
      name: "Paris Saint Germain",
      capital: 300000000,
      picture: 'https://www.psg.fr/img/DefaultOpenGraphImage.jpg?2019'
    },
    {
      name: "Real Madrid",
      capital: 350000000,
      picture: "https://logo-marque.com/wp-content/uploads/2020/11/Real-Madrid-Logo.png"
    },
    {
      name: "Milan AC",
      capital: 120000000,
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png"
    },
    {
      name: "Olympique de Marseille",
      capital: 80000000,
      picture: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Olympique_de_Marseille.svg/1200px-Logo_Olympique_de_Marseille.svg.png"
    }
  ],
  players: [
    {
      name: "Fabrice Pancrate",
      value: 4000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Edinson Cavani",
      value: 100000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Jerome Alonzo",
      value: 8000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Ronaldinho",
      value: 180000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Blaise Matuidi",
      value: 30000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Adrien Rabiot",
      value: 0,
      team: "Paris Saint Germain"
    },
    {
      name: "Marquinhos",
      value: 50000000,
      team: "Paris Saint Germain"
    },
    {
      name: "Raul",
      value: 100000000,
      team: 'Real Madrid'
    },
    {
      name: "Cristiano Ronaldo",
      value: 210000000,
      team: 'Real Madrid'
    },
    {
      name: "Roberto Carlos",
      value: 80000000,
      team: 'Real Madrid'
    },
    {
      name: "Julien Faubert",
      value: 666.66,
      team: 'Real Madrid'
    },
    {
      name: "Sergio Ramos",
      value: 60000000,
      team: 'Real Madrid'
    },
    {
      name: "Fernando Redondo",
      value: 50000000,
      team: 'Real Madrid'
    },
    {
      name: "Zinedine Zidane",
      value: 600000000,
      team: 'Real Madrid'
    },
    {
      name: "Adnrei Shevchenko",
      value: 45000000,
      team: 'Milan AC'
    },
    {
      name: "Paolo Maldini",
      value: 40000000,
      team: 'Milan AC'
    },
    {
      name: "Andrea Pirlo",
      value: 50000000,
      team: 'Milan AC'
    },
    {
      name: "Gennaro Gattuso",
      value: 35000000,
      team: 'Milan AC'
    },
    {
      name: "Zlatan Ibrahimovic",
      value: 90000000,
      team: 'Milan AC'
    },
    {
      name: "Adil Rami",
      value: 18,
      team: 'Milan AC'
    },
    {
      name: "Pipo Inzaghi",
      value: 38000000,
      team: 'Milan AC'
    },
    {
      name: "Mathieu Valbuena",
      value: 20000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Jean-Pierre Papin",
      value: 75000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Pancho Abardonado",
      value: 1000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Chris Waddle",
      value: 50000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Bouna Sarr",
      value: 35000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Mamadou Niang",
      value: 40000000,
      team: 'Olympique de Marseille'
    },
    {
      name: "Ibrahima Bakayoko",
      value: 4800000,
      team: 'Olympique de Marseille'
    },
  ]

}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PLAYER: {
      const { playerName, playerValue, playerClub } = action.value;
      const isPLayer = state.players.find(player => player.name === playerName);
      if (!isPLayer) {
        return {
          ...state,
          players: [...state.players, {
            name: playerName,
            value: playerValue,
            team: playerClub
          }]
        }
      } else {
        return {
          ...state
        }
      }
    }
    case ADD_CLUB: {
      const { clubName, clubCapital,clubLogo } = action.value;
      const isClub = state.clubs.find(club => club.name === clubName);
      if (!isClub) {
        return {
          ...state,
          clubs: [
            ...state.clubs,
            {
              name: clubName,
              capital: clubCapital,
              picture: clubLogo
            }
          ]
        }
      } else return {
        ...state
      }
    }
    case SET_PLAYER_INFO: {
      const {playerName, playerValue, playerClub} = action.value;
      return {
        ...state,
        playerInfo: {
          name: playerName,
          value: playerValue,
          team: playerClub
        }
      }
    }
    case SET_CLUB_INFO: {
      const {clubName, clubCapital} = action.value;
      return {
        ...state,
        clubInfo: {
          name: clubName,
          capital: clubCapital
        }
      }
    }
    case MODIFY_CLUB: {
      const {previousClubName, clubName, clubCapital} = action.value;
      return {
        ...state,
        clubInfo: {
          name: clubName,
          capital: clubCapital
        },
        clubs: state.clubs.map((club) => {
          if(club.name === previousClubName) {
            return {
              ...club,
              name: clubName,
              capital: clubCapital
            }
          } else {
            return club;
          }
        })
      }
    }
    case MODIFY_PLAYER: {
      const {previousPlayerName, playerName, playerValue} = action.value;
      return {
        ...state,
        playerInfo: {
          ...state.playerInfo,
          name: playerName,
          value: playerValue,
        },
        players: state.players.map((player) => {
          if(player.name === previousPlayerName) {
            return {
              ...player,
              name: playerName,
              value: playerValue
            }
          } else {
            return player;
          }
        })
      }
    }
    case TRANSFERT_PLAYER: {
      const playerToTransfert = action.value.player;
      const buyers = action.value.club;
      return {
        ...state,
        clubs: state.clubs.map((club) => {
          if(club.name === buyers.name){
            console.log(club.capital - buyers.capital, club.capital, buyers.capital,'test')
            return {
              ...club,
              capital: club.capital - playerToTransfert.value
            }
          } else return club;
        }),
        players: state.players.map((player) => {
          if(player.name === playerToTransfert.name){
            return {
              ...player,
              team: buyers.name
            }
          } else return player
        })
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;