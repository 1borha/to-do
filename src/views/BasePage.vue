<template>
    <div class="todo">
        <div class="container">
            <header class="todo__header">
                <input 
                    class="todo__input" 
                    type="text"
                    v-model="task"
                    @keypress.enter="addTask(this.task)"
                    placeholder="What needs to be done?">
            </header>

            <main class="todo__main">
                <div class="todo__task">
                    <Task 
                        v-for="(task, i) in filterTasks"
                        :key="i"
                        :task="task" />
                </div>
            </main>

            <footer class="todo__footer">
                <div class="todo__left">
                    {{leftTasks}} item left
                </div>

                <div class="todo__radio__toolbar">
                    <input type="radio"
                        name="filter"
                        id="all"
                        v-model='selectedFilter'
                        :value="''"
                        @change="setSelectedFilter(this.selectedFilter)">
                    <label :class="[($store.state.selectedFilter === '') ? 'active' : '']" for="all">All</label>

                    <input type="radio"
                        name="filter"
                        id="active"
                        v-model='selectedFilter'
                        :value="true"
                        @change="setSelectedFilter(this.selectedFilter)">
                    <label :class="[($store.state.selectedFilter === true) ? 'active' : '']" for="active">Active</label>

                    <input type="radio"
                        name="filter"
                        id="completed"
                        v-model='selectedFilter'
                        :value="false"
                        @change="setSelectedFilter(this.selectedFilter)">
                    <label :class="[($store.state.selectedFilter === false) ? 'active' : '']" for="completed">Completed</label>
                </div>

                <div class="todo__clear">
                    <div style="cursor: pointer" v-show="completedTasks != 0" @click="clearCompletedTasks">Clear completed</div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import Task from '@/components/MyTask.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
    data () {
        return {
            task: '',
            selectedFilter: null
        }
    },
    components: {
        Task
    },
    methods: {
        ...mapMutations([
            'addTask',
            'setSelectedFilter',
            'clearCompletedTasks',
            'initialiseVars'
        ]),
    },
    computed: {
        ...mapGetters([
            'leftTasks',
            'completedTasks',
            'filterTasks'
        ])
    },
    beforeMount () {
        this.initialiseVars()
    },
}
</script>

<style>
@import url('../assets/styles/reset.css');

.todo {
    margin-top: 20px;
    width: 100%;
    display: flex;
	flex-direction: column;
	align-items: center;
    font-family: Roboto;
    font-size: 24px;
    white-space: nowrap;
}

.container {
    width: 1000px;
    border: 1px solid #808080;
}

.todo__header {
    width: 100%;
    border-bottom: 1px solid #808080;
}

.todo__input {
    width: calc(100% - 30px);
    padding: 10px 15px;
    
    font-style: italic;
    border: none;
}

.todo__main {
    width: 100%;
}

.todo__footer {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: horizontal;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    color: #404040;
}

.todo__left {
    padding: 15px;
    width: 33%;
}

.todo__radio__toolbar {
    padding: 15px;
    width: 33%;
}

.todo__radio__toolbar input[type="radio"] {
    display:none;
}

.todo__radio__toolbar label {
    margin: 0 10px;
    padding: 3px;
}

.todo__radio__toolbar label.active {
    border: 1px solid #808080;
}

.todo__radio__toolbar label:hover {
    cursor: pointer;
}

.todo__clear {
    padding: 15px;
    width: 33%;
}

</style>