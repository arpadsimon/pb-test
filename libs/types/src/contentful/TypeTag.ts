import type { Entry, EntryFields } from "contentful";

export interface TypeTagFields {
    name: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
}

export type TypeTag = Entry<TypeTagFields>;
