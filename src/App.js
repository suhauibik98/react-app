import Home from "./pages/Home";
import Report from "./pages/Report";
import Demings from "./pages/Demings";
import Demings1 from "./pages/deminges/Demings1";
import Demings2 from "./pages/deminges/Demings2";
import Demings3 from "./pages/deminges/Demings3";
import Dvideo from "./pages/deminges/video";
import Learn from "./pages/Learn";
import Project from "./pages/Project";
import Test from "./pages/Test";
import ThreeAs from "./pages/ThreeAs";
import ProcessMapping from "./pages/ProcessMapping";
import Sidebar from "./components/Sidebar";
import ConverVocTo from "./pages/convertVoc/ConverVocTo";
import Questions from "./pages/convertVoc/Questions";
import "./input.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import DevMap from "./pages/ProcessMapping/DevMap";
import Exercise from "./pages/ProcessMapping/Exercise";
import MapRules from "./pages/ProcessMapping/MapRules";
import ProcessMap from "./pages/ProcessMapping/ProcessMap";
import QuestionMap from "./pages/ProcessMapping/QuestionMap";
import Qustion from "./pages/gemba/Qustion";
import GambaBar from "./pages/gemba/GambaBar";
import VideoGemba from "./pages/gemba/VideoGemba";
import ToolSummary from "./pages/ToolSummary";

function App() {
  const [toggle, setToggle] = useState(false);
  const [bodyWidth, setBodyWidth] = useState("w-4/5");
  const [sideWidth, setsideWidth] = useState("w-1/5");

  const handelSetToggle = (to) => {
    setToggle(to);
    console.log(to);
  };

  useEffect(() => {
    if (toggle) {
      setsideWidth("w-[5%]");
      setBodyWidth("w-[95%]");
    } else {
      setsideWidth("w-1/5");
      setBodyWidth("w-4/5");
    }
  }, [toggle]);

  return (
    <>
      <div className="layout">
        <Router>
          <div className={`${"ji"}  ${sideWidth}`}>
            <Sidebar sendToProps={handelSetToggle} />
          </div>
          <div className={`${""}  ${bodyWidth}`}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/outcomes" element={<Report />}></Route>
              <Route path="/Leran" element={<Learn />}></Route>
              <Route path="/Demings" element={<Demings />}></Route>
              <Route path="/ConvertVOCtoCTQ" element={<ThreeAs />}></Route>
              <Route path="/ProcessMapping"element={<ProcessMapping />}></Route>
              <Route path="/Understanding" element={<Project />}></Route>
              <Route path="/ToolSummary" element={<ToolSummary />}></Route>
              <Route path="/Test" element={<Test />}></Route>
           

              {/* Convert VOC to CTQ */}
              <Route path="/ConverVocTo" element={<ConverVocTo />}></Route>
              <Route path="/Questions" element={<Questions />}></Route>
              {/* Defining proplem */}
              <Route path="/deminges/Demings1" element={<Demings1 />}></Route>
              <Route path="/deminges/Demings2" element={<Demings2 />}></Route>
              <Route path="/deminges/Demings3" element={<Demings3 />}></Route>
              <Route path="/deminges/video" element={<Dvideo />}></Route>
              {/* Procees maping */}
              <Route path="/Devmap"  element={<DevMap />}></Route>
              <Route path="/Exercise" element={<Exercise />}></Route>
              <Route path="/MapRules" element={<MapRules />}></Route>
              <Route path="/ProcessMap" element={<ProcessMap />}></Route>
              <Route path="/QuestionMap" element={<QuestionMap />}></Route>
              {/* Gemba */}
              <Route path="/GembaQustion" element={<Qustion />}></Route>
              <Route path="/GambaBar" element={<GambaBar />}></Route>
              <Route path="/VideoGemba" element={<VideoGemba />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
