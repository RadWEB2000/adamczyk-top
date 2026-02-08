import Link from "next/link";
import type { T_Menu } from "@/ts/navigation.types";
import { IoArrowDown as Arrow } from "react-icons/io5";

export default function Menu({menu,styles}:T_Menu){
    return (
        <menu
            className={`bg-amber-500 flex h-full justify-end gap-2.5 items-center ${styles}`}
        >
            {
                menu.map(({href,label,lang,submenu}) => {
                    if(submenu) {
                        return (
                            <div
                                className="relative"
                                key={label}
                            >
                                <Link
                                    className="text-xl font-subheading font-bold uppercase px-1.5 py-0.5"
                                    href={href}
                                    hrefLang={lang}
                                >
                                    {label}
                                </Link>
                                <button type="button">
                                    <Arrow
                                        className="text-xl"
                                    />
                                </button>
                                <menu
                                    className="absolute bg-gray-400 p-4 min-w-fit flex flex-col"
                                >
                                    {
                                        submenu.map(({href,label,lang}) => {
                                            return (
                                                <Link
                                                    href={href}
                                                    hrefLang={lang}
                                                >
                                                    {label}
                                                </Link>
                                            )
                                        })
                                    }
                                </menu>
                            </div>
                        )
                    } else {
                        return (
                            <Link
                                className="text-xl font-subheading font-bold uppercase px-1.5 py-0.5"
                                href={href}
                                hrefLang={lang}
                            >
                                {label}
                            </Link>
                        )
                    }
                })
            }

        </menu>
    )
}