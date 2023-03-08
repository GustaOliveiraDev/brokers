<template>
  <q-layout view="hHh Lpr lff"  style="height: 300px" >
    <q-header elevated>
      <q-toolbar class="bg-cinza text-white">
        <q-btn 
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="flex justify-center">
          Criptos
        </q-toolbar-title>

       
      </q-toolbar>
    </q-header>

    <q-drawer
    class="bg-cinza"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
        class="text-white"
          header
        >
        Major currencies
        </q-item-label>

        <EssentialLink
        class="text-white"
          v-for="link in essentialLinks"
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

.bg-cinza {
  background: #434242 !important;
}

.text-verde {
  color: #16FF00 !important;
}
</style>
