import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { SocialLinks } from "./components/social-links";
import { Switch } from "./components/switch";


function App() {
  return(
    <div id="container">
    <Header />
    <Switch />
    <Links />
    <SocialLinks />
    <Footer />
    </div>

  );
}

export default App
