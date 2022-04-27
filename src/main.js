import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

store.subscribe( (mutation, state) => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    localStorage.setItem('selectedFilter', JSON.stringify(state.selectedFilter));
})

const app = createApp(App)
app.use(store)
    .use(router)
    .mount('#app')
