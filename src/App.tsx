import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import PostItems from "./components/PostItems";
import { Provider } from "./providers";

function App() {
  return (
    <Provider>
      <div className="page-wrapper">
        <PostItems />
      </div>
    </Provider>
  );
}

export default App;
