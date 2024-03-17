//customSvgs.ts
import { h } from "vue";
import type { IconSet, IconProps } from "vuetify";
import annualMultitrip from "./customsvgs/annualmultitrip.vue";
import family from "./customsvgs/family.vue";
import individual from "./customsvgs/individual.vue";
import singleTrip from "./customsvgs/singletrip.vue";

const customSvgNameToComponent: any = {
  annualMultitrip,
  singleTrip,
  individual,
  family,
};

const customSVGs: IconSet = {
  component: (props: IconProps) => h(customSvgNameToComponent[props.icon]),
};

export { customSVGs /* aliases */ };
