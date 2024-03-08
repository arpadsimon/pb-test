import type { Entry, EntryFields } from "contentful";
import type { TypeEntriesListFields } from "./TypeEntriesList";
import type { TypeGridFields } from "./TypeGrid";
import type { TypeHeroSectionFields } from "./TypeHeroSection";
import type { TypeHtmlBlockFields } from "./TypeHtmlBlock";
import type { TypeTagFields } from "./TypeTag";

export interface TypeArticlePageFields {
    title?: EntryFields.Symbol;
    pageType: "article" | "index";
    slug?: EntryFields.Symbol;
    seoTitle?: EntryFields.Symbol;
    description?: EntryFields.Text;
    og_title?: EntryFields.Symbol;
    og_description?: EntryFields.Text;
    content?: Entry<TypeEntriesListFields | TypeGridFields | TypeHeroSectionFields | TypeHtmlBlockFields>[];
    tags?: Entry<TypeTagFields>[];
}

export type TypeArticlePage = Entry<TypeArticlePageFields>;
