import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link to='/login'><button class="btn-secondary btn-small"> Login </button></Link>
              <Link to='/signup'><button class="btn-primary btn-small md:ml-16"> Sign up </button></Link>
            </div>
            </div>
            </div>
            </div>
            </nav>
      );
}
 
export default Navbar;