import { Link } from "react-router-dom";
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "../components/ui/spinner";
import { Button } from "../components/ui/button";

const UserInfo = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const logOutHandler = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    if (isLoading) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }
    if (isAuthenticated && user) {
        return (
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <div className="h-8 w-8 rounded-full bg-gray-200">
                        {user.picture ? (
                            <img
                                src={user.picture}
                                alt={user.name}
                                className="h-full w-full rounded-full"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-gray-500">
                                U
                            </div>
                        )}
                    </div>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-4">
                        <li>
                            <NavigationMenuLink asChild>
                                <Link to="/profile">Profile</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link to="/about">About</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={logOutHandler}
                                >
                                    Logout
                                </Button>
                            </NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link to="/login">Login</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

export default UserInfo;