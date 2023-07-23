<template>
  <div class="state-info">
    <span class="'state=name'">{{ state.name }}</span>

    <div>
      <input
        class="visit-state"
        type="checkbox"
        v-model="visited"
        v-on:change="visitedChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StateDetail',
  emits: ['update-visited'],
  props: {
    state: Object, // Don't modify props (original data being sent from parent)
  },

  data() {
    return {
      visited: this.state.visited, // Ok to modify data copy
    };
  },

  methods: {
    // this child component method allows us to listen to clients interaction with state visited or not, and then emits a message if that happens to the parent - state list and state list to app.vue
    visitedChange() {
      this.$emit('update-visited', this.state.name, this.visited);
    },
  },
};
</script>

<style scoped>
.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px gainsboro solid;
  border-radius: 0.3rem;
  background-color: ghostwhite;
}

.visit-state {
  margin: 1rem;
  /* Independent style */
  text-align: center;
}
</style>
