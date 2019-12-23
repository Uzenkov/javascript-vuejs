<template>
  <div class="form-group">
    <label for="rowsPerPage">{{ title }}</label>
    <select
      id="rowsPerPage"
      :value="rowsPerPage"
      class="form-control"
      @change="changed($event.target.value)"
    >
      <option v-for="item in list" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "RowsPerPage",

  model: {
    prop: "rowsPerPage"
  },

  props: {
    title: {
      type: String,
      default: "Записей на странице"
    },
    rowsPerPage: {
      type: Number,
      required: true
    },
    list: {
      type: Array,
      default: () => [1, 2, 5, 10, 15]
    }
  },

  methods: {
    changed(value) {
      this.$emit("input", value);
    }
  }
};
</script>
