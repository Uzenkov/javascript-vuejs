<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"
    >
      <h1 class="h2">
        Редактирование пользователя
      </h1>
    </div>
    <div v-if="!user" class="alert alert-warning">
      Загрузка…
    </div>
    <div v-else>
      <user-edit-form :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserEditForm from "../components/UserEditForm";

export default {
  name: "UserEditPage",

  components: {
    UserEditForm
  },

  data: () => ({
    user: null
  }),

  created() {
    setTimeout(() => this.getUser(this.$route.params.id), 500);
  },

  methods: {
    getUser(id) {
      axios
        .get("http://localhost:8000/users/" + id)
        .then(({ data }) => (this.user = data))
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
