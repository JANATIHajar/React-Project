import Dashbord from "./Pages/Dashbord/Dashbord";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddClients from "./Pages/Clients/AddClients";
import AddReservation from "./Pages/Reservation/AddReservation";
import CalendarPage from "./Pages/Calendrie/CalendarPage";
import LoginPage from "./Pages/login/LoginPage";
function App() {
  return (
      <div className="app">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/terrain" element={<Dashbord />} />
                     <Route path="/client" element={<AddClients />} />
                    <Route path="/reservation" element={<AddReservation />} />
                  <Route path="/calendrie" element={<CalendarPage/>} />


              </Routes>
          </BrowserRouter>/
      </div>


  );
}

export default App;
