import FirstSection from "../../components/FirstSection/FirstSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import FifthSection from "../../components/FifthSection/FifthSection";
import SixthSection from "../../components/SixthSection/SixthSection";
import Alert from "../../components/Alert/Alert";
import YoutubeVideoContainer from "../../components/YoutubeVideos/YoutubeVideoContainer";

export default function Main() {
  return (
    <main>
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeVideoContainer />
    </main>
  );
}
