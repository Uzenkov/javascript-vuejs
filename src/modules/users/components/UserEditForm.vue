<template>
  <form>
    <div class="form-group">
      <label for="lastName">Фамилия</label>
      <input
        id="lastName"
        type="text"
        class="form-control"
        :value="user.lastName"
      />
    </div>
    <div class="form-group">
      <label for="firstName">Имя</label>
      <input
        id="firstName"
        type="text"
        class="form-control"
        :value="user.firstName"
      />
    </div>
    <div class="form-group">
      <label for="email">Эл. почта</label>
      <input id="email" type="email" class="form-control" :value="user.email" />
    </div>
    <div class="form-group form-check">
      <input
        id="isActive"
        type="checkbox"
        class="form-check-input"
        :checked="user.isActive"
      />
      <label class="form-check-label" for="isActive">Активен</label>
    </div>
    <button type="submit" class="btn btn-primary">Обновить</button>
  </form>
</template>

<script>
export default {
  name: "UserEditForm",

  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
