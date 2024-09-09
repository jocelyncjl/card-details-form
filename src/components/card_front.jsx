import React from "react";
import CardFrontImage from '../images/bg-card-front.png';

export function CardFront(){
    return (
        <div className="absolute z-10 w-[76%] h-[22%] lg:w-[27%] lg:h-[27%] rounded-lg overflow-hidden shadow-lg
                left-[4%] top-[18%] lg:left-[14%] lg:top-[21%]">
                    <div className="w-full h-full relative">
                        <img src={CardFrontImage} alt="Card Front" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 p-7 flex flex-col justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="lg:w-9 lg:h-9 w-8 h-8 rounded-full bg-white"></div>
                                <div className="lg:w-4 lg:h-4 w-3 h-3 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <p className="text-white lg:text-[23px] text-[16px] tracking-[0.2em] mb-6">0000 0000 0000 0000</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-white lg:text-[12px] text-[9px] uppercase tracking-widest">Jane Appleseed</p>
                                    <p className="text-white lg:text-[12px] text-[9px] tracking-widest">00/00</p>
                                </div>
                            </div>
                        </div>
                    </div>  
        </div>
    )
}

