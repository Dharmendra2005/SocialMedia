import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Createpost from "./components/createpost";
import Postlist from "./components/postlist";
import { useState } from "react";
import PostlistProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectTab] = useState("Home");

  return (
    <PostlistProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectTab={setSelectTab} />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <Postlist /> : <Createpost />}
        <Footer />
      </div>
    </div>
    </PostlistProvider>
  );
}

export default App;
