const routes = {
    home: { name: "Home", path: "/" },
    about: { name: "About", path: "/about" },
    contact: { name: "Contact", path: "/contact" },
   
  };
  
  export { routes };
  
  const loggedInUser = JSON.parse(localStorage.getItem("userProfile"));
  {"Moin"}
  export const menuItems = [
    
    {
      name: "Home",
      link: "/logedinhome",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      name: "AI Medical Scan",
      link: "/image-detection",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25v19.5M2.25 12h19.5"
          />
        </svg>
      ),
    },
    {
      name: "My Profile",
      link: `/userprofile/${loggedInUser.id}`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12Zm0 0c-4.142 0-7.5 3.358-7.5 7.5M19.5 19.5c0-4.142-3.358-7.5-7.5-7.5"
          />
        </svg>
      ),
    },
    {
      name: "Medicine Insights",
      link: "/medicineinfo",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 6h-15a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19.5 6Zm-15 0v-1.5a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5V6m-7.5 3v6"
          />
        </svg>
      ),
    },
    {
      name: "Find a Doctor",
      link: "/viewsdoc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25h3.75m-1.875-1.875V15m-6.375-4.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Zm-3.75 3.75c-2.486 0-4.5 2.014-4.5 4.5v1.5h9v-1.5c0-2.486-2.014-4.5-4.5-4.5ZM17.25 21.75v-1.5c0-2.486 2.014-4.5 4.5-4.5h.75v1.5c0 2.486-2.014 4.5-4.5 4.5h-.75Z"
          />
        </svg>
      ),
    },
    {
      name: "Medical Assistant",
      link: "/chat",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75v10.5m5.25-5.25H6.75"
          />
        </svg>
      ),
    },
  ];
  
