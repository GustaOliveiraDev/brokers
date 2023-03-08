<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-mainlayout">
        <q-btn 
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="flex justify-center text-white text-bold">
          Criptos
        </q-toolbar-title>

       
      </q-toolbar>
    </q-header>

    <q-drawer 
    class="bg-mainlayout"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-list  id="menu">
      <q-item-label
      header
      class="flex justify-center text-white text-bold"
        >
        Major currencies
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          class="text-white text-bold"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Bitcoin',
    icon: 'fa-brands fa-bitcoin',
     route: ''
  },
  {
    title: 'Ethereum',
    icon: 'fa-brands fa-ethereum',
  },
  
]

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>

#menu:hover{

  color: #36af00;

}

.bg-brand {
  background: #36af00 !important;
}

.bg-mainlayout {
  background: #001f32 !important;
}


</style>
