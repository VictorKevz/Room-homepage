import slide1Desktop from "../../assets/images/desktop-image-hero-1.jpg"
import slide2Desktop from "../../assets/images/desktop-image-hero-2.jpg"
import slide3Desktop from "../../assets/images/desktop-image-hero-3.jpg"

import slide1Mobile from "../../assets/images/mobile-image-hero-1.jpg"
import slide2Mobile from "../../assets/images/mobile-image-hero-2.jpg"
import slide3Mobile from "../../assets/images/mobile-image-hero-3.jpg"

const data = [
    {
        id:1,
        title:"Discover innovative ways to decorate",
        description:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        imgSrc:{
            desktop:slide1Desktop,
            mobile:slide1Mobile
        },
        CTA:"Shop now"
    },
    {
        id:2,
        title:"We are available all across the globe",
        description:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        imgSrc:{
            desktop:slide2Desktop,
            mobile:slide2Mobile
        },
        CTA:"Shop now"
    },
    {
        id:3,
        title:"Manufactured with the best materials",
        description:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        imgSrc:{
            desktop:slide3Desktop,
            mobile:slide3Mobile
        },
        CTA:"Shop now"
    }
]
export default data;