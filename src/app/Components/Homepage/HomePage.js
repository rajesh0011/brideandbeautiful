
import dynamic from "next/dynamic";
import StatsCounter from "./Counter";
import BeSpokeSlider from "./BeSpokeSlider";

const MainHeader = dynamic(() => import("../../Common/MainHeader"));
const BannerSec = dynamic(() => import("./BannerSec"));
const AboutSec = dynamic(() => import("./AboutSec"));
const BallGownsSlider = dynamic(() => import("./BallGownsSlider"));
const ALineGownSlider = dynamic(() => import("./ALineGownSlider"));
const FittedGownSlider = dynamic(() => import("./FittedGownSlider"));
const MediaNewsSlider = dynamic(() => import("./MediaNewsSlider"));
const FAQHome = dynamic(() => import("./FAQHome"));


const HomePage = () => {
  return (
    <>

      <MainHeader></MainHeader>
      <BannerSec></BannerSec>
      <AboutSec></AboutSec>
      <BallGownsSlider></BallGownsSlider>
      <ALineGownSlider></ALineGownSlider>
      <FittedGownSlider></FittedGownSlider>
      <BeSpokeSlider></BeSpokeSlider>
      <FAQHome></FAQHome>
      <StatsCounter></StatsCounter>
      <MediaNewsSlider></MediaNewsSlider>
      
    </>
  )
}

export default HomePage
