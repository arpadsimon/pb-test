import type { Entry, EntryFields } from "contentful";
import type { TypeTagFields } from "./TypeTag";

export interface TypeEntriesListFields {
    title: EntryFields.Symbol;
    tags: Entry<TypeTagFields>[];
    entriesCount: EntryFields.Integer;
}

export type TypeEntriesList = Entry<TypeEntriesListFields>;
