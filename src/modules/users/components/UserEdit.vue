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
      {{ user }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserEdit",

  data: () => ({
    user: null
  }),

  methods: {
    getUser(id) {
      axios
        .get("http://localhost:8000/users/" + id)
        .then(({ data }) => (this.user = data))
        .catch(error => {
          throw error;
        });
    }
  },

  created() {
    setInterval(() => this.getUser(this.$route.params.id), 1000);
  }
};
</script>
