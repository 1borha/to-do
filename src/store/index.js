import { createStore } from 'vuex'

export default createStore({
	state: {
		tasks: [],
		selectedFilter: '',
	},
	
	getters: {
		leftTasks (state) {
			return state.tasks.filter(task => task.done === false).length
		},

		completedTasks (state) {
			return state.tasks.filter(task => task.done === true).length
		},

		filterTasks (state) {
			return state.tasks.filter(task => task.done !== state.selectedFilter)
		}
	},

	mutations: {
		addTask (state, task) {
			if (task) {
				state.tasks = [{ content: task, done: false }, ...state.tasks]
			}
		},

		toggleTask (state, task) {
			task.done = !task.done
		},

		clearCompletedTasks (state) {
			state.tasks = state.tasks.filter(task => task.done === false)
		},

		setSelectedFilter (state, selectedFilter) {
			state.selectedFilter = selectedFilter
		},

		initialiseVars (state) {
			if (localStorage.getItem('tasks')) {
				state.tasks = JSON.parse(localStorage.tasks)
			}

			if (localStorage.getItem('selectedFilter')) {
				state.selectedFilter = JSON.parse(localStorage.selectedFilter)
			}
		}
	}
})
