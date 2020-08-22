<template>
  <v-app>
    <app-nav />
    <app-toolbar />
    <app-main />
    <app-footer />
  </v-app>
</template>

<script>
import Footer from "./components/template/Footer";
import Nav from "./components/template/Nav";
import Toolbar from "./components/template/Toolbar";
import Main from "./components/template/MainSection";

export default {
  components: {
    "app-footer": Footer,
    "app-nav": Nav,
    "app-toolbar": Toolbar,
    "app-main": Main,
  },
};
</script>
