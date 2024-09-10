import { Background } from "./components/page_background_desktop";
import { CardFront } from "./components/card_front";
import { CardBack } from "./components/card_back";



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
    </div>
  )
}