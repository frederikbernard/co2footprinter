<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        <q-avatar>
          <img src="../assets/logo.png" alt="Logo" />
        </q-avatar>
        CO2 Footprinter App
      </q-toolbar-title>

      <div class="nav-links">
        <router-link to="/" class="text-weight-medium" style="color: white">Startseite</router-link>
        <router-link to="/ueberuns" class="text-weight-medium" style="color: white">Über uns</router-link>
        <router-link to="/kontakt" class="text-weight-medium" style="color: white">Kontakt</router-link>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleLeftDrawer() {
      this.$emit('toggle-left-drawer')
    }
  }
}
</script>

<style>
.nav-links > * {
  margin-right: 20px;
}
</style>
