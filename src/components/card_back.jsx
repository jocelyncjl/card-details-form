import React from "react";
import CardBackImage from '../images/bg-card-back.png';

export function CardBack(){
    return (
        <div className="absolute z-10 w-[76%] h-[22%] lg:w-[27%] lg:h-[27%] rounded-lg overflow-hidden shadow-lg
                left-[19%] top-[4%] lg:left-[20%] lg:top-[53%]">
                    <div className="w-full h-full relative">
                        <img src={CardBackImage} alt="Card Back" className="w-full h-full object-cover"/>
                        <div className="absolute left-[85%] top-[44%] lg:left-[80%] lg:top-[45%]">
                            <p className="text-white text-[12px] tracking-widest">000</p>
                        </div>
                    </div>  
        </div>
    )
}

