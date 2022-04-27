<template>
    <div :class="[task.done ? 'completed' : '']">
        <div class="content" @click="toggleTask">
            {{ task.content }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        toggleTask() {
            this.$store.commit('toggleTask', this.task);
        },
    }
}
</script>

<style>
.content {
    padding: 5px;
    border-bottom: 1px solid #808080;
}

.content:hover {
    cursor: pointer;
}

.completed {
    color: #808080;
    text-decoration: line-through;
}
</style>