import type { Entry, EntryFields } from "contentful";

export interface TypeButtonFields {
    title?: EntryFields.Symbol;
}

export type TypeButton = Entry<TypeButtonFields>;
