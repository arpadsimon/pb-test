import type { Entry, EntryFields } from "contentful";

export interface TypeHtmlBlockFields {
    title?: EntryFields.Symbol;
    html?: EntryFields.RichText;
}

export type TypeHtmlBlock = Entry<TypeHtmlBlockFields>;
