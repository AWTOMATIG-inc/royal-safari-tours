import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollButton from "./components/ScrollButton";
import Routers from "./routes/Routers";
export default function App() {
  return (
    <>
      <Header />
      <Routers />
      <Footer />
      <ScrollButton />
    </>
  );
}
