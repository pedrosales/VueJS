<template>
  <v-navigation-drawer app>
    <app-toolbar />
    <v-divider></v-divider>
    <app-menu />
  </v-navigation-drawer>
</template>

<script>
import Toolbar from "./NavToolbar";
import Menu from "./Menu";

export default {
  components: {
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>

<style>
</style>