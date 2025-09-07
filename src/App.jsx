import Hello from "./component/classcompoents";
import HelloWorld from "./component/helloworld";
import Css from "./component/css";
import Props from "./component/props";
import StateExample from "./component/state";
import MsgChange from "./component/onchangemsgchange";
import List from "./component/list"

function App() {

  return (<>
    <HelloWorld />
    <Hello />
    <Css />
    <Props title="this is title"/>
    <StateExample /> <br/><br/>
    <MsgChange />
    <List />
  </>
  );
} 

export default App;
