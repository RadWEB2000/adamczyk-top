import Link from "next/link";
import { Logo } from "@/assets/svgr";
import type { T_Brand } from "@/ts/navigation.types";

export default function Brand({href,label,lang,linkProps}:T_Brand){
    return (
        <Link 
            className="inline-flex items-center group"
            href={href}
            hrefLang={lang}
            {...linkProps}
        >
            <Logo
                className=" group-hocus:rotate-95 group-hocus:scale-85 duration-200 ease-in-out transition-all fill-none bg-transparent h-10 w-10"
                tile_one="fill-neutral-300 group-hocus:fill-international-orange-300 duration-300 ease-in-out transition-all"
                tile_two="fill-neutral-600 group-hocus:fill-international-orange-600 duration-300 ease-in-out transition-all"
                tile_three="fill-neutral-900 group-hocus:fill-international-orange-900 duration-300 ease-in-out transition-all"
            />
            <span
                className="font-heading uppercase font-extrabold text-2xl"
            >
                {label}
            </span>
        </Link>
    )
}