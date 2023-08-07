import './navBar.css'

const NavBar = () => {
    return (
        <nav className="navbarItems">
            <div className="container">
                <div className="logo">
                    <a href="#header"><> </>Travelus</a>
                </div>
                    <ul className="itemList">
                    <li className="item">
                        <a href="#form">Sign Up</a>
                    </li>
                    <li className="item">
                        <a href="#form">Sign In</a>
                    </li>
                    <li className="item">
                        <a href="#feedback">Feedback</a>
                    </li>
                    <li className="item">
                        <a href="#vacationPackages">Vacation Packages</a>
                    </li>
                    <li className="item">
                        <a href="#aboutUs">About us</a>
                    </li>
                    </ul>
            </div>
        </nav>
    );
};
export default NavBar;