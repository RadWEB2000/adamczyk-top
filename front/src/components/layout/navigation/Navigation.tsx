import { Logo } from "@/assets/svgr";
import type { T_Navigation } from "@/ts/navigation.types";

export default function Navigation({isArticle}:T_Navigation){
    return (
        <>
            {
                isArticle &&
                <span
                    className="h-1 bg-red-500 w-full block scale-x-0 origin-left fixed top-0 left-0 z-999"
                />
            }
            <nav
                className="flex items-center flex-row fixed z-9999 text-white min-h-16 bg-blue-400 w-full"
            >
                <Logo
                    className="group hocus:rotate-95 hocus:scale-85 duration-200 ease-in-out transition-all fill-none bg-transparent h-10 w-10"
                    tile_one="fill-neutral-300 group-hocus:fill-international-orange-300 duration-300 ease-in-out transition-all"
                    tile_two="fill-neutral-600 group-hocus:fill-international-orange-600 duration-300 ease-in-out transition-all"
                    tile_three="fill-neutral-900 group-hocus:fill-international-orange-900 duration-300 ease-in-out transition-all"
                />
                <menu
                    className="flex items-center flex-row"
                >
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </menu>
            </nav>
        </>
    )
}