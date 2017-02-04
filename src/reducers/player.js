import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
	players: [
		{
			name: "David MacKintosh",
		  	score: 31,
			created: '31/1/2017',
			updated: '2/2/2017'
		},
		{
			name: "Chen Zhang",
			score: 20,
			created: '30/1/2017',
			updated: '2/2/2017'
		},
		{
			name: "Nise Gunter",
			score: 50,
			created: '25/1/2017',
			updated: '31/1/2017'
		},
		{
			name: "Lucy Lin",
			score: 50,
			created: '31/1/2017',
			updated: '2/2/2017'
		}
	],
	selectedPlayerIndex: -1
}

// reducers should be pure functions, which do not mutate the state
export default function Player(state=initialState, action) {

	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth()+1;
	let year = date.getFullYear();

	switch(action.type) {
		case PlayerActionTypes.ADD_PLAYER:
			const addPlayerList = [...state.players, {
				name: action.name,
				score: 0,
				created: `${month}/${day}/${year}`
			}];
			return {
				state,
				players: addPlayerList
			};

		case PlayerActionTypes.REMOVE_PLAYER:
			const removePlayerList = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			];
			return {
				...state,
				players: removePlayerList
			};

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			const updatePlayerList = state.players.map((player, index) => {
				if(index === action.index) {
					return {
						...player,
						score: player.score + action.score,
						updated: `${month}/${day}/${year}`
					};
				}
				return player;
			});
			return {
				...state,
				players: updatePlayerList
			};

		case PlayerActionTypes.SELECT_PLAYER:
		return {
			...state,
			selectedPlayerIndex: action.index
		};

		default:
			return state;
	}
}