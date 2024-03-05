import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCardFields {
    title?: EntryFields.Symbol;
    subTitle?: EntryFields.Text;
    image?: Asset;
    buttonText?: EntryFields.Symbol;
    url?: EntryFields.Symbol;
}

export type TypeCard = Entry<TypeCardFields>;
