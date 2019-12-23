<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <RouterLink class="navbar-brand" to="/">Learn Vue.js</RouterLink>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/users">
              Пользователи
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/users/create">
              Новый пользователь
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-md-12 ml-sm-auto ">
          <RouterView />
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
