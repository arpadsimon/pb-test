import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeNavigationFields } from "./TypeNavigation";

export interface TypeHeaderFields {
    title?: EntryFields.Symbol;
    topNavigation?: Entry<TypeNavigationFields>;
    mainNavigation?: Entry<TypeNavigationFields>;
    siteLogo?: Asset;
}

export type TypeHeader = Entry<TypeHeaderFields>;
