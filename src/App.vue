<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Learn Vue.js</router-link>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" :class="{ active: $route.path == '/users' }">
            <router-link class="nav-link" to="/users">
              Пользователи
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto ">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
