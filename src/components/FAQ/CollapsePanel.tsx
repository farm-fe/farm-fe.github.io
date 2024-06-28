import React, { useState } from 'react';

const CollapsePanel = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          aria-controls="radix-:ri:"
          aria-expanded={!collapsed}
          id="radix-:rh:"
          className="flex 
          items-center 
          justify-between
          px-5
          py-4 
          w-full 
          font-medium 
          text-sm
          border-t-0 border-l border-r border-b
          border-solid
         dark:border-l-white dark:border-r-white
          transition 
          duration-150 ease-in-out"
          onClick={toggleCollapse}
        >
          {title}
          <svg
            className={`h-5 w-5 transform ${collapsed ? 'rotate-0' : 'rotate-180'} transition duration-200 ease-in-out`}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 
              6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591
               11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 
               6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {!collapsed && (
        <div className="p-4 
         border-t-0 border-l border-r border-b 
         border-solid 
         dark:border-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsePanel;
