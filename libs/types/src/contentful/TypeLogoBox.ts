import type { Entry, EntryFields } from "contentful";
import type { TypeLogoFields } from "./TypeLogo";

export interface TypeLogoBoxFields {
    title?: EntryFields.Symbol;
    text?: EntryFields.Symbol;
    logos?: Entry<TypeLogoFields>[];
}

export type TypeLogoBox = Entry<TypeLogoBoxFields>;
