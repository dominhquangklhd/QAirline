import Home from './Home';
import Info from './Info';
import Lounge from './Lounge';
import Search from './Search';
import Subscribers from "./Subscribers";
import Support from "./Support";
import Travelers from "./Travelers";

function HomePage() {
  return (
    <div>
        <Home></Home>
        <Search></Search>
        <Support></Support>
        <Info></Info>
        <Lounge></Lounge>
        <Travelers></Travelers>
        <Subscribers></Subscribers>
    </div>
  )
}

export default HomePage