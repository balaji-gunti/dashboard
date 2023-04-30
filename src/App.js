import Landingpage from "./components/Landingpage";
import HeroImage from "./assets/HeroImage.png";
function App() {
  return (
    <>
      <img
        src={HeroImage}
        alt="HeroBackgroundImage"
        style={{ width: "100%" }}
      />
      <Landingpage />
    </>
  );
}

export default App;
