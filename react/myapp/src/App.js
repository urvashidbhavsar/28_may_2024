import './App.css';
import External from './ApplyCss/External';
import Inline from './ApplyCss/Inline';
import Internal from './ApplyCss/Internal';
import Module from './ApplyCss/Module';
import Fragmentex from './Fragment/Fragmentex';
// import Classex from './Component/Classex';
// import Functionex from './Component/Functionex';
// import Applyex from './Expression/Applyex';
// import Message from './Message';
// import Msg from './Msg';

function App() {
  return (
    // render UI component
    <div>
      {/* <h1>Hello</h1> */}
      {/* <Message />
      <Msg></Msg>
      <Classex />
      <Functionex /> */}
      {/* <Applyex /> */}
      <Inline />
      <Internal />
      <External />
      <Module />
      <Fragmentex />
    </div>
  );
}

export default App;
