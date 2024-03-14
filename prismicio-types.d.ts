// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice =
  | InsuredInformationSlice
  | SummaryInformationSlice
  | PricingStepSlice
  | TripInformationStepSlice
  | NavigationBarSlice
  | CallToActionSlice;

/**
 * Content for page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

export type AllDocumentTypes = PageDocument;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *CallToAction → Primary*
 */
export interface CallToActionSliceAlignLeftPrimary {
  /**
   * Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   * buttonLink field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Redirect URL for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  buttonLink: prismic.LinkField;

  /**
   * buttonLabel field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for CTA button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttonLabel: prismic.KeyTextField;
}

/**
 * AlignLeft variation for CallToAction Slice
 *
 * - **API ID**: `alignLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSliceAlignLeft = prismic.SharedSliceVariation<
  "alignLeft",
  Simplify<CallToActionSliceAlignLeftPrimary>,
  never
>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation =
  | CallToActionSliceDefault
  | CallToActionSliceAlignLeft;

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlice = prismic.SharedSlice<
  "call_to_action",
  CallToActionSliceVariation
>;

/**
 * Default variation for FinishPage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FinishPageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *FinishPage*
 */
type FinishPageSliceVariation = FinishPageSliceDefault;

/**
 * FinishPage Shared Slice
 *
 * - **API ID**: `finish_page`
 * - **Description**: FinishPage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FinishPageSlice = prismic.SharedSlice<
  "finish_page",
  FinishPageSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Hero2 → Primary*
 */
export interface Hero2SliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Hero2SliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero2 → Primary*
 */
export interface Hero2SliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero_2.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero2 → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero2 → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero2 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero2 → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_2.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero2 Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2SliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<Hero2SliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero2*
 */
type Hero2SliceVariation = Hero2SliceDefault | Hero2SliceImageRight;

/**
 * Hero2 Shared Slice
 *
 * - **API ID**: `hero_2`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Hero2Slice = prismic.SharedSlice<"hero_2", Hero2SliceVariation>;

/**
 * Primary content in *InsuredInformation → Primary*
 */
export interface InsuredInformationSliceDefaultPrimary {
  /**
   * Title field in *InsuredInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insured_information.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Applicant description field in *InsuredInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insured_information.primary.applicant_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  applicant_description: prismic.KeyTextField;

  /**
   * Top left button text field in *InsuredInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insured_information.primary.top_left_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_left_button_text: prismic.KeyTextField;

  /**
   * Back button text field in *InsuredInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insured_information.primary.back_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  back_button_text: prismic.KeyTextField;

  /**
   * Next button text field in *InsuredInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insured_information.primary.next_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  next_button_text: prismic.KeyTextField;
}

/**
 * Default variation for InsuredInformation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InsuredInformationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InsuredInformationSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *InsuredInformation*
 */
type InsuredInformationSliceVariation = InsuredInformationSliceDefault;

/**
 * InsuredInformation Shared Slice
 *
 * - **API ID**: `insured_information`
 * - **Description**: InsuredInformation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InsuredInformationSlice = prismic.SharedSlice<
  "insured_information",
  InsuredInformationSliceVariation
>;

/**
 * Primary content in *NavigationBar → Primary*
 */
export interface NavigationBarSliceDefaultPrimary {
  /**
   * Name Step One field in *NavigationBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_bar.primary.name_step_one
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_step_one: prismic.KeyTextField;

  /**
   * Name step two field in *NavigationBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_bar.primary.name_step_two
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_step_two: prismic.KeyTextField;

  /**
   * Name step three field in *NavigationBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_bar.primary.name_step_three
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_step_three: prismic.KeyTextField;

  /**
   * Name step four field in *NavigationBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_bar.primary.name_step_four
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_step_four: prismic.KeyTextField;

  /**
   * Name step five field in *NavigationBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation_bar.primary.name_step_five
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_step_five: prismic.KeyTextField;
}

/**
 * Default variation for NavigationBar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationBarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavigationBarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NavigationBar*
 */
type NavigationBarSliceVariation = NavigationBarSliceDefault;

/**
 * NavigationBar Shared Slice
 *
 * - **API ID**: `navigation_bar`
 * - **Description**: NavigationBar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavigationBarSlice = prismic.SharedSlice<
  "navigation_bar",
  NavigationBarSliceVariation
>;

/**
 * Primary content in *PricingStep → Primary*
 */
export interface PricingStepSliceDefaultPrimary {
  /**
   * Basic plan description field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.basic_plan_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  basic_plan_description: prismic.KeyTextField;

  /**
   * Essential plan description field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.essential_plan_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  essential_plan_description: prismic.KeyTextField;

  /**
   * Preferred plan description field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.preferred_plan_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  preferred_plan_description: prismic.KeyTextField;

  /**
   * Top left button text field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.top_left_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_left_button_text: prismic.KeyTextField;

  /**
   * Back button text field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.back_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  back_button_text: prismic.KeyTextField;

  /**
   * Next button text field in *PricingStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.next_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  next_button_text: prismic.KeyTextField;

  /**
   * Title field in *PricingStep → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing_step.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for PricingStep Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingStepSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PricingStepSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PricingStep*
 */
type PricingStepSliceVariation = PricingStepSliceDefault;

/**
 * PricingStep Shared Slice
 *
 * - **API ID**: `pricing_step`
 * - **Description**: PricingStep
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingStepSlice = prismic.SharedSlice<
  "pricing_step",
  PricingStepSliceVariation
>;

/**
 * Primary content in *SummaryInformation → Primary*
 */
export interface SummaryInformationSliceDefaultPrimary {
  /**
   * Title field in *SummaryInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_information.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Back button text field in *SummaryInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_information.primary.back_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  back_button_text: prismic.KeyTextField;

  /**
   * Next button text field in *SummaryInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_information.primary.next_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  next_button_text: prismic.KeyTextField;

  /**
   * Confirmation content field in *SummaryInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_information.primary.confirmation_content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  confirmation_content: prismic.RichTextField;

  /**
   * Top left button field in *SummaryInformation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: summary_information.primary.top_left_button
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_left_button: prismic.KeyTextField;
}

/**
 * Default variation for SummaryInformation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryInformationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SummaryInformationSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SummaryInformation*
 */
type SummaryInformationSliceVariation = SummaryInformationSliceDefault;

/**
 * SummaryInformation Shared Slice
 *
 * - **API ID**: `summary_information`
 * - **Description**: SummaryInformation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SummaryInformationSlice = prismic.SharedSlice<
  "summary_information",
  SummaryInformationSliceVariation
>;

/**
 * Primary content in *TripInformationStep → Primary*
 */
export interface TripInformationStepSliceDefaultPrimary {
  /**
   * Back ground image field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.back_ground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  back_ground_image: prismic.ImageField<never>;

  /**
   * First title field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.firstTitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  firstTitle: prismic.TitleField;

  /**
   * Second title field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.secondTitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  secondTitle: prismic.RichTextField;

  /**
   * Single trip tooltip content field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.single_trip_tooltip_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  single_trip_tooltip_content: prismic.KeyTextField;

  /**
   * multi trip tooltip content field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.multi_trip_tooltip_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  multi_trip_tooltip_content: prismic.KeyTextField;

  /**
   * Individual tooltip content field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.individual_tooltip_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  individual_tooltip_content: prismic.KeyTextField;

  /**
   * Family tooltip content field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.family_tooltip_content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  family_tooltip_content: prismic.KeyTextField;

  /**
   * Bottom button text field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.bottom_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bottom_button_text: prismic.KeyTextField;

  /**
   * Destination label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.destination_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  destination_label: prismic.KeyTextField;

  /**
   * Duration label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.duration_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  duration_label: prismic.KeyTextField;

  /**
   * Type of insurance label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.type_of_insurance_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type_of_insurance_label: prismic.KeyTextField;

  /**
   * Type of insured label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.type_of_insured_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  type_of_insured_label: prismic.KeyTextField;

  /**
   * Area label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.area_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  area_label: prismic.KeyTextField;

  /**
   * multi_duration_label field in *TripInformationStep → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: trip_information_step.primary.multi_duration_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  multi_duration_label: prismic.KeyTextField;
}

/**
 * Default variation for TripInformationStep Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TripInformationStepSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TripInformationStepSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TripInformationStep*
 */
type TripInformationStepSliceVariation = TripInformationStepSliceDefault;

/**
 * TripInformationStep Shared Slice
 *
 * - **API ID**: `trip_information_step`
 * - **Description**: TripInformationStep
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TripInformationStepSlice = prismic.SharedSlice<
  "trip_information_step",
  TripInformationStepSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CallToActionSlice,
      CallToActionSliceDefaultPrimary,
      CallToActionSliceAlignLeftPrimary,
      CallToActionSliceVariation,
      CallToActionSliceDefault,
      CallToActionSliceAlignLeft,
      FinishPageSlice,
      FinishPageSliceVariation,
      FinishPageSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      Hero2Slice,
      Hero2SliceDefaultPrimary,
      Hero2SliceImageRightPrimary,
      Hero2SliceVariation,
      Hero2SliceDefault,
      Hero2SliceImageRight,
      InsuredInformationSlice,
      InsuredInformationSliceDefaultPrimary,
      InsuredInformationSliceVariation,
      InsuredInformationSliceDefault,
      NavigationBarSlice,
      NavigationBarSliceDefaultPrimary,
      NavigationBarSliceVariation,
      NavigationBarSliceDefault,
      PricingStepSlice,
      PricingStepSliceDefaultPrimary,
      PricingStepSliceVariation,
      PricingStepSliceDefault,
      SummaryInformationSlice,
      SummaryInformationSliceDefaultPrimary,
      SummaryInformationSliceVariation,
      SummaryInformationSliceDefault,
      TripInformationStepSlice,
      TripInformationStepSliceDefaultPrimary,
      TripInformationStepSliceVariation,
      TripInformationStepSliceDefault,
    };
  }
}