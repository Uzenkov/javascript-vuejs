<template>
  <form>
    <div class="form-group">
      <label for="accessLevel">Уровень доступа</label>
      <select
        id="accessLevel"
        v-model="localUser.accessLevel"
        class="form-control"
      >
        <option disabled value="">Выберите уровень доступа</option>
        <option v-for="(level, index) of accessLevels" :key="index">
          {{ level }}
        </option>
      </select>
    </div>
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
      type: Object,
      required: true
    }
  },

  data: () => ({
    localUser: null,
    accessLevels: ["guest", "user", "admin"]
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
