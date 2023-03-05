import { useState } from "react";
// import InfiniteScrollerView from "./containers/InfiniteScrollerView";

import WindowListView from "./containers/WindowListView";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WindowListView></WindowListView>
    </div>
  );
}

export default App;
