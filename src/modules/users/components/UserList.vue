<template>
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
      <tr v-for="user of users" :key="user.id">
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
    <tfoot>
      <tr>
        <td colspan="7">Всего пользователей: {{ users.length }}</td>
      </tr>
    </tfoot>
  </table>
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

  methods: {
    editUser(id) {
      this.$router.push(`/users/${id}`);
    }
  }
};
</script>
