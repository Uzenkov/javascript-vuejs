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
    <user-form v-else v-model="user">
      <button type="submit" class="btn btn-primary" @click.prevent="updateUser">
        Обновить
      </button>
      <button type="button" class="btn btn-danger" @click.prevent="deleteUser">
        Удалить
      </button>
    </user-form>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/modules/users/components/UserForm.vue";

export default {
  name: "UserEditPage",

  components: {
    UserForm
  },

  data: () => ({
    user: null
  }),

  computed: {
    userID: vm => vm.$route.params.id
  },

  created() {
    this.getUser();
  },

  methods: {
    getUser() {
      axios
        .get("http://localhost:8000/users/" + this.userID)
        .then(({ data }) => (this.user = data))
        .catch(error => {
          throw error;
        });
    },
    updateUser() {
      axios
        .patch("http://localhost:8000/users/" + this.userID, this.user)
        .then(() => this.$router.push("/users"))
        .catch(error => {
          throw error;
        });
    },
    deleteUser() {
      axios
        .delete("http://localhost:8000/users/" + this.userID)
        .then(() => this.$router.push("/users"))
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
