import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import EditPostPage from "./pages/EditPostPage";
import HomePage from "./pages/HomePage";
import ViewPostPage from "./pages/ViewPostPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewPostPage />} />        
        <Route path="/posts/:id" element={<ViewPostPage />} /> 
        <Route path="/posts/create" element={<CreatePostPage />} />
        <Route path="/posts/:id/edit" element={<EditPostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App