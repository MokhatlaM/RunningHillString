import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Playground from "./Pages/Playground/Playground";
import Layout from "./Shared/Layout";
import History from "./Pages/History/History";
import Logs from "./Pages/Logs/Logs";
import StatusCode from "./Pages/Error/StatusCode";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route path="/playground" element={<Playground />} />
          <Route path="/history" element={<History />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="*" element={<StatusCode />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
