import type { Entry, EntryFields } from "contentful";
import type { TypeGridFields } from "./TypeGrid";
import type { TypeHeroSectionFields } from "./TypeHeroSection";
import type { TypeHtmlBlockFields } from "./TypeHtmlBlock";

export interface TypeArticlePageFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    seoTitle?: EntryFields.Symbol;
    description?: EntryFields.Text;
    og_title?: EntryFields.Symbol;
    og_description?: EntryFields.Text;
    heroSection?: Entry<TypeHeroSectionFields>;
    content?: Entry<TypeGridFields | TypeHeroSectionFields | TypeHtmlBlockFields>[];
}

export type TypeArticlePage = Entry<TypeArticlePageFields>;
