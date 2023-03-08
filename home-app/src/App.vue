<template>
  <v-app>
    <v-app-bar title="Module Federation with Vite demo">Counter {{ store.counter }}</v-app-bar>
    <v-navigation-drawer permanent>
      <v-list density="compact" nav>
        <v-list-item title="Remote app green" to="remote-app-green">
          <template v-slot:title="{ title }">
            <div class="nav-item-green" v-html="title"></div>
          </template>
        </v-list-item>
        <v-list-item title="Remote app red" to="remote-app-red">
          <template v-slot:title="{ title }">
            <div class="nav-item-red" v-html="title"></div>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useAppStore } from './store/app';

const store = useAppStore();
</script>

<style>
  .nav-item-red {
    color: red;
  }

  .nav-item-green {
    color: green;
  }
</style>
