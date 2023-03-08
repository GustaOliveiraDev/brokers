<template>
  <q-page class="flex flex-center ">
    <div>
      <q-header elevated class="q-pa-sm">
        <q-toolbar-title class="flex justify-center">
          <q-icon class="fa-solid fa-heart-pulse" color="white" width="50" />
          <div class="q-ml-md text-bold text-white">Saúde CGE</div>
        </q-toolbar-title>
      </q-header>

      <div class="">
        <q-form @submit="submit">
          <q-card class="q-pa-lg">
            <div class="col-12 text-white q-pb-lg">
              <q-input outlined unmasked-value mask="###.###.###-##" label="CPF" />
            </div>

            <div class="col-12 col-md-3">
              <q-input outlined label="Data de nascimento:" mask="##/##/####">
                <template v-slot:append>
                  <div v-if="!isView">
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date mask="DD/MM/YYYY" :readonly="isView">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Fechar" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </div>
                </template>
              </q-input>
            </div>
            <div class="flex justify-center q-pt-lg">
              <q-btn color="primary" type="submit" label="Acessar" />
            </div>
          </q-card>
        </q-form>
      </div>
    </div>
    
    <q-footer elevated>
      <q-toolbar>
        <picture class="flex justify-center">
          <img src="public/cgeTopo.png" alt="CGE" width="350" height="100" />
        </picture>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>


export default {
  name: 'IndexPage'
}
</script>

<style>

.bg-a {
  background: #004360 !important;
}

</style>