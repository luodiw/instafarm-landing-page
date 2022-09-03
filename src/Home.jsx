import "./assets/css/index.css";
import { CategoryArea } from "./components/CategoryArea";
import { CategoryBelow } from "./components/CategoryBelow";
import { Footer } from "./components/Footer";
import { GridWrapper } from "./components/GridWrapper";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PromiseWrapper } from "./components/PromiseWrapper";

function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      <PromiseWrapper />
      <GridWrapper />
      <CategoryArea />
      {/* <CategoryBelow /> */}
      <Footer />
    </div>
  );
}

export default Home;
