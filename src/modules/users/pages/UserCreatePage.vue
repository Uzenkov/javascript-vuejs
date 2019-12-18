<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3"
    >
      <h1 class="h2">
        Добавить пользователя
      </h1>
    </div>
    <user-form v-model="user">
      <button type="submit" class="btn btn-primary" @click.prevent="createUser">
        Добавить
      </button>
    </user-form>
  </div>
</template>

<script>
import axios from "axios";
import UserForm from "@/modules/users/components/UserForm.vue";

export default {
  name: "UserCreatePage",

  components: {
    UserForm
  },

  data: () => ({
    user: {}
  }),

  methods: {
    createUser() {
      axios
        .post("http://localhost:8000/users/", this.user)
        .then(() => this.$router.push("/users"))
        .catch(error => {
          throw error;
        });
    }
  }
};
</script>
