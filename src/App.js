// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CustomButton, ListItem } from "./components/List";
import { addElement, rmvElement } from "./store/ListStore";

function App() {
  const dispatch = useDispatch();

  const [titleName, setTitleName] = useState("");

  const rList = useSelector((state) => state.rtkList.list);

  const handleClickAdd = (title) => {
    dispatch(addElement(title));
  };
  const handleClickDelete = (idx) => {
    dispatch(rmvElement(idx));
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <div className="flex flex-col min-w-dvw min-h-dvh bg-neutral-800 items-center justify-center">
        <div className="flex flex-col w-[30rem] justify-between p-3 border border-white rounded-md">
          <div className="flex flex-row w-full justify-between mb-2">
            <input
              type={"text"}
              className=" w-64 h-16 border-2 border-white text-white rounded-md bg-transparent focus:bg-slate-300 focus:text-black p-2"
              onChange={(e) => setTitleName(e.target.value)}
              value={titleName}
            />
            <CustomButton
              className="w-20 h-16 border-2 border-white text-white rounded-md bg-transparent"
              buttonName="Add"
              onClickHandler={() => handleClickAdd(titleName)}
            />
          </div>
          {rList.map((item, idx) => (
            <ListItem
              key={idx}
              className="w-full h-16 items-center justify-between flex flex-row border-2 border-white text-white rounded-md bg-transparent p-2 mt-2"
              itemTitle={item.title}
              buttonName="delete"
              buttonClickHandler={() => handleClickDelete(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
