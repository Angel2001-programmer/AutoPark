import "./App.css";
import LeasingList from "./components/LeasingList/leasingList";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import { Fragment } from "react";

function App() {
  const list = [
    {
      Image:
        "https://m.atcdn.co.uk/a/media/w540/9d426a3da3774fa78969a29ede625894.jpg",
      Make: "Vauxhall Corsa",
      Model: "1.2 GS Euro 6 5dr",
      Mileage: "0",
      Year: "2023",
      Transmission: "Manual",
      ppm: 250.0,
    },
    {
      Image:
        "https://m.atcdn.co.uk/a/media/w900/c06f0d7a087d4c6eb2575b8479a61f33.jpg",
      Make: "Ford Mustang MACH-E",
      Model: "75kWh Select Auto 5dr",
      Mileage: "0",
      Year: "2023",
      Transmission: "Automatic",
      ppm: 580.0,
    },
    {
      Image:
        "https://m.atcdn.co.uk/a/media/w900/e36b10646f5a4f409dc640122e0223e9.jpg",
      Make: "Audi A5",
      Model: "2.0 TFSI 35 Black Edition S Tronic Euro 6 (s/s) 2dr",
      Mileage: "0",
      Year: "2023",
      Transmission: "Automatic",
      ppm: 320.0,
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/leasing" element={<LeasingList data={list} />}></Route>
    </Routes>
  );
}

export default App;
