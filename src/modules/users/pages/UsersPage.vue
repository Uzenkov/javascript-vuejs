<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"
    >
      <h1 class="h2">
        Пользователи <sup>{{ users.length }}</sup>
      </h1>
    </div>
    <div v-if="!users.length" class="alert alert-warning">
      Загрузка…
    </div>
    <UserList v-else :users="users" />
  </div>
</template>

<script>
import axios from "axios";
import UserList from "@/modules/users/components/UserList.vue";

export default {
  name: "UsersPage",

  components: {
    UserList
  },

  data: () => ({
    users: []
  }),

  created() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:8000/users")
        .then(({ data }) => (this.users = data))
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
