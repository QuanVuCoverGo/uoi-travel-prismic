<template>
  <Header />

  <div
    class="d-flex align-center justify-center flex-column ga-10"
    :class="store.step === 1 ? 'main' : 'brown-main'"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <slot></slot>
    <Footer :color="store.step === 1 ? 'white' : 'black'" />
  </div>
</template>

<script lang="ts" setup>
import Header from "../components/Header.vue";
import { useInformationStore } from "../stores/InformationStore";

const store = useInformationStore();

const props = defineProps({
  backgroundImage: { type: String },
});

watch(
  () => store.step,
  (v) => {
    if (v) {
      window.scrollTo(0, 0);
    }
  }
);

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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main {
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: top;
  background-attachment: fixed;
  padding-top: 50px !important;
  padding-bottom: 50px !important;
}

.header {
  font-family: "Noto Sans";
  font-size: 40px;
  font-weight: 300;
  line-height: 54px;
  letter-spacing: 1.5px;
  text-align: center;
  color: #275cb2;
}

.insuredDays {
  font-family: "Noto Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
}

.fit-content {
  width: fit-content !important;
  border-radius: 4px;
}

.absolute-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.v-btn--block {
  min-width: 0 !important;
}

.card-no-shadow {
  box-shadow: none;
  border: 1px solid #0000002e;
}

.brown-main {
  background-color: #f4f4f6;
}

.v-icon--size-x-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1em) !important;
}

.v-icon--size-small {
  font-size: calc(var(--v-icon-size-multiplier) * 1.25em) !important;
}

.v-icon--size-default {
  font-size: calc(var(--v-icon-size-multiplier) * 1.5em) !important;
}

.v-icon--size-large {
  font-size: calc(var(--v-icon-size-multiplier) * 1.75em) !important;
}

.v-icon--size-x-large {
  font-size: calc(var(--v-icon-size-multiplier) * 2em) !important;
}
</style>
