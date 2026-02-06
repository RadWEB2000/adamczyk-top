import type { LinkProps } from "next/link";

export type T_Navigation = {
    isArticle?:boolean;
}

export type T_Brand = {
    label:string;
    href:string;
    lang?:string;
    linkProps?:Omit<LinkProps,'href'>;
}

export type T_Menu = {
    styles?:string;
    menu:Array<{
        label:string;
        href:string;
        lang?:string;
        submenu?:Array<{
            label:string;
            href:string;
            lang?:string;
        }>
    }>
}