import "./App.css";
import useRouteElement from "./useRouteElement";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
import HomePage from "./Pages/HomePage/HomePage";
function App() {
  const routeElement = useRouteElement();
  return (
    <div>
      {routeElement.props.children.type === HomePage ? null : <Header />}

      {routeElement}
      <Footer />
    </div>
  );
}

export default App;
