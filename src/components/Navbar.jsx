import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/navcard";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <Card className="container relative z-10 bg-transparent py-3 ml-5 mr-5 pt-7 border-white text-opacity-100 flex items-center justify-between gap-6 bg-opacity-95  mx-auto border-b-2 text-white">
            <ul className="hidden md:flex items-center gap-10 max-md:gap-5 text-card-foreground">
                <li className="text-primary font-medium">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#features">Our Story</a>
                </li>
                <li>
                    <a href="#pricing">About Tirthan</a>
                </li>
                <li>
                    <a href="#faqs">Rooms</a>
                </li>
                <li>
                    <a href="#faqs">Gallery</a>
                </li>
                <li>
                    <a href="#faqs">Contact Us</a>
                </li>
            </ul>

            <a className="text-primary font-bold text-2xl mx-auto " href="#home">TFE</a>

            <div className="flex items-center justify-between">
                <Button className="md:block ml-2 mr-2 bg-white text-black hover:bg-transparent border-2 border-white hover:text-white rounded-full ">Book Here</Button>

                <div className="flex md:hidden mr-2 items-center gap-2 justify-between ">

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button  size="icon" >
                                <Menu className="h-5 w-5 rotate-0 scale-100 " />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="bg-black ">
                            <DropdownMenuItem>
                                <a className="text-white" href="#home">Home</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a className="text-white" href="#features">Features</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a className="text-white" href="#pricing">Pricing</a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a className="text-white" href="#faqs">FAQs</a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>
        </Card>
    );
};

export default Navbar;