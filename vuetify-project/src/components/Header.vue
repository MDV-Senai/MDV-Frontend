<template>
  <v-app-bar :elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/home">Home</RouterLink>
  </v-app-bar>
</template>

<script>
</script>