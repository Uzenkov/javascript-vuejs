<template>
  <nav>
    <ul class="pagination">
      <li
        v-for="page of maxPages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <button class="page-link" role="button" @click="select(page)">
          {{ page }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "RowPaginate",

  model: {
    prop: "currentPage"
  },

  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalRows: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },

  computed: {
    maxPages() {
      return Math.ceil(this.totalRows / this.perPage);
    }
  },

  methods: {
    select(value) {
      this.$emit("input", value);
    }
  }
};
</script>
