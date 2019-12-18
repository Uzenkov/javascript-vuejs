<template>
  <div>
    <div class="form-group">
      <label for="usersPerPage">Пользователей на странице</label>
      <select id="usersPerPage" v-model="usersPerPage" class="form-control">
        <option :value="5">5</option>
        <option :value="10">10</option>
        <option :value="15">15</option>
        <option :value="20">20</option>
      </select>
    </div>
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
        <tr v-for="user of filteredUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.accessLevel }}</td>
          <td>{{ user.isActive }}</td>
          <td>
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

    <nav>
      <ul class="pagination">
        <li
          v-for="(paination, index) of totalPages"
          :key="index"
          class="page-item"
          :class="{ active: currentPage === index }"
        >
          <button class="page-link" role="button" @click="currentPage = index">
            {{ index + 1 }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "UserList",

  props: {
    users: {
      type: Array,
      required: true
    }
  },

  data: () => ({
    currentPage: 0,
    usersPerPage: 5
  }),

  computed: {
    totalPages() {
      return Math.floor(this.users.length / this.usersPerPage) + 1;
    },
    filteredUsers() {
      let slice = this.currentPage * this.usersPerPage;
      console.log(slice);
      return this.users.slice(slice, slice + this.usersPerPage);
    }
  },

  methods: {
    editUser(id) {
      this.$router.push(`/users/${id}/edit`);
    }
  }
};
</script>
