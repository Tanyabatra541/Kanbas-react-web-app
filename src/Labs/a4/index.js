import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "/Users/tanyabatra/Desktop/2023/Fall 2023/Web Development/Kanbas/Kanbas-react-web-app/src/Labs/a4/ReduxExamples/index.js";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
import TodoList from "./todos/TodoList";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div className="container">
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent a={1} b={3} />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject theObject={Assignment4}/>
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  );
};
export default Assignment4;