import type { Asset, Entry, EntryFields } from "contentful";
import type { TypeButtonFields } from "./TypeButton";

export interface TypeHeroSectionFields {
    title?: EntryFields.Symbol;
    buttons?: Entry<Record<string, any>>[];
    extraFields?: Entry<TypeButtonFields>[];
    subTitle?: EntryFields.Text;
    desktopImage?: Asset;
    alignment?: "center" | "left" | "right";
}

export type TypeHeroSection = Entry<TypeHeroSectionFields>;
