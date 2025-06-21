import { Link } from "react-router-dom";
import './Navbar.css';

const HomeNav = () => {
    return (
            <nav class=" w-full  py-3 z-50 bg-inherit">
            <div class="container mx-auto">
            <div class="w-full flex flex-col lg:flex-row">
            <div class="flex justify-between w-full lg:flex-row">
            <a href="#" class="flex items-center">
              <img src="logo.png" alt="brand image" class="w-13 h-13" />
              <h2>Viewee</h2>
            </a>
            <div class="flex justify-between ">
              <Link to='/'><button class="btn-secondary btn-small"> Logout </button></Link>
              <Link to='/signup'>
              <ul className="user_details">
                <li>USER</li>
                <li>Logged in</li>
              </ul>
              </Link>
            </div>
            </div>
            </div>
            </div>
            </nav>
      );
}
 
export default HomeNav;