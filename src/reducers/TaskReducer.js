import { getAllTasks } from "../data/data";

const alltasks = getAllTasks();

const initialState = {
	tasks: [...alltasks],
	store: [...alltasks],
};

const taskReducer = (state, action) => {
	switch (action.type) {
		case "ADD_EDIT_TASK":
			if (action.isTaskAdd) {
				return {
					tasks: [...state.tasks, action.payload],
					store: [...state.store, action.payload],
				};
			} else {
				const newTasks = state.tasks.map((tsk) => {
					if (tsk.id === action.payload.id) {
						return action.payload;
					}
					return tsk;
				});

				return {
					tasks: [...newTasks],
					store: [...newTasks],
				};
			}

		case "REMOVE_TASK": {
			const updatedTasks = state.tasks.filter(
				(tsk) => tsk.id != action.payload.id
			);

			return {
				...state,
				tasks: [...updatedTasks],
				store: [...updatedTasks],
			};
		}

		case "SEARCH_TASK": {
			const newTasks = state.store.filter((task) => {
				return task.title
					.toLowerCase()
					.includes(action.payload.text.toLowerCase());
			});

			return {
				...state,
				tasks: newTasks,
			};
		}

		case "FAVORITE_TASK": {
			const toggledTasks = state.tasks.map((t) => {
				if (t.id === action.payload.taskId) {
					return {
						...t,
						isFavorite: !t.isFavorite,
					};
				} else return { ...t };
			});

			return {
				...state,
				tasks: toggledTasks,
				store: toggledTasks,
			};
		}

		case "DELETE_ALL":
			if (action.payload.newTasks.length === 0) {
				return {
					...state,
					tasks: [],
					store: [],
				};
			}
			break;

		default:
			return state;
	}
};

export { initialState, taskReducer };
