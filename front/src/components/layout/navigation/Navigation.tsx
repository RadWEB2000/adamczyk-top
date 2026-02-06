import {Brand, Menu, ProgressBar} from "@/layout/navigation";
import type { T_Navigation } from "@/ts/navigation.types";

export default function Navigation({isArticle}:T_Navigation){
    return (
        <>
            {
                isArticle &&
                <ProgressBar/>
            }
            <nav
                className="flex items-center flex-row fixed z-9999 text-white h-16 bg-blue-400 w-full px-6 justify-between"
            >
                <Brand
                    href="/"
                    label="Adamczyk"
                    lang="pl-PL"
                />
                <Menu
                    menu={[
                        {
                            href:'/',
                            label:'Start'
                        },
                        {
                            href:'/o-mnie',
                            label:'O mnie',
                        },
                        {
                            href:'/oferta',
                            label:'Oferta',
                            submenu:[
                                {
                                    href:'/oferta/pozycjonowanie-stron',
                                    label:'Pozycjonowanie'
                                },
                                {
                                    href:'/oferta/pozycjonowanie-ai',
                                    label:'Pozycjonowanie AI'
                                },
                                {
                                    href:'/oferta/strony-internetowe',
                                    label:'Strony internetowe'
                                },
                                {
                                    href:'/oferta/automatyzacje-rpa',
                                    label:'Automatyzacje RPA'
                                },
                                {
                                    href:'/oferta/reklamy-ppc',
                                    label:'Reklamy PPC'
                                },
                            ]
                        },
                        {
                            href:'/case-studies',
                            label:'Case studies'
                        },
                        {
                            href:'/blog',
                            label:'Blog'
                        },
                        {
                            href:'/kontakt',
                            label:'Kontakt'
                        }
                     ]}
                />
            </nav>
        </>
    )
}