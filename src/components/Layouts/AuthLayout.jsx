import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";
import { Link } from "react-router-dom";

function AuthLayout({ children, title }) {
    return (
        <div className="relative flex flex-col-reverse xl:grid xl:grid-cols-4">
            <div className="p-16 xl:col-span-3 flex items-center justify-center">
                <div className="max-w-xl w-full">
                    <Link to="/">
                        <img
                            className="block h-20 w-auto my-4 sm:pl-12"
                            src={Logo}
                            alt="logoImage"
                        />
                    </Link>
                    <p className="font-bold text-4xl text-center pt-6">{title}</p>
                    {children}
                </div>
            </div>

            <div className="relative bg-yellow-light h-72 xl:col-span xl:h-screen">
                <div className="absolute">
                    <img
                        className="w-1/3 transform translate-x-1/2 translate-y-32 xl:w-full xl:-translate-x-40 xl:translate-y-44"
                        src={Login}
                        alt="LoginImage"
                    />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;