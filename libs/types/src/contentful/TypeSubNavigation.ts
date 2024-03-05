import type { Entry, EntryFields } from "contentful";
import type { TypeLogoBoxFields } from "./TypeLogoBox";
import type { TypeNavigationItemFields } from "./TypeNavigationItem";

export interface TypeSubNavigationFields {
    title?: EntryFields.Symbol;
    navigationItems?: Entry<TypeNavigationItemFields>[];
    logoBoxes?: Entry<TypeLogoBoxFields>[];
}

export type TypeSubNavigation = Entry<TypeSubNavigationFields>;
