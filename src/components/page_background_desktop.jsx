import BackgroundPicture from "../images/bg-main-desktop.png";
import BackgroundPictureMobile from "../images/bg-main-mobile.png";

export function Background() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        <div
          className="hidden md:block lg:w-[34%] lg:h-screen bg-cover bg-top"
          style={{ backgroundImage: `url(${BackgroundPicture})` }}
        ></div>
        <div
          className="block md:hidden w-full h-[34%] bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundPictureMobile})` }}
        ></div>
        <div className="w-full md:w-2/3 h-full"></div>
      </div>
    );
  }
