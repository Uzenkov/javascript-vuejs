<template>
  <form>
    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        v-model="localUser.lastName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        v-model="localUser.firstName"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="email">Эл. почта</label>
      <input
        id="email"
        v-model="localUser.email"
        type="email"
        class="form-control"
      />
    </div>
    <div class="form-group form-check">
      <input
        id="isActive"
        v-model="localUser.isActive"
        type="checkbox"
        class="form-check-input"
      />
      <label class="form-check-label" for="isActive">Активен</label>
    </div>
    <slot />
  </form>
</template>

<script>
export default {
  name: "UserForm",

  model: {
    prop: "user",
    event: "input"
  },

  props: {
    user: {
      type: null, // так можно? или в родителе вместо user: null => user: {}?
      required: true
    }
  },

  data: () => ({
    localUser: null
  }),

  watch: {
    localUser: {
      deep: true,
      handler: "update"
    }
  },

  created() {
    this.localUser = Object.assign({}, this.user);
  },

  methods: {
    update() {
      this.$emit("input", this.localUser);
    }
  }
};
</script>
