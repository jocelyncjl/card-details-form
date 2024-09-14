import { Background } from "./components/page_background_desktop";
import { CardFront } from "./components/card_front";
import { CardBack } from "./components/card_back";
import { InputForm } from "./components/input_form";
import { useState } from "react";
import { CompleteState } from "./components/complete_state";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App (){
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const handleInputChange = (field, value) => {
    setCardInfo(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  return(
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen relative overflow-hidden">
          <Background/>
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
          <div className="absolute lg:w-[26%] lg:h-[20%] w-[88%] h-[47%] lg:left-[55%] lg:top-[30%] left-[6%] top-[47%]">
              <InputForm cardInfo={cardInfo} onInputChange={handleInputChange}/>
          </div> 
          {/* <Route path="/complete" element={<CompleteState />}/> */}
        </div>
      }/>

        <Route path="/complete" element={<CompleteState cardInfo={cardInfo}/>} />

      </Routes>
  </Router>
  )
}