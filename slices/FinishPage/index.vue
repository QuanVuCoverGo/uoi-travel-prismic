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
    class="d-flex align-center justify-center flex-column ga-10 bg-white mt-10"
    style="min-height: 300px"
  >
    <v-container class="d-flex pa-10 w-75 justify-center align-center">
      <div class="d-flex flex-column justify-center align-center w-75">
        <div class="d-flex justify-space-between align-center ga-4 w-100">
          <div class="d-flex flex-column align-start justify-center w-100 ga-5">
            <h3 class="text-left color-blue header">
              You’re covered for your trip
            </h3>
            <div class="d-flex flex-column ga-2">
              <p class="card-subtitle">
                Period of insurance:
                <span class="font-weight-bold">
                  {{ moment(store.insurance.startDate).format("DD MMMM YYYY") }}
                  -
                  {{ moment(store.insurance.endDate).format("DD MMMM YYYY") }}.
                </span>
              </p>
              <p class="card-subtitle">
                Policy number:
                <span class="font-weight-bold">302394390023</span>
              </p>
            </div>
            <p class="card-subtitle">
              {{
                slice.primary.wish_text ||
                "We wish you a safe and enjoyable trip!"
              }}
            </p>
            <v-btn
              :href="asLink(slice.primary.button_link) || ''"
              target="_blank"
              class="text-none font-weight-bold"
              color="primary"
              size="large"
              >{{ slice.primary.button_text || "View policy" }}</v-btn
            >
          </div>
          <v-img width="144" height="155" src="/success.png"></v-img>
        </div>
      </div>
    </v-container>
  </div>
  <div class="d-flex align-center justify-center flex-column ga-10 brown-main">
    <v-container class="d-flex pa-10 w-75 justify-center align-center">
      <div class="d-flex flex-column justify-center align-center w-75">
        <div class="d-flex justify-space-between align-center ga-4 w-100">
          <div class="d-flex flex-column align-start justify-center w-100 ga-4">
            <p class="card-subtitle font-weight-bold">Please take note</p>
            <ul class="ml-8">
              <li v-for="item in slice.items" class="card-subtitle">
                <PrismicRichText :field="item.note"></PrismicRichText>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
