import "./App.css";
import User from "./User";
import Admin from "./Admin";
import { AppProvider, Page, Card, Button, Form } from "@shopify/polaris";
import TransparentModal from "./components/TransparentModal";
import Welcome from "./components/Welcome";
import { useState, useEffect } from "react";
import { dblClick } from "@testing-library/user-event/dist/click";
import TransitionEndBox from "./components/TransitionEndBox";
import DemoCounter from "./components/DemoCounter";
import DemoOwlCarousel from "./components/OwlCarousel/DemoOwlCarousel";
import ZoomImage from "./components/ImageMegnifier/ZoomImage";
import ZoomImage2 from "./components/ImageMegnifier/ZoomImage2";
import ModalAnimation from "./components/ModalAnimation";
import BindingEvent from "./components/BindingEvent";
import FormHandeling from "./components/FormHandeling";
import Forms from "./components/Forms";
import ReactImageMagnifire from "./components/ReactImageMagnifire";
import UseSyncExternalStore from "./components/UseSyncExternalStore";
import UseGlobalState from "./components/UseGlobalState";
import UseTransition from "./components/UseTransition";
import A from "./components/HOC/A";
import B from "./components/HOC/B";
import MainContex from "./components/CreateContex/MainContex";
import UsePrevious from "./components/UsePrevious";
import UseEffectvsUseLayout from "./components/UseEffectvsUseLayout";
import UseIdForm from "./components/useIDHook/UseIdForm";
function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <h2>React Testing Lab</h2> */}

        {/* <User data={{ name: "Saurabh Gupta", age: 20 }} /> */}

        {/* <TransparentModal admin={admin} /> */}

        {/* <Welcome /> */}

        {/* Todo Add */}
        {/* <input
          type="text"
          id="usrName"
          onChange={(e) => {
            state["username"] = e.target.value;
          }}
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          set a new state
        </button>
        <div className="showStuden">
          <ul>
            {state.map((student, i) => {
              return <li key={i}>{student.username}</li>;
            })}
          </ul>
        </div> */}

        {/* Transition Box Animation */}
        {/* <TransitionEndBox /> */}

        {/* <DemoCounter /> */}

        {/* <DemoOwlCarousel /> */}
        {/* <ZoomImage /> */}
        {/* <ZoomImage2 /> */}
        {/* <ModalAnimation /> */}
        {/* <BindingEvent /> */}
        {/* <FormHandeling /> */}
        {/* <Forms /> */}
        {/* <ReactImageMagnifire /> */}
        {/* <UseSyncExternalStore /> */}
        <UseGlobalState />
        {/* <UseTransition /> */}
        {/* Higer Order Component Example */}
        {/* <A name="A" />
        <B name="B" /> */}
        {/* <MainContex /> */}
        {/* <UsePrevious /> */}
        {/* <UseEffectvsUseLayout /> */}
        {/* <UseIdForm /> */}
      </div>
    </AppProvider>
  );
}

export default App;
