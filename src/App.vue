<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <dash-tasks></dash-tasks>
    </v-main>
  </v-app>
</template>

<script>
import DashTasks from './components/DashTasks';

export default {
  name: 'App',

  components: {
    DashTasks,
  },

  data: () => ({
    //
  }),
};
</script>
