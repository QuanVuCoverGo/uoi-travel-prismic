<script setup lang="ts">
import { type Content } from "@prismicio/client";

import { watch, computed, ref, onBeforeMount } from "vue";
import DestinationSelect from "@/components/DestinationSelect.vue";
import moment from "moment";
import TypeInsurance from "@/components/TypeInsurance.vue";
import InsuredCountInput from "@/components/InsuredCountInput.vue";

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

onMounted(() => {
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

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TripInformationStepSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <WorkFlowLayout :backgroundImage="slice.primary.back_ground_image.url">
    <v-form
      ref="tripForm"
      class="d-flex flex-column pt-16"
      @submit.prevent="handleNext"
    >
      <v-card
        width="800"
        class="d-flex flex-column justify-center self-center pa-10 mb-10"
      >
        <h3 class="text-center color-blue header">
          <PrismicText :field="slice.primary.firstTitle"></PrismicText>
        </h3>

        <v-container fluid>
          <VGroupItems
            :label="
              slice.primary.type_of_insurance_label ||
              'Select type of insurance'
            "
          >
            <v-item-group
              class="d-flex justify-space-between flex-row"
              v-model="tripType"
            >
              <v-item v-slot="{ isSelected, toggle }">
                <v-card
                  class="d-flex align-center pa-4 card-no-shadow w-100 justify-center mr-4"
                  :class="isSelected ? 'blue-border bg-white' : 'bg-white'"
                  min-height="191"
                  width="292"
                  dark
                  @click="!isSelected && toggle?.()"
                >
                  <div v-if="isSelected" class="check-icon-box">
                    <v-img src="/checked.svg"></v-img>
                  </div>
                  <div class="absolute-left">
                    <v-tooltip
                      max-width="300"
                      :text="slice.primary.single_trip_tooltip_content || ''"
                    >
                      <template v-slot:activator="{ props }">
                        <v-icon color="grey-lighten-1" v-bind="props"
                          >info_outlined</v-icon
                        >
                      </template>
                    </v-tooltip>
                  </div>
                  <div class="d-flex align-center flex-column ga-2">
                    <v-icon
                      :color="isSelected ? 'primary' : '#656565'"
                      size="64"
                    >
                      custom:singleTrip
                    </v-icon>
                    <div
                      :class="isSelected ? 'text-blue-darken-2' : ''"
                      class="tripText"
                    >
                      Single strip
                    </div>
                    <p class="description">
                      Single trip with start and end date
                    </p>
                  </div>
                </v-card>
              </v-item>
              <v-item v-slot="{ isSelected, toggle }">
                <v-card
                  :class="[
                    'd-flex align-center pa-4 card-no-shadow w-100 justify-center ml-4',
                    isSelected ? 'blue-border bg-white' : 'bg-white',
                  ]"
                  min-height="191"
                  dark
                  @click="!isSelected && toggle?.()"
                >
                  <div v-if="isSelected" class="check-icon-box">
                    <v-img src="/checked.svg"></v-img>
                  </div>
                  <div class="absolute-left">
                    <v-tooltip
                      max-width="300"
                      :text="slice.primary.multi_trip_tooltip_content || ''"
                    >
                      <template v-slot:activator="{ props }">
                        <v-icon color="grey-lighten-1" v-bind="props"
                          >info_outlined</v-icon
                        >
                      </template>
                    </v-tooltip>
                  </div>

                  <div
                    class="d-flex flex-column align-center justify-center ga-2"
                  >
                    <v-icon
                      :color="isSelected ? 'primary' : '#656565'"
                      size="64"
                      >custom:annualMultitrip</v-icon
                    >
                    <div
                      :class="isSelected ? 'text-blue-darken-2' : ''"
                      class="tripText"
                    >
                      Annual multi strip
                    </div>
                    <p class="description">
                      Single trip with start and end date
                    </p>
                  </div>
                </v-card>
              </v-item>
            </v-item-group>
          </VGroupItems>
          <!-- destination  -->
          <VGroupItems
            v-if="store.insurance.typeOfInsuranceTrip === 'single'"
            :label="slice.primary.destination_label || 'Where will you travel?'"
          >
            <DestinationSelect
              :rules="getRequiredRules('Destination')"
              v-model="store.insurance.destinations"
            />
          </VGroupItems>
          <VGroupItems
            v-else
            :label="slice.primary.area_label || 'Select area'"
          >
            <AreaSelect
              :rules="getRequiredRules('Area')"
              v-model="store.insurance.area"
            />
          </VGroupItems>
          <VGroupItems
            :label="
              store.insurance.typeOfInsuranceTrip === 'single'
                ? slice.primary.duration_label || 'When will you travel?'
                : slice.primary.multi_duration_label ||
                  'When will your insurance start?'
            "
          >
            <v-row class="w-100 justify-space-between ma-0 margin-row">
              <v-col class="pl-0">
                <date-picker
                  label="Start Date"
                  v-model="store.insurance.startDate"
                  color="primary"
                  :minDate="minDate"
                  :rules="getRequiredRules('Start date')"
                />
              </v-col>
              <v-col class="pr-0">
                <date-picker
                  :disabled="
                    store.insurance.typeOfInsuranceTrip === 'annualMulti'
                  "
                  label="End Date"
                  v-model="store.insurance.endDate"
                  color="primary"
                  :maxDate="maxDate"
                  :minDate="minEndDate"
                  :rules="getRequiredRules('End Date')"
              /></v-col>
            </v-row>
            <v-row
              v-if="
                Boolean(store.insurance.startDate) &&
                Boolean(store.insurance.endDate)
              "
              class="bg-grey-lighten-4 w-auto pa-2 fit-content ma-0"
            >
              <v-icon size="small"> check_circle_outline </v-icon>
              <p
                v-if="store.insurance.typeOfInsuranceTrip === 'single'"
                class="insuredDays ml-2"
              >
                You will be insured for
                <span class="font-weight-bold"
                  >{{ store.tripDuration }} days</span
                >
              </p>
              <p v-else class="insuredDays ml-2">
                Includes unlimited trips in 365 days not longer than 90 days
              </p>
            </v-row>
          </VGroupItems>

          <!-- end of destination  -->
        </v-container>
      </v-card>
      <v-card
        width="800"
        class="d-flex flex-column justify-center self-center pa-10 mb-10"
      >
        <h3 class="text-center color-blue header">
          <PrismicText :field="slice.primary.secondTitle"></PrismicText>
        </h3>
        <v-container fluid>
          <VGroupItems
            :label="
              slice.primary.type_of_insured_label || 'Select type of insurance'
            "
          >
            <TypeInsurance
              :childTooltipContent="slice.primary.individual_tooltip_content"
              :familyTooltipContent="slice.primary.family_tooltip_content"
              v-model="insuredsType"
            />
          </VGroupItems>
          <InsuredCountInput
            v-if="store.insurance.typeOfInsurance === 'individual'"
            label="Traveller"
            v-model="store.insurance.traveller"
          />
          <template v-if="store.insurance.typeOfInsurance === 'family'">
            <InsuredCountInput
              label="Adult(s)"
              v-model="store.insurance.adults"
              :max="2"
            />
            <InsuredCountInput
              label="Child(ren)"
              :tooltipContent="slice.primary.children_tooltip_content"
              v-model="store.insurance.children"
              :max="7"
            />
          </template>
          <VGroupItems label="Email address">
            <v-text-field
              type="email"
              :rules="emailRules"
              v-model="store.insurance.email"
              variant="outlined"
            />
          </VGroupItems>
        </v-container>
      </v-card>

      <v-btn
        variant="elevated"
        size="x-large"
        class="mt-2 align-self-center bg-blue-darken-2 text-none"
        type="submit"
      >
        <template v-slot:prepend>
          <v-icon>arrow_forward</v-icon>
        </template>
        {{ slice.primary.bottom_button_text || "Continue" }}</v-btn
      >
    </v-form>
  </WorkFlowLayout>
</template>

<style scoped>
.blue-border {
  border: 2px solid #397ded !important;
}

.margin-row {
  margin: 0;
  margin-bottom: -20px !important;
}

.check-icon-box {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
