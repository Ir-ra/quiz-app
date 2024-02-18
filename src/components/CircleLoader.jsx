import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

export const CirculeLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [progress]);


  return (
    <div className="loader-container">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
          id="grey"
            cx="50"
            cy="50"
            r="20"
            fill="transparent"
            strokeWidth="5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            
            stroke="#7a7a7a"
          />
          
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="transparent"
            strokeWidth="5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            
            stroke="#76e5b1"
            style={{
              strokeDasharray: '126', // (2 * Pi * радіус)
              strokeDashoffset: `${126 - (progress / 100) * 126}`,
            }}
          />
        </svg>


        <span className="loader-text">{progress}%</span>
      </div>

      <FormattedMessage id="loading" />
      {/* <button>
        <NavLink to='/email'>
        next
        </NavLink>
      </button> */}
    </div>

  )
}