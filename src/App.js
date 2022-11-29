import "./App.css";
import User from "./User";
import Admin from "./Admin";
import { AppProvider, Page, Card, Button } from "@shopify/polaris";
import TransparentModal from "./components/TransparentModal";
import Anu from "./components/userImages/anu.jpg";
import Saurabh from "./components/userImages/saurabh.jpg";
import Kashif from "./components/userImages/Kashif.jpeg";
import Akanksha from "./components/userImages/akanksha.jpeg";
import Rajnandani from "./components/userImages/rajnandani.jpeg";
import Kallu from "./components/userImages/kallu.jpeg";
import Horse from "./components/userImages/horse.jpeg";
import Nanbabu from "./components/userImages/nanbabu.jpg"
function App() {
  const admin = [
    {
      userId: 101,
      username: "Anu",
      imgUrl: "https://i.imgur.com/Ao5L3zJ.jpg",
      contact: 2923434554,
      address: "123/43 California USA",
      office: "Cedcommerce",
      work: "Developer",
    },
    {
      userId: 102,
      username: "Saurabh",
      imgUrl: "https://i.imgur.com/JrrPmal.jpg",
      contact: 8546251542,
      address: "123/43 Phaphamau Prayagraj",
      office: "Cedcommerce",
      work: "Web Designer",
    },
    {
      userId: 103,
      username: "Kashif",
      imgUrl: "https://i.imgur.com/2BagBi2.jpg",
      contact: 4521485245,
      address: "123/43 Allapur Allahabad",
      office: "Uber India",
      work: "Manager",
    },
    {
      userId: 104,
      username: "Akanksha",
      imgUrl: "https://i.imgur.com/Jb5XJLN.jpg",
      contact: 5658226548,
      address: "521/43 Uttar Pradesh Prayagraj",
      office: "Oyo Private Limited",
      work: "Influencer",
    },
    {
      userId: 105,
      username: "Rajnandani",
      imgUrl: "https://i.imgur.com/mBS3o8U.jpg",
      contact: 5852226548,
      address: "522/53 Uttar Pradesh Prayagraj",
      office: "Tata",
      work: "Developer",
    },
    {
      userId: 106,
      username: "Kallu Dada",
      imgUrl: "https://i.imgur.com/2arjtab.jpg",
      contact: 8082565486,
      address: "522/53 Uttar Pradesh Prayagraj",
      office: "CRPF Office",
      work: "Indian Aramy",
    },
    {
      userId: 107,
      username: "Horse",
      imgUrl: "https://i.imgur.com/I2R8O7K.jpg",
      contact: 4204204205,
      address: "962/58 Beli Hospital Prayagraj",
      office: "Tata Birla",
      work: "Manager",
    },
    {
      userId: 108,
      username: "Nanbabu",
      imgUrl: "https://i.imgur.com/eTBVSo2.jpg",
      contact: 8226676548,
      address: "962/58 Uttar Pradesh Prayagraj",
      office: "Cedcommerce",
      work: "Develper",
    },
  ];
  
  return (
    <AppProvider>
      <div className="App">
        <h2>React Shopify Polaris Comonets Testing Modal View</h2>
        {/* <User data={{ name: "Saurabh Gupta", age: 20 }} /> */}
        <TransparentModal admin={admin} />
      </div>
    </AppProvider>
  );
}

export default App;
