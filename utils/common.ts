import { AREAS_LIST } from "./../constants/index";
export type Area = {
  name: string;
  value: string;
  description: string;
};

export function getAreaDescription(area: "area2" | "area3"): string {
  return AREAS_LIST.find((areaItem: Area) => areaItem.value === area)
    ?.description;
}
export function getFieldName(field: string): string {
  return fieldNames[field] || field;
}

const fieldNames = {
  fullName: "Full name",
  dateOfBirth: "Date Of Birth",
  NRICorPassport: "NRIC or Passport",
  email: "email",
  address: "address",
};

const pages = {
  1: "trip-information",
  2: "pricing",
  3: "insured-information",
  4: "summary",
  5: "payment",
};

export async function onNext(index: number): Promise<void> {
  await navigateTo(`/workflows/${pages[index + 1]}`);
}

export async function onPrevious(index: number): Promise<void> {
  await navigateTo(`/workflows/${pages[index - 1]}`);
}
