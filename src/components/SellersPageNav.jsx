import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: "/sellers/dashboard", label: "Dashboard" },
  { to: "/sellers/track", label: "Track Order" },
  { to: "/sellers/product", label: "Products" },
  { to: "/sellers/transaction", label: "Transactions" },
  { to: "/sellers/analytics", label: "Store Analytics" },
  { to: "/sellers/profile", label: "Profile" },

  
];

const SellersPageNav = () => {
  return (
    <div className='w-full hidden md:flex justify-center items-center'>
      <div className='mt-[190px] bg-[#FBECEC] p-[9px] w-fit rounded-[3px]'>
      <nav>
        <ul className='flex items-center'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink 
                to={link.to}
                className={({ isActive }) => isActive ? "active" : ""}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className='w-[35px] h-[35px] bg-[#F4C5C5] flex items-center justify-center rounded-[3px]'>
            <img src='../images/more.png'  alt="open"/>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default SellersPageNav;
