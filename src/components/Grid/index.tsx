import React from 'react'


interface Props extends React.HTMLAttributes<HTMLDivElement>{
    value?: string;
}


export const index = ({value, ...rest}:Props) => {
    return (
        <div  className="border-pink-500 text-8xl text-gray-50 border-2 flex flex-col justify-center items-center w-full h-full" {...rest}>
            {value? value == "You"? "X":"O":null}
        </div>

    )
}

export default index;
