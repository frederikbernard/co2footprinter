<template>
  <q-drawer v-model="open" show-if-above bordered>
    <q-list>
      <q-item-label header>
        Inhalte
      </q-item-label>

      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: Boolean
  },

  setup(props) {
    const open = ref(props.value)

    const essentialLinks = [
      {
        title: 'Dokumentation',
        caption: 'Projektbeschreibung (PDF)',
        icon: 'school',
        link: '#'
      },
      {
        title: 'Github',
        caption: 'github.com/40grad/co2footprinter',
        icon: 'code',
        link: 'https://github.com/quasarframework'
      },
      {
        title: 'Feedback-Forum',
        caption: 'Diskutieren & austauschen',
        icon: 'chat',
        link: '#'
      }
    ]

    return {
      open,
      essentialLinks
    }
  },

  components: {
    EssentialLink
  }
})
</script>
