<template>
  <form>
    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        v-model="user.lastName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model="user.firstName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="email">Эл. почта</label>
      <input
        id="email"
        v-model="user.email"
        type="email"
        class="form-control"
      />
    </div>
    <div class="form-group form-check">
      <input
        id="isActive"
        v-model="user.isActive"
        type="checkbox"
        class="form-check-input"
      />
      <label class="form-check-label" for="isActive">Активен</label>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="updateUser">
      Обновить
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "UserEditForm",

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    updateUser() {
      axios
        .patch("http://localhost:8000/users/" + this.user.id, this.user)
        .then(() => {
          alert("Обновлено");
        })
        .catch(() => {
          alert("Ошибка обновления");
        });
    }
  }
};
</script>
