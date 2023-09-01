import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import avatar from '../../assets/icons/avatar.jpg'
import './navBar.css'
import Avatar from '../avatar/avatar';

const id = 0

const NavBar = () => {
    const userComponents = (id) => {
        if (id === 0) {
          return (
            <>
                <li className="item">
                    <Link to="/signin" relative="path">Đăng nhập</Link>
                </li>
                <li className="item">
                    <Link to="/signup" relative="path">Đăng ký</Link>
                </li>
            </>
          );
        } else {
          return (
            <>
                <li className="item">
                    <Link to="/profile" relative="path"><Avatar image={avatar}></Avatar></Link>
                </li>
                <li className="item">
                    <Link to="/signin" relative="path">Đăng xuất</Link>
                </li>
            </>
          );
        }
      };
    return (
        <nav className="navbar-items">
            <div className="container">
                <div className="logo">
                    <HashLink smooth to="/"  onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}>Travelus</HashLink>
                </div>
                    <ul className="item-list">
                    <li className="item">
                        {/* <a href="/#aboutUs">Về chúng tôi</a> */}
                        <HashLink smooth to="/#aboutUs">Về chúng tôi</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#aboutUs'}} relative="path">Về chúng tôi</Link> */}
                    </li>
                    <li className="item">
                        <Link to="/test" relative="path">Tất cả tours</Link>
                    </li>
                    <li className="item">
                        {/* <a href="/#hotTours">Hot tours</a> */}
                        <HashLink smooth to="/#hotTours">Hot tours</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#hotTours'}} relative="path">Hot tours</Link> */}
                    </li>
                    <li className="item">
                        {/* <a href="/#feedback">Feedbacks</a> */}
                        <HashLink smooth to="/#feedback">Feedbacks</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#feedback'}} relative="path">Feedbacks</Link> */}
                    </li>
                    {userComponents(id)}
                    </ul>
            </div>
        </nav>
    );
};
export default NavBar;