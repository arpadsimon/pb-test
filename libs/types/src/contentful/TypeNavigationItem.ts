import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeArticlePageFields } from "./TypeArticlePage";

export interface TypeNavigationItemFields {
    title?: EntryFields.Symbol;
    pageLink?: Entry<TypeArticlePageFields>;
    url?: EntryFields.Symbol;
    image?: Asset;
    target?: "_blank" | "_self";
}

export type TypeNavigationItem = Entry<TypeNavigationItemFields>;
