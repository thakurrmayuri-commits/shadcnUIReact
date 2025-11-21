import { Link } from "react-router-dom"
import { Box, User } from "lucide-react"
function Header() {
    return (
        <header className="bg-white shadow-md h-16 px-4 flex justify-between items-center">
            <Link to="/">
                <div className="flex flex-row gap-2 text-teal-500 cursor-pointer">
                    <span><Box color="#4aaec7ff" /></span><span>Inventory Management</span></div>
            </Link>
            <div className="flex flex-row text-teal-600 cursor-pointer gap-2"><span className="bg-teal-100 rounded-full"><User size={20} /></span><span>Login</span>
            </div>
        </header>
    )
}
export default Header;