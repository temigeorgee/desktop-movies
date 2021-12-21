import "./search.scss";
// import Poster from "../../components/Poster/Poster";
import { motion } from "framer-motion";
import { staggerHalf } from "../../motionUtils";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchInputValue } from "../../redux/search/search.selectors";
import Poster from "../../component/Poster/Poster";
import Keyboard from "react-simple-keyboard";
import { useRef, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { useHistory } from "react-router";
import {
  changeSearchInputValue,
  fetchSearchResultsAsync,
} from "../../redux/search/search.actions";
import Navbar from "../../component/Navbar/Navbar";
import { Offline, Online } from "react-detect-offline";
import OfflinePage from "../OfflinePage/OfflinePage";

const Search = (searchResults) => {
  const [mini, setMini] = useState(true);
  const [layout, setLayout] = useState("default");
  const [input, setInput] = useState("");
  const [searchInputToggle, setSearchInputToggle] = useState(false);
  let mySidebarRef = useRef();
  let mainRef = useRef();
  const { results } = searchResults;
  const selectInputValue = useSelector(selectSearchInputValue);
  const history = useHistory();
  const dispatch = useDispatch();
  const keyboard = useRef();
  const searchInputRef = useRef();

  const onChange = (input) => {
    setInput(input);
    // console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (input) => {
    // const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
    dispatch(changeSearchInputValue(input));
    if (input.length > 0) {
      history.push(`/search?q=${input}`);
      dispatch(fetchSearchResultsAsync(input));
    }
    // else history.push("/browse");
  };
  const handleToggleSidebar = () => {
    if (mini) {
      console.log("opening sidebar");
      mySidebarRef.current.style.width = "180px";
      mainRef.current.style.marginLeft = "180px";
      setMini(false);
    } else {
      console.log("closing sidebar");
      mySidebarRef.current.style.width = "85px";
      mainRef.current.style.marginLeft = "85px";
      setMini(true);
    }
  };
  // console.log(onChangeInput, "onChangeInput");
  return (
    <>
      <Online>
        <div className="grid ">
          <div
            ref={mySidebarRef}
            className="sidebar space-y-14"
            onMouseOver={handleToggleSidebar}
            onMouseOut={handleToggleSidebar}
          >
            <Navbar />
          </div>

          <div className="Search-desktop" ref={mainRef}>
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              layoutName={layout}
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              theme={"hg-theme-default hg-layout-default myTheme"}
              layout={{
                default: [
                  "{space} {bksp}",
                  "a b c d e f",
                  "g h i j k l",
                  "m n o p k r",
                  "s t u v w x",
                  "y z 1 2 3 4",
                  "5 6 7 8 9 0",
                  // "{lock} a s d f g h j k l ; ' {enter}",
                ],
                shift: [
                  "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                  "{tab} Q W E R T Y U I O P { } |",
                  '{lock} A S D F G H J K L : " {enter}',
                  "{shift} Z X C V B N M < > ? {shift}",
                  ".com @ {space}",
                ],
              }}
            />
            <div className="Search">
              {/* {results && results.length > 0 && (
          <h2 className="Search__title">
            Search results for: {selectInputValue}
          </h2>
        )} */}
              <input
                value={input}
                ref={searchInputRef}
                placeholder={"Search for any Movie or Tv-Shows"}
                onChange={onChangeInput}
              />
              <motion.div
                className="Search__wrp"
                variants={staggerHalf}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {results && results.length > 0 ? (
                  results.map((result) => (
                    <Poster key={result.id} item={result} {...result} />
                  ))
                ) : (
                  <h2 className="Search__title">
                    Sorry, we searched everywhere but we did not find any movie
                    or tv-show with that title.
                  </h2>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </Online>
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
};

export default Search;
