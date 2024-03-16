<script setup lang="ts">
import { type Content } from "@prismicio/client";
import { useInformationStore } from "@/stores/InformationStore";
import moment from "moment";
import { asLink } from "@prismicio/client";

const store = useInformationStore();

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp",
      crossorigin: "",
    },
  ],
});

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.FinishPageSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Header :showHeader="false" />
  <div
    class="d-flex align-center justify-center flex-column ga-10 brown-main"
    style="min-height: 300px"
  >
    <v-container class="pa-10 w-75">
      <div class="d-flex flex-column justify-center align-center ga-16">
        <v-card style="padding: 30px 70px" class="applicant-card">
          <template v-slot:title>
            <div class="d-flex flex-column justify-center align-center ga-4">
              <v-icon size="x-large" color="#4CAF50">{{
                slice.primary.icon_name
              }}</v-icon>
              <p class="card-title mb-4 text-center">Your policy is issued</p>
            </div>
          </template>
          <template v-slot:text>
            <div class="d-flex flex-column justify-center align-center ga-4">
              <p class="card-subtitle text-center">
                Policy number:
                <span class="font-weight-bold">302394390023</span>
              </p>
              <p class="card-subtitle text-center">
                Your insurance will be active from
                {{ moment(store.insurance.startDate).format("DD MMMM YYYY") }}
                to {{ moment(store.insurance.endDate).format("DD MMMM YYYY") }}.
              </p>
              <v-btn
                :href="asLink(slice.primary.button_link) || ''"
                target="_blank"
                class="text-none text-purple-darken-2"
                variant="outlined"
                >{{ slice.primary.button_text || "View policy" }}</v-btn
              >
            </div>
          </template>
        </v-card>
      </div>
      <div class="mt-4 d-flex justify-center">
        <div class="d-flex flex-column justify-center ga-2 term-box">
          <p class="card-subtitle">
            Please take note of the following important points:
          </p>
          <ul class="ml-8">
            <li v-for="item in slice.items" class="card-subtitle">
              <PrismicRichText :field="item.note"></PrismicRichText>
            </li>
          </ul>
          <p class="card-subtitle font-weight-bold">
            {{
              slice.primary.wish_text ||
              "We wish you a safe and enjoyable trip!"
            }}
          </p>
        </div>
      </div>
      <!-- <div class="d-flex flex-column justify-center align-center ga-16 mt-8">
        <div
          class="w-75 d-flex justify-center flex-column ga-4 gl-0 pa-16 pt-0"
        >
          <p class="card-subtitle">
            Please take note of the following important points:
          </p>
          <ul class="ml-6">
            <li v-for="item in slice.items" class="card-subtitle">
              <PrismicRichText :field="item.note"></PrismicRichText>
            </li>
          </ul>
          <p class="card-subtitle font-weight-bold">
            {{
              slice.primary.wish_text ||
              "We wish you a safe and enjoyable trip!"
            }}
          </p>
        </div>
      </div> -->

      <!-- applicant card  -->
    </v-container>
    <Footer />
  </div>
</template>

<style scoped>
.term-box {
  width: 580px;
  padding: 20px 0;
  border-radius: 8px;
  gap: 12px;
  background-color: transparent;
}
</style>
