import { Background } from "./components/page_background_desktop";
import { CardFront } from "./components/card_front";
import { CardBack } from "./components/card_back";
import { InputForm } from "./components/input_form";



export default function App (){
  return(
    <div className="min-h-screen relative overflow-hidden">
      <Background/>
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center md:justify-start md:items-start">
        <div>
          <CardBack/>
        </div>
        <div className="ml-[5%] mt-[10%] md:ml-[15%] md:mt-[15%]">
          <CardFront/>
        </div>
      </div>
      <div className="absolute lg:w-[26%] lg:h-[20%] w-[88%] h-[47%] lg:left-[55%] lg:top-[30%] left-[6%] top-[47%]">
          <InputForm/>
      </div>
    </div>
  )
}