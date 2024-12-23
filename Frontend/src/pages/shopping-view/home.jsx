import { Button } from "@/components/ui/button";
import banner1 from "../../assets/banner/banner 1.png";
import banner2 from "../../assets/banner/banner.jpg";
import { ChevronLeftIcon } from "lucide-react";

const slides = [banner1, banner2];

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];
function ShoppingHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`absolute top-0 w-full h-full object-cover transition-opacity duration-1000`}
          ></img>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/80"
        >
          <ChevronLeftIcon className="w-4 h-4"></ChevronLeftIcon>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/80"
        >
          <ChevronLeftIcon className="w-4 h-4"></ChevronLeftIcon>
        </Button>
      </div>
    </div>
  );
}

export default ShoppingHome;
