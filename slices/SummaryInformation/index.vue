<script setup lang="ts">
import { type Content } from "@prismicio/client";

import { useInformationStore } from "@/stores/InformationStore";
import { computed } from "vue";
import moment from "moment";
import InsuredDisplay from "@/components/InsuredDisplay.vue";
import { getRequiredRules } from "@/composables/rules";
import { getAreaDescription } from "@/utils/common";
import { asHTML } from "@prismicio/client";
const store = useInformationStore();

const basicInformation = computed(() => store.insurance);

const isIndividualPlan = computed(
  () => store.insurance.typeOfInsurance === "individual"
);
const isSingleTrip = computed(
  () => store.insurance.typeOfInsuranceTrip === "single"
);

const handleNext = () => {
  if (!store.isTermAgreed) return;
  store.step = 5;
  onNext(4);
};

const handleBack = () => {
  store.step = 3;
  onPrevious(4);
};

const formatDate = (date: string) => {
  return moment(date).format("DD MMMM YYYY");
};

const formatPrice = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SummaryInformationSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <WorkFlowLayout>
    <v-container class="pa-10 w-75">
      <v-btn
        size="x-large"
        prepend-icon="arrow_back"
        variant="text"
        color="primary"
        class="text-none"
        @click="handleBack"
        >{{ slice.primary.top_left_button }}</v-btn
      >

      <div class="d-flex justify-center align-center">
        <h3 class="text-left color-blue header mb-10">
          <PrismicText :field="slice.primary.title"></PrismicText>
        </h3>
      </div>
      <v-form class="d-flex flex-column" @submit.prevent="handleNext">
        <div class="d-flex flex-column justify-center align-center ga-16">
          <div class="d-flex flex-column display-card">
            <v-btn
              variant="text"
              @click="handleBack"
              class="absolute-left-btn text-none text-blue-darken-3"
              ><v-icon color="blue-darken-3 mr-2">edit</v-icon> Edit</v-btn
            >
            <div
              class="d-flex flex-column justify-center align-left ga-10 card-detail"
            >
              <div
                v-if="isSingleTrip"
                class="d-flex flex-column justify-center align-left ga-2"
              >
                <p class="display-label">Destination</p>
                <p
                  v-for="destination in basicInformation.destinations"
                  :key="destination"
                  class="display-bold-value mb-2"
                >
                  {{ destination }}
                </p>
              </div>
              <div
                v-else
                class="d-flex flex-column justify-center align-left ga-2"
              >
                <p class="display-label">Area</p>
                <p class="display-bold-value">
                  {{ basicInformation.area }}
                </p>
                <p class="display-value">
                  {{ getAreaDescription(basicInformation.area) }}
                </p>
              </div>
              <div class="d-flex flex-column justify-center align-left ga-2">
                <p class="display-label">Duration of insurance</p>
                <p class="display-bold-value">
                  {{
                    formatDate(basicInformation?.startDate?.toString() || "") +
                    " - " +
                    formatDate(basicInformation?.endDate?.toString() || "")
                  }}
                </p>
              </div>
              <div class="d-flex flex-column justify-center align-left ga-2">
                <p class="display-label">Insurance plan</p>
                <p class="display-bold-value">
                  {{ store.selectedPlan }}
                </p>
              </div>
            </div>
          </div>
          <InsuredDisplay
            v-if="store.insureds"
            @onEdit="handleBack"
            :insuredInfo="{ ...store.insureds, email: store.insurance.email }"
            :index="1"
            :type="'applicant'"
          ></InsuredDisplay>
          <template v-if="isIndividualPlan">
            <div v-for="n in store.insurance.traveller - 1" :key="n">
              <InsuredDisplay
                v-if="store.insureds.travellers[n - 1]"
                @onEdit="handleBack"
                :insuredInfo="store.insureds.travellers[n - 1]"
                :index="n + 1"
              ></InsuredDisplay>
            </div>
          </template>
          <template v-else>
            <div v-for="n in store.insurance.adults - 1" :key="n">
              <InsuredDisplay
                v-if="store.insureds.adults[n - 1]"
                @onEdit="handleBack"
                :type="'Adult'"
                :insuredInfo="store.insureds.adults[n - 1]"
                :index="n + 1"
              ></InsuredDisplay>
            </div>
            <div v-for="n in store.insurance.children" :key="n">
              <InsuredDisplay
                v-if="store.insureds.children[n - 1]"
                @onEdit="handleBack"
                :type="'Child'"
                :insuredInfo="store.insureds.children[n - 1]"
                :index="n + store.insureds.adults.length + 1"
              ></InsuredDisplay>
            </div>
          </template>
        </div>
        <div class="mt-4 d-flex justify-center">
          <div class="d-flex flex-row justify-center align-center ga-4 w-50">
            <p class="total-price">Total premium:</p>
            <p class="total-value">
              SGD {{ formatPrice(store.selectedPlanPrice) }}
            </p>
          </div>
        </div>
        <div class="mt-4 d-flex justify-center">
          <div
            class="d-flex flex-column justify-center align-center ga-2 term-box"
          >
            <p class="term-label w-100">Acknowledgement and Confirmation</p>

            <div
              class="term-text"
              v-html="asHTML(slice.primary.confirmation_content)"
            ></div>

            <v-checkbox
              :rules="getRequiredRules('This action')"
              v-model="store.isTermAgreed"
              class="confirm-box"
            >
              <template v-slot:label>
                <p class="term-text">
                  I/We agree to the above Acknowledgement and Confirmation
                </p>
              </template>
            </v-checkbox>
          </div>
        </div>
        <div class="mt-16 d-flex justify-center">
          <div class="d-flex flex-row justify-center ga-4 w-50">
            <v-btn
              size="x-large"
              prepend-icon="arrow_back"
              variant="outlined"
              color="primary"
              class="text-none"
              @click="handleBack"
              >Back</v-btn
            >
            <v-btn
              class="text-none"
              size="x-large"
              prepend-icon="arrow_forward"
              color="primary"
              type="submit"
              >Continue</v-btn
            >
          </div>
        </div>
      </v-form>
      <!-- applicant card  -->
    </v-container>
  </WorkFlowLayout>
</template>

<style>
.a-main {
  background-color: #f4f4f6;
  min-height: 100vh;
}

.applicant-card {
  width: 580px;
  border-radius: 8px;
  gap: 40px;
  background-color: "red";
}

.card-title {
  font-family: "Noto Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 1px;
  text-align: left;
}

.card-subtitle {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.card-content {
  width: 580px;

  border-radius: 8px;
  gap: 40px;
}

.section-text {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 10px;
}

.display-label {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
}

.display-bold-value {
  font-family: "Noto Sans";
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
}

.display-value {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: capitalize;
  color: #000000;
}
.absolute-left-btn {
  position: absolute;
  align-self: flex-end;
  text-transform: capitalize;
  margin-top: 10px;
  margin-right: 10px;
}

.display-card {
  width: 580px;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px #0000001f;
  background-color: white;
}

.card-detail {
  padding: 40px 80px;
}

.total-price {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.total-value {
  font-family: "Noto Sans";
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0px;
  text-align: left;
}

.term-text {
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
}

.term-label {
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
}

.term-box {
  width: 580px;
  padding: 20px 30px;
  border-radius: 8px;
  gap: 12px;
  background-color: #0000000f;
}

.confirm-box {
  width: 520px;
  height: 64px;
  padding: 20px;
  border-radius: 8px;
  gap: 12px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
