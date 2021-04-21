<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link :to="rotaH">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaF">
          <v-list-item-content>
            <v-list-item-title>Kids</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaR">
          <v-list-item-content>
            <v-list-item-title>Pais e Responsáveis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaB">
          <v-list-item-content>
            <v-list-item-title>O Que Dizem os Especialistas?</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="rotaE">
          <v-list-item-content>
            <v-list-item-title>Informações Complementares</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Tech Educa</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app class="justify-center">
      <span>&copy; 2021 | Tech Educa</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    rotaH: "/",
    rotaR: "/paiseresponsaveis",
    rotaF: "/kids",
    rotaB: "/especialistas",
    rotaE: "/infocomplementar",
  }),
  created() {
    this.$vuetify.theme.dark = false;
  },
};
</script>