import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeLogoFields {
    title?: EntryFields.Symbol;
    logoImage?: Asset;
    url?: EntryFields.Symbol;
}

export type TypeLogo = Entry<TypeLogoFields>;
