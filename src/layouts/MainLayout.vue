<template>
  <q-layout view="lHh Lpr lFf">
    <Header @toggle-left-drawer="toggleLeftDrawer" />
    <Drawer v-model="leftDrawerOpen" />
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Drawer from 'components/Drawer.vue'
import { defineComponent, ref } from 'vue'
import Footer from 'components/Footer.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header,
    Drawer,
    Footer
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const route = useRoute()

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
})
</script>


