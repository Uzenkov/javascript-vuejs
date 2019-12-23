<template>
  <div>
    <RowsPerPage v-model.number="rowsPerPage" />
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Эл. почта</th>
          <th>Уровень доступа</th>
          <th>Активен</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of filteredRows" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.isActive }}</td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-primary"
              @click="showUser(user.id)"
            >
              Смотреть
            </button>
            <button
              type="button"
              class="btn btn-sm btn-warning"
              @click="editUser(user.id)"
            >
              Редактировать
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <RowPaginate
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="rowsPerPage"
    />
  </div>
</template>

<script>
export default {
  name: "UserList",

  components: {
    RowsPerPage: () => import("@/modules/global/components/RowsPerPage.vue"),
    RowPaginate: () => import("@/modules/global/components/RowPaginate.vue")
  },

  props: {
    users: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    currentPage: 1,
    rowsPerPage: 5
  }),

  computed: {
    totalRows() {
      return this.users.length;
    },
    filteredRows() {
      let slice = (this.currentPage - 1) * this.rowsPerPage;
      return this.users.slice(slice, slice + this.rowsPerPage);
    }
  },

  watch: {
    rowsPerPage() {
      this.currentPage = 1;
    }
  },

  methods: {
    showUser(id) {
      this.$router.push(`/users/${id}`);
    },
    editUser(id) {
      this.$router.push(`/users/${id}/edit`);
    }
  }
};
</script>
