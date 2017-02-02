import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
	{
	    name: "David MacKintosh",
	    score: 30,
	    id: 1,
	},
	{
	    name: "Chen Zhang",
	    score: 31,
	    id: 2,
	},
	{
	    name: "Nise Gunter",
	    score: 29,
	    id: 3,
	},
	{
	    name: "Lucy Lin",
	    score: 27,
		id: 4,
	}
];

// reducers should be pure functions, which do not mutate the state
export default function Player(state=initialState, action) {
	switch(action.type) {
		case PlayerActionTypes.ADD_PLAYER:
		return [
			// items already in state will be included in new state
			...state,
			{
				name: action.name,
				score: 0
			}
		];

		case PlayerActionTypes.REMOVE_PLAYER:
		return [
			// remove all objects from original array except 
			// player to be deleted, then combine result
			...state.slice(0, action.index),
			...state.slice(action.index + 1)
		];

		case PlayerActionTypes.UPDATE_PLAYER_SCORE:
			return state.map((player, index) => {
				if(index === action.index) {
					return {
						...player,
						score: player.score + action.score
					};
				}
			return player;
		});

		default:
			return state;
	}
}