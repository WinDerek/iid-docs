<template>
  <button
    class="my-button"
    @click="handleClick"
  >
    <span>
      <slot>Button</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "my-button",
  model: {
  },
  props: {
  },
  data: function() {
    return {
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
};
</script>

<style scoped>
.my-button {
  border: #eeeeee solid 0px;
  border-radius: 4px;
  background-color: #e1e1e1;
  cursor: pointer;
  padding: 10px 20px 10px 20px;
  font-size: 0.8rem;
  user-select: none;
  outline: 0;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
  text-decoration: none;
}

.my-button:hover {
  background-color: #cbcbcb;
}

.my-button:active {
  background-color: #bbbbbb;
}
</style>
