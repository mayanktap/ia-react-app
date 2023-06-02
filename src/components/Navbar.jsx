import { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { menublack, skytllogo, close } from '../assets';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const signoutLink = {
    id: 'signout',
    title: 'Sign Out',
  };

  async function navElementClick(nav) {
    if (nav.id === 'home') {
      navigate('/');
    } else if (nav.id === 'signout') {
      await signoutClick();
    } else {
      navigate(`/${nav.id}`);
    }
    setActive(nav.title);
  }

  async function signoutClick() {
    try {
      setActive('Sign Out');
      await Auth.signOut();
      window.location.replace(window.location.origin + '/');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypassCache: false }).then((user) => {
      console.log(user);
      setIsLoggedIn(true);
    }).catch((err) => {
      setIsLoggedIn(false);
      console.log(err);
    });
  }, []);

  if (isLoggedIn) {
    if (navLinks[navLinks.length - 1].id !== signoutLink.id) {
      navLinks.push(signoutLink);
    }
  } else {
    if (navLinks[navLinks.length - 1].id === signoutLink.id) {
      navLinks.pop();
    }
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={skytllogo} alt="SkyTL" className="w-[100px] h-[105px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer uppercase hover:text-sky-700 text-[16px] ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => navElementClick(nav)}
          >
            <span>{nav.title}</span>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menublack}
          alt="menu"
          className="w-[50px] h-[50px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] border-l uppercase sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer hover:text-sky-700 text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => navElementClick(nav)}
              >
                <span>{nav.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
