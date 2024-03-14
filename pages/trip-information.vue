<template></template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onBeforeMount } from "vue";
import Header from "../components/Header.vue";
import DestinationSelect from "@/components/DestinationSelect.vue";
import moment from "moment";
import TypeInsurance from "@/components/TypeInsurance.vue";
import InsuredCountInput from "@/components/InsuredCountInput.vue";
import VTextInput from "@/components/VTextInput.vue";
import {
  useInformationStore,
  TripType,
  InsuredType,
} from "@/stores/InformationStore";
import AreaSelect from "@/components/AreaSelect.vue";
import { set } from "lodash";
import { emailRules, getRequiredRules } from "@/composables/rules";

const store = useInformationStore();
const tripForm = ref();

const tripType = ref();
const insuredsType = ref();

const minDate = moment().toDate();
const minEndDate = computed(() =>
  moment(store.insurance.startDate).add(1, "day").toDate()
);
const maxDate = computed(() =>
  moment(store.insurance.startDate).add(185, "day").toDate()
);

const handleNext = async () => {
  const { valid } = await tripForm.value?.validate();
  if (!valid) return;
  store.insurance = { ...store.insurance };
  store.step = 2;
  await onNext(1);
};

watch(
  () => store.insurance.startDate,
  (v) => {
    if (store.insurance.typeOfInsuranceTrip === "annualMulti")
      store.insurance.endDate = moment(v).add(365, "day").toDate();
    if (store.insurance.endDate && store.tripDuration > 0) return;
    if (v && store.insurance.typeOfInsuranceTrip === "single") {
      store.insurance.endDate = moment(v).add(7, "day").toDate();
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  () => tripType.value,
  (v) => {
    if (v === undefined || v === null)
      set(store.insurance, "typeOfInsuranceTrip", undefined);
    set(store.insurance, "typeOfInsuranceTrip", TripType[v]);
  }
);

watch(
  () => insuredsType.value,
  (v) => {
    if (v === undefined || v === null)
      set(store.insurance, "typeOfInsurance", undefined);
    else set(store.insurance, "typeOfInsurance", InsuredType[v]);
  }
);

onBeforeMount(() => {
  if (store.insurance?.typeOfInsuranceTrip !== undefined) {
    if (store.insurance?.typeOfInsuranceTrip === "single") tripType.value = 0;
    else tripType.value = 1;
  }
  if (store.insurance?.typeOfInsurance !== undefined) {
    {
      if (store.insurance?.typeOfInsurance === "individual")
        insuredsType.value = 0;
      else insuredsType.value = 1;
    }
  }
});
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
      crossorigin: "",
    },
  ],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.blue-border {
  border: 2px solid #397ded !important;
}
</style>
