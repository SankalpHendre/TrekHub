import CarouselComponent from "./CarouselComponent";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
import "../CSS/HomeStyle.css"
import SearchTrek from "./SearchTrekComponent";

export default function HomeComponent()
{
    return(

        <div>
        <NavbarComponent/>
        <div className="c-renderelement">
        <CarouselComponent/>
        </div>
        <div>
        <SearchTrek/>
        </div>
        <FooterComponent/>
        </div>
    )
}