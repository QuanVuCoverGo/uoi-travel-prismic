<script setup lang="ts">
import { type Content } from "@prismicio/client";
import {
  cardNumberRules,
  getRequiredRules,
  validThruRules,
} from "@/composables/rules";
import { useInformationStore } from "@/stores/InformationStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const store = useInformationStore();

const router = useRouter();

const paymentForm = ref();

const handleUpdateCardNumber = (v: any) => {
  // Card number without dash (-)
  const realNumber = v?.replace(/-/gi, "");

  // Generate dashed number
  const dashedNumber = realNumber.match(/.{1,4}/g);

  // Replace the dashed number with the real one
  store.payment.cardNumber = dashedNumber?.join("-");
};

const handleNext = async () => {
  const { valid } = await paymentForm.value?.validate();
  if (!valid) return;
  navigateTo(`/workflows/issue-finish`);
};

const handleBack = async () => {
  store.step = 4;
  onPrevious(5);
};

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.PaymentStepSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <WorkFlowLayout>
    <v-container class="pa-10 w-75 h-100">
      <v-btn
        size="x-large"
        prepend-icon="arrow_back"
        variant="text"
        color="primary"
        class="text-none"
        @click="handleBack"
        >{{ slice.primary.top_left_button_text }}</v-btn
      >
      <div class="d-flex justify-center align-center">
        <h3 class="text-left color-blue header mb-10">
          <PrismicText :field="slice.primary.title"></PrismicText>
        </h3>
      </div>
      <v-form
        ref="paymentForm"
        class="d-flex flex-column justify-center align-center"
        @submit.prevent="handleNext"
      >
        <v-card class="payment-card">
          <template v-slot:subtitle>
            <p class="card-subtitle text-left mb-4">
              Enter your credit card details
            </p>
          </template>
          <template v-slot:text>
            <v-text-field
              variant="outlined"
              label="Card number"
              class="mb-2"
              :rules="cardNumberRules"
              :modelValue="store.payment.cardNumber"
              @update:modelValue="handleUpdateCardNumber"
            >
            </v-text-field>
            <v-text-field
              class="mb-2"
              variant="outlined"
              label="Name on card"
              :rules="getRequiredRules('Card name')"
              v-model="store.payment.cardName"
            >
            </v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  variant="outlined"
                  placeholder="MM/YYYY"
                  class="mb-2"
                  :rules="validThruRules"
                  v-model="store.payment.validDate"
                />
              </v-col>
              <v-col>
                <v-text-field
                  variant="outlined"
                  placeholder="CVV/CVC"
                  class="mb-2"
                  :rules="getRequiredRules('This field')"
                  v-model="store.payment.cvvOrCvc"
                />
              </v-col>
            </v-row>
            <div class="d-flex justify-space-aound">
              <v-img width="61" height="39" src="/visa.png" />
              <v-img width="61" height="39" src="/master.png" />
              <v-img width="61" height="39" src="/ae.png" />
            </div>
          </template>
        </v-card>
        <div class="mt-16 d-flex justify-center">
          <div class="d-flex flex-row justify-center ga-4 w-50">
            <v-btn
              size="x-large"
              prepend-icon="arrow_back"
              variant="outlined"
              color="primary"
              class="text-none"
              @click="store.step = 4"
              >{{ slice.primary.back_button_text }}</v-btn
            >
            <v-btn
              class="text-none"
              size="x-large"
              prepend-icon="arrow_forward"
              color="primary"
              type="submit"
              >{{ slice.primary.back_button_text }}</v-btn
            >
          </div>
        </div>
      </v-form>
    </v-container>
  </WorkFlowLayout>
</template>

<style>
.payment-card {
  width: 580px;

  padding: 40px 80px;
  border-radius: 8px;
  gap: 48px;
}
</style>
