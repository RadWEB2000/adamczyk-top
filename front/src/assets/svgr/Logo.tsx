type T_Logo = T_SVG & {
    tile_one?:string;
    tile_two?:string;
    tile_three?:string;
}

export default function Logo({tile_one,tile_two,tile_three,...props}:T_Logo){
    return (
             <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 5000 5000"
            {...props}
            >
                <title>Logo | AdamczykTOP</title>
                <path className={`tile-1 ${tile_one}`} d="M2500 2500c552.285 0 1000-447.715 1000-1000S3052.285 500 2500 500v2000z" />
                <path className={`tile-2 ${tile_two}`} d="M2500 500v1000H1500c0-552.2 447.7-1000 1000-1000z" />
                <path className={`tile-1 ${tile_one}`} d="M2500 2500c0 552.285 447.715 1000 1000 1000s1000-447.715 1000-1000H2500z" />
                <path className={`tile-2 ${tile_two}`} d="M4500 2500H3500V1500c552.2 0 1000 447.7 1000 1000z" />
                <path className={`tile-3 ${tile_three}`} d="M2500 2500h1000V1500c-552.2 0-1000 447.7-1000 1000z" />
                <path className={`tile-1 ${tile_one}`} d="M2500 2500c-552.285 0-1000 447.715-1000 1000s447.715 1000 1000 1000V2500z" />
                <path className={`tile-2 ${tile_two}`} d="M2500 4500V3500h1000c0 552.2-447.7 1000-1000 1000z" />
                <path className={`tile-3 ${tile_three}`} d="M2500 2500v1000h1000c0-552.199-447.7-1000-1000-1000z" />
                <path className={`tile-1 ${tile_one}`} d="M2500 2500c0-552.285-447.715-1000-1000-1000S500 1947.715 500 2500h2000z" />
                <path className={`tile-2 ${tile_two}`} d="M500 2500h1000v1000c-552.2 0-1000-447.7-1000-1000z" />
                <path className={`tile-3 ${tile_three}`} d="M2500 2500H1500v1000c552.2 0 1000-447.7 1000-1000zM2500 2500V1500H1500c0 552.2 447.7 1000 1000 1000z" />
            </svg>
    )
}