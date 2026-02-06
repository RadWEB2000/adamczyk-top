import Link from "next/link";
import type { T_Menu } from "@/ts/navigation.types";

export default function Menu({menu,styles}:T_Menu){
    return (
        <menu
            className={`bg-amber-500 flex h-full justify-end gap-0.5 items-center ${styles}`}
        >
            {
                menu.map(({href,label,lang}) => {
                    return (
                        <Link className="uppercase text-lg font-semibold font-subheading py-4  bg-rose-400 first-of-type:bg-purple-800 leading-none" href={href} hrefLang={lang} key={label} >
                            {label}
                        </Link>
                    )
                })
            }
        </menu>
    )
}