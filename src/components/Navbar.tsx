import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './LoginComponent';
import { Button } from "@material-tailwind/react";

const Navbar: React.FC = () => {
  const navigate = useNavigate();


  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    navigate('/');
    toast.success('Logged out successfully', {
      onClose: () => window.location.reload(),
      autoClose: 1000
    });

  };

  // Check if user is logged in
  const token = sessionStorage.getItem('token');
  //const user = sessionStorage.getItem('user');


  // Check if the token is expired
  const isTokenExpired = (token: string): boolean => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const decodedToken = JSON.parse(jsonPayload);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  const isLoggedIn = token && !isTokenExpired(token);

  // Redirect to homepage if token is expired
  React.useEffect(() => {
    if (token && isTokenExpired(token)) {
      handleLogout();
    }
  }, [token]);

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'btn-active' : 'btn-ghost';
  };

  return (
    <nav className="navbar bg-neutral-100 text-light-text dark:bg-dark-neutral dark:text-dark-text">
      <div className="flex-none">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-dark-neutral dark:bg-base-900 text-base-content dark:text-dark-text"
          >

            <>{
              isLoggedIn && (
                <li>
                  <Link to="/users" className="text-dark-text dark:text-dark-text">
                    View Users
                  </Link>
                </li>
              )
            }
              {isLoggedIn && (
                <li>
                  <Link to="/chat" className="text-dark-text dark:text-dark-text">
                    Chat
                  </Link>
                </li>
              )
              }
              <li>
                <Link to="/register" className="text-dark-text dark:text-dark-text">
                  Add User
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="/document-viewer" className="text-dark-text dark:text-dark-text">
                    Documents
                  </Link>
                </li>)
              }
              {isLoggedIn && (
                <li>
                  <Link to="/upload-document" className="text-dark-text dark:text-dark-text">
                    Upload Document
                  </Link>
                </li>
              )
              }

            </>




          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="btn btn-ghost">
          <Link to="/" className="text-l md:text-2xl">
            Use-Case-GPT
          </Link>
        </div>
      </div>
      <div className="md:block hidden mb-2">
        {isLoggedIn && (
          <>
            <div tabIndex={0} role="button" className={` btn ${getLinkClass('/chat')} rounded-btn mt-1 font-bold dark:text-dark-text`}>
              <Link to="/chat">Chat</Link>
            </div>

            <div tabIndex={0} role="button" className={` btn ${getLinkClass('/document-viewer')} rounded-btn mt-1 font-bold dark:text-dark-text`}>
              <Link to="/document-viewer">Documents</Link>
            </div>

            <div tabIndex={0} role="button" className={` btn ${getLinkClass('/upload-document')} rounded-btn mt-1 font-bold dark:text-dark-text`}>
              <Link to="/upload-document">Upload Documents</Link>
            </div>

            <div tabIndex={0} role="button" className={` btn ${getLinkClass('/users')} rounded-btn mt-1 font-bold dark:text-dark-text`}>
              <Link to="/users">Users</Link>
            </div>
          </>
        )}
        {!isLoggedIn && (
          <div tabIndex={0} role="button" className={` btn ${getLinkClass('/register')} rounded-btn mt-1 font-bold dark:text-dark-text`}>
            <Link to="/register">Add User</Link>
          </div>)
        }

      </div>
      <div>
        <div className="mr-3 mb-1">
          {!isLoggedIn && (
            <Login />
          )}
          {isLoggedIn && (
            <Button onClick={handleLogout} color="blue" type="button" placeholder="" onPointerEnterCapture={() => { }} onPointerLeaveCapture={() => { }}>{'Sign Out'}</Button>
          )}
        </div>

      </div>




      <div className="flex-none">
        <label className="flex cursor-pointer gap-2 mr-5" htmlFor="theme-switch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            id="theme-switch"
            value="dark"
            className="toggle theme-controller"
            onChange={(e) =>
              document.documentElement.classList.toggle('dark', e.target.checked)
            }
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <a href="https://github.com/AlecVangilbergen/use-case-gpt-frontend" className="mr-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
        <span className="sr-only">Use-Case-GTP on GitHub</span><svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a>
      </div>
    </nav>
  );
};

export default Navbar;
