import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
	switch(action.type) {
		case types.CREATE_COURSE:
			return [...state,
				Object.assign({}, action.course)
				// has to be a deep copy of action.course, otherwise action.course is modified directly
				// by CoursesPage component input
			];
		default:
			return state;
	}
}
