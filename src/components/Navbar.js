import logo from "../images/logo.png"

function Navbar(){
    return(   
        <div className="bg-slate-500 text-slate-300">
            <div className="flex justify-center items-center">
                <div><img className="p-2 h-14" src={logo} alt="logo"/></div>
                <div><p className = "p-2 text-xl font-bold">Milion ryb</p></div>
            </div>
        </div>
    );

}

export default Navbar;