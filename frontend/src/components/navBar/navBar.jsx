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
                        <a href="#form">Đăng ký</a>
                    </li>
                    <li className="item">
                        <a href="#form">Đăng nhập</a>
                    </li>
                    <li className="item">
                        <a href="#feedback">Feedbacks</a>
                    </li>
                    <li className="item">
                        <a href="#hotTours">Hot tours</a>
                    </li>
                    <li className="item">
                        <a href="#vacationPackages">Tất cả tours</a>
                    </li>
                    <li className="item">
                        <a href="#aboutUs">Về chúng tôi</a>
                    </li>
                    </ul>
            </div>
        </nav>
    );
};
export default NavBar;