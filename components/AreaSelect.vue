<template>
  <v-select
    v-model="area"
    :items="AREAS_LIST"
    color="blue-grey-lighten-2"
    item-title="name"
    item-value="value"
    variant="outlined"
    label=""
    :placeholder="placeholder"
    v-bind="props"
  >
    <template v-slot:item="{ props, item }">
      <v-list-item
        v-bind="props"
        :title="item.raw.name"
        :subtitle="item.raw.description"
        class="py-3"
      >
      </v-list-item>
    </template>
  </v-select>
</template>
<script setup>
import { useVModel } from "@/composables/useVModel";
import { defineProps, defineEmits } from "vue";
import { AREAS_LIST } from "@/constants";

const props = defineProps({
  placeholder: { type: String, default: "Area" },
  modelValue: { type: String },
  showLabel: { type: Boolean, default: false },
});

const emits = defineEmits(["update:modelValue"]);

const area = useVModel(props, "modelValue", emits);
</script>
<style></style>
