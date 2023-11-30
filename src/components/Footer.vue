<template>
  <q-footer class="q-pt-md q-pb-md text-h6">
    <div class="row justify-between">
      <div class="col" style="padding-left: 20px">
        <span>&copy; {{ currentYear }} Frederik Bernard / IUBH | Alle Rechte vorbehalten.</span>
      </div>
      <div class="col-auto" style="padding-right: 20px">
        <router-link to="/datenschutz" class="text-weight-medium" style="color: white">Datenschutz</router-link>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
})
</script>
