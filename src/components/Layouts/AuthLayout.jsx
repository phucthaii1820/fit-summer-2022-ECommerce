import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";

function AuthLayout({ children, title }) {
    return (
        <div className="relative grid grid-cols-4">
            <div className="col-span-3 flex items-center justify-center">
                <div className="max-w-xl w-full">
                    <img
                        className="block h-20 w-auto pl-12 mb-12"
                        src={Logo}
                        alt="logoImage"
                    />
                    <p className="font-bold text-4xl py-6">{title}</p>
                    {children}
                </div>
            </div>

            <div className="col-span bg-yellow-light h-screen">
            </div>
            <div className="absolute right-0">
                <img
                    className="mx-auto w-auto transform -translate-x-24 translate-y-24"
                    src={Login}
                    alt="LoginImage"
                    style={{ "height": "640px" }}
                />
            </div>
        </div>
    );
}

export default AuthLayout;