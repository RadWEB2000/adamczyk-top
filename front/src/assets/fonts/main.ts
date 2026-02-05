import { Josefin_Sans, Raleway, Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets:['latin','latin-ext'],
  variable:'--font-heading'
})

const josefin = Josefin_Sans({
    subsets:['latin','latin-ext'],
    variable:'--font-subheading'
})

const raleway = Raleway({
  subsets:['latin','latin-ext'],
  variable:'--font-regular'
})


export {sourceSans, josefin, raleway}