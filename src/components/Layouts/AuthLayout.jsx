import Logo from "src/image/Logo.svg";
import Login from "src/image/Login.svg";

function AuthLayout({ children, title }) {
    return (
        <div className="relative grid grid-cols-4">
            <div className="col-span-3 flex items-center justify-center">
                <div className="max-w-xl w-full">
                    <img
                        className="block h-20 w-auto pl-12 mb-4"
                        src={Logo}
                        alt="logoImage"
                    />
                    <p className="font-bold text-4xl text-center pt-6">{title}</p>
                    {children}
                </div>
            </div>

            <div className="col-span bg-yellow-light h-screen">
                <div className="relative right-0">
                    <img
                        className="mx-auto w-full transform -translate-x-32 translate-y-32"
                        src={Login}
                        alt="LoginImage"
                        style={{ "height": "640px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;