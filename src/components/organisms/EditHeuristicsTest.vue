<template>
  <div>
    <v-tabs background-color="transparent" color="#FCA326" class="pb-0 mb-0">
      <v-tab @click="tabClicked(0)">
        Heuristics
      </v-tab>
      <v-tab @click="tabClicked(1)">
        Options
      </v-tab>
      <v-tab @click="tabClicked(2)">
        Weights
      </v-tab>
      <v-tab @click="tabClicked(3)">
        Settings
      </v-tab>
    </v-tabs>

    <div>
      <Heuristic v-if="index == 0" :heuristics="object.heuristics" />
      <OptionsTable v-if="index == 1" :options="object.options" />
      <WeightTable v-if="index == 2" :options="object.weight" />
      <Settings v-if="index == 3" :options="object.settings" />
    </div>
  </div>
</template>

<script>
import Heuristic from '@/components/molecules/HeuristicsTable'
import OptionsTable from '@/components/molecules/OptionsTable'
import Settings from '@/components/molecules/HeuristicsSenttings.vue'
import WeightTable from '@/components/molecules/WeightTable.vue'

export default {
  components: {
    Heuristic,
    OptionsTable,
    Settings,
    WeightTable,
  },
  props: {
    type: {
      type: String,
      required: true,
    },

    object: {
      type: Object,
      default: () => { },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentTest() {
      return this.$store.state.Tests.Test.testStructure
    },
  },
  methods: {
    tabClicked(index) {
      this.$emit('tabClicked', index)
    },
  },
}
</script>
