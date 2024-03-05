import type { Entry, EntryFields } from "contentful";
import type { TypeCardFields } from "./TypeCard";

export interface TypeGridFields {
    title?: EntryFields.Symbol;
    gridItems?: Entry<TypeCardFields>[];
}

export type TypeGrid = Entry<TypeGridFields>;
