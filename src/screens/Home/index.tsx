import React from 'react';
import { Link, RouteProps } from 'react-router-dom';
import Logo from '../../components/Logo'



const index = () => {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center bg-purple-800">
            <div className="w-2/3 lg:w-1/2 flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center text-yellow-500 w-full text-7xl lg:text-8xl mb-20">
                <Logo />
                </div>
                <div className="flex flex-col">
                        <Link to="/play" className="text-5xl no-underline text-yellow-600 hover:scale-110 duration-200 transform transition-all">Play</Link>
                </div>
            </div>
      </div>
  )
};

export default index;
