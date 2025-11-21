import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import UserInfo from "./UserInfo";

function AppHeader() {
    return (
        <header className="bg-white shadow-md h-16 px-4 flex justify-between items-center">
            <Button variant="link" className="px-0 cursor-pointer hover:no-underline">
                <Link to={"/"}>
                    <h1 className="text-lg font-bold">My Inventory</h1>
                </Link>
            </Button>

            <div className="flex items-center gap-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/About">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link to="/profile">Profile</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <UserInfo />
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
export default AppHeader;