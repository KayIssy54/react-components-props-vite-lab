import React from "react";
import "../App.css"
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
     <Header name={blogData.name}/>
     <About about={blogData.about}/>
     <main>
     <ArticleList posts={blogData.posts}/>
     </main>
    </div>
  );
}

export default App;
