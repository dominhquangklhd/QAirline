import "./App.css";
import useRouteElement from "./useRouteElement";
import Header from "./CommonComponents/Header";
import Footer from "./CommonComponents/Footer";
// import Home from "./Pages/HomePage/Home";
import HomePage from "./Pages/HomePage/Homepage";
function App() {
  const routeElement = useRouteElement();
  return (
    <div>
      {routeElement.props.children.type === HomePage ? null : <Header />}
      {/* {console.log(routeElement)} */}
      {routeElement}
      <Footer />
    </div>
  );
}

export default App;
