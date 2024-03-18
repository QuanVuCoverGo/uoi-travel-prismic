<template>
  <div class="groups mb-2">
    <v-item-group
      class="d-flex justify-space-between flex-row"
      v-model="typeOfInsurance"
    >
      <v-item v-slot="{ isSelected, toggle }">
        <v-card
          :class="[
            'd-flex align-center pa-4 card-no-shadow w-100 justify-center mr-4',
            isSelected ? 'blue-border bg-white' : 'bg-white',
          ]"
          height="191"
          dark
          @click="!isSelected && toggle?.()"
        >
          <div v-if="isSelected" class="check-icon-box">
            <v-img src="/checked.svg"></v-img>
          </div>
          <div class="absolute-left">
            <v-tooltip max-width="300" :text="childTooltipContent">
              <template v-slot:activator="{ props }">
                <v-icon color="grey-lighten-1" v-bind="props"
                  >info_outlined</v-icon
                >
              </template>
            </v-tooltip>
          </div>
          <div
            class="d-flex flex-column align-center ga-2 justify-center w-100"
          >
            <v-icon :color="isSelected ? 'info' : '#656565'" size="64"
              >custom:individual</v-icon
            >
            <div class="tripText">Individual</div>
          </div>
        </v-card>
      </v-item>
      <v-item v-slot="{ isSelected, toggle }">
        <v-card
          :class="[
            'd-flex align-center pa-4 card-no-shadow w-100 justify-center ml-4',
            isSelected ? 'blue-border bg-white' : 'bg-white',
          ]"
          height="191"
          dark
          @click="!isSelected && toggle?.()"
        >
          <div v-if="isSelected" class="check-icon-box">
            <v-img src="/checked.svg"></v-img>
          </div>
          <div class="absolute-left">
            <v-tooltip max-width="300" :text="familyTooltipContent">
              <template v-slot:activator="{ props }">
                <v-icon color="grey-lighten-1" v-bind="props"
                  >info_outlined</v-icon
                >
              </template>
            </v-tooltip>
          </div>
          <div
            class="d-flex flex-column align-center justify-center ga-2 w-100"
          >
            <v-icon :color="isSelected ? 'info' : '#656565'" size="64"
              >custom:family</v-icon
            >
            <div class="tripText">Family</div>
          </div>
        </v-card>
      </v-item>
    </v-item-group>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { useVModel } from "@/composables/useVModel";

const props = defineProps({
  label: { type: String, default: "Select" },
  modelValue: { type: Number },
  showLabel: { type: Boolean, default: false },
  childTooltipContent: {
    type: String,
    default:
      "For you and/or your travel companion(s) travelling together for the entire trip.",
  },
  familyTooltipContent: {
    type: String,
    default:
      "For you and/or your legal spouse and child(ren) travelling together for the entire trip.",
  },
});

const emits = defineEmits(["update:modelValue"]);

const typeOfInsurance = useVModel(props, "modelValue", emits);
</script>

<style scoped>
.tripText {
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 1px;
  text-align: center;
  color: #656565;
}

.description {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1px;
  text-align: center;
}

.v-card {
  min-width: 292px;
}

.check-icon-box {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.blue-border {
  border: 2px solid #397ded !important;
}
</style>
