import { CardBack } from "./card_back";
import { CardFront } from "./card_front";
import { Background } from "./page_background_desktop";
import { useNavigate } from "react-router-dom";


export function CompleteState({ cardInfo }) {
    const navigate = useNavigate();

    return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center md:justify-start md:items-start">
        <div>
          <CardBack cvc={cardInfo.cvc}/>
        </div>
        <div className="ml-[5%] mt-[10%] md:ml-[15%] md:mt-[15%]">
          <CardFront
             name={cardInfo.name}
             number={cardInfo.number}
             expMonth={cardInfo.expMonth}
             expYear={cardInfo.expYear}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center absolute lg:w-[26%]  w-[88%] h-[47%] lg:left-[55%] lg:top-[28%] left-[6%] top-[47%]">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex item-center justify-center mb-6">
            <svg className="w-10 h-15 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="white" d="M4 10L8 14L16 6"></path>
            </svg>
        </div>
        <p className="text-2xl font-bold mb-2 text-gray-900 tracking-wide text-[#21092F]">THANK YOU!</p>
        <p className="text-base text-gray-500 mb-8 font-normal text-[#8E8593]">We've added your card details</p>
        <button 
            onClick={() => navigate("/")}
            className="bg-[#21092F] text-white rounded-lg px-4 py-3 font-medium w-full">Continue
        </button>
      </div>
    </div>
    );
}
