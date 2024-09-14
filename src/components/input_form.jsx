import { useNavigate } from "react-router-dom";

export function InputForm({cardInfo, onInputChange}){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/complete");
    }

    // 添加这个检查
    if (!cardInfo) {
        return <div>Loading...</div>; // 或者其他适当的加载状态
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col items-left">
            <div className="mb-[4%]">
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#21092F]">CARDHOLDER NAME</p>
                <input 
                type="text" 
                value={cardInfo.name}
                onChange={(e) => onInputChange("name", e.target.value)}
                placeholder="e.g. Jane Appleseed" 
                className="w-full h-[45px] px-4 rounded-lg border border-[#DEDDDF] text-[18px] placeholder-[#8E8593]"
                />
            </div>

            <div className="mb-[4%]">
                <p className="text-[11px] font-medium tracking-[0.1em] text-[#21092F]">CARD NUMBER</p>
                <input 
                type="text" 
                placeholder="e.g. 1234 5678 9123 0000" 
                value={cardInfo.number}
                onChange={(e) => onInputChange("number", e.target.value)}
                className="w-full h-[45px]  px-4 rounded-lg border border-[#DEDDDF] text-[18px] placeholder-[#8E8593]
                "/>
            </div>
        
            <div className="flex flex-row mb-[8%]">
                <div className="flex flex-col items-left mr-4 flex-1">
                    <p className="text-[11px] font-medium tracking-[0.1em] text-[#21092F]">EXP. DATE (MM/YY)</p>
                    <div className="flex flex-row">
                        <input 
                        type="text" 
                        placeholder="MM" 
                        className="w-[70px] mr-2 h-[45px]  px-4 rounded-lg border border-[#DEDDDF] text-[18px] placeholder-[#8E8593]"
                        value={cardInfo.expMonth}
                        onChange={(e) => onInputChange("expMonth", e.target.value)}
                        />
                        <input 
                        type="text" 
                        placeholder="YY" 
                        className="w-[70px] h-[45px]  px-4 rounded-lg border border-[#DEDDDF] text-[18px] placeholder-[#8E8593]"
                        value={cardInfo.expYear}
                        onChange={(e) => onInputChange("expYear", e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-left flex-1">
                    <p className="text-[11px] font-medium tracking-[0.1em] text-[#21092F]">CVC</p>
                    <input 
                    type="text" 
                    placeholder="e.g. 123" 
                    className="w-full h-[45px]  px-4 rounded-lg border border-[#DEDDDF] text-[18px] placeholder-[#8E8593]"
                    value={cardInfo.cvc}
                    onChange={(e) => onInputChange("cvc", e.target.value)}
                    />
                </div>
            </div>

            <button type="submit" className="w-full h-[50px] rounded-lg bg-[#21092F] text-white text-[18px]">Confirm</button>
        
        </form>
    )
}