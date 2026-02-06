import img from "@/img/me/r-adamczyk-lumo.webp"
import Image from "next/image"

export default function Hero(){
    return (
        <header
            className="min-h-[98vh] text-white relative z-0 flex flex-col"
            style={{
                backgroundImage:`var(--gradient-black)`
            }}
        >
            <hgroup
                className="order-1 p-3 mt-20"
            >
                <h1
                    className="font-2xl font-subheading uppercase"
                >SEO / AEO / RPA / WEB / PPC</h1>
                <h2
                    className="text-3xl text-balance font-heading"
                >Budowa <strong className="text-red-600 font-black" >widoczności w Google i AI</strong> Twojej firmy </h2>
            </hgroup>
            <p
                className="order-3 text-xs leading-relaxed p-3 text-balance"
            ><strong className=""><span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officiis sit harum ea dolores dolorum voluptas ducimus dicta reprehenderit. Nesciunt iure atque deserunt molestiae. Explicabo recusandae perferendis atque magnam! Similique.</span><span>Nemo, dolore! Facere distinctio, aliquam repellat aut nemo similique optio tenetur nostrum, quod, temporibus repudiandae. Dolorum commodi cupiditate quia, nam nemo fuga, fugiat ipsa temporibus voluptates facere repellendus iste similique!</span></strong></p>
            
            {/* <Image
                alt=""
                className="grayscale-100 order-2 w-full bg-yellow-500"
                src={img.src}
                width={1025}
                height={725}
                loading="eager"
                priority
            /> */}
        </header>
    )
}