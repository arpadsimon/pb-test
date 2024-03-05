import type { Entry, EntryFields } from "contentful";
import type { TypeNavigationItemFields } from "./TypeNavigationItem";
import type { TypeSubNavigationFields } from "./TypeSubNavigation";

export interface TypeNavigationFields {
    title?: EntryFields.Symbol;
    navigationItems?: Entry<TypeNavigationItemFields>[];
    subNavigations?: Entry<TypeSubNavigationFields>[];
}

export type TypeNavigation = Entry<TypeNavigationFields>;
