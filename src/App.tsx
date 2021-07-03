import React, { useState } from "react";
import AppHeader from "./components/header/AppHeader";
import AppToolbar from "./components/toobar/AppToolbar";
import Repositories from "./page/Repositories";
import Developers from "./page/Developers";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppHeader />
        <div className="content-style">
          <AppToolbar
            selectedItem={selectedItem}
            setSelectedItem={(e: number) => setSelectedItem(e)}
          />
          {selectedItem === 0 ? <Repositories /> : <Developers />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
