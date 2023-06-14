import {  Footer  } from "./components";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
// import Transaction from "./Pages/Transaction";
import Service from "./Pages/Service";
import Central from "./Pages/Central/Centralpage";
import Register from "./Pages/Central/RegisterGov";
import Login from "./Pages/State/LoginState";
import RegisterDept from "./Pages/State/RegisterDept";
import AllGovtdetails from "./Pages/Central/AllGovtdetails";
import Governmentpage from "./Pages/State/GovernmentPage";
import Departmentpage from "./Pages/Department/DepartmentPage";
import VendorPage from "./Pages/Vendor/VendorPage";
import RegisterVendor from "./Pages/Vendor/RegisterVendor";
import TrackProject from "./Pages/Tracking";
import CentralTracking from "./Pages/CentralTracking";
import ApproveVendor from "./Pages/Department/ApproveVendor";

const App = () => (
  <div className="min-h-screen">
    {/* <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer /> */}

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Service />} />
      {/* <Route path="/transactions" element={<Transaction />} /> */}
      <Route path="/central" element={<Central />} />
      <Route path="/register" element={<Register />} />
      <Route path="/loginstate" element={<Login />} />
      <Route path="/registerdept" element={<RegisterDept />} />
      <Route path="/allgovtdetails" element={<AllGovtdetails />} />
      <Route path="/government" element={<Governmentpage />} />
      <Route path="/department" element={<Departmentpage />} />
      <Route path="/vendor" element={<VendorPage />} />
      <Route path="/registervendor" element={<RegisterVendor />} />
      <Route path="/track" element={<TrackProject />} />
      <Route path="/approvevendor" element={<ApproveVendor />} />
      <Route path="/centraltrack" element={<CentralTracking />} />
    </Routes>
  </div>
);

export default App;


{/* <Routes>
<Route path="/" element={<Homepage />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Signup />} />
<Route path="/feed" element={<Feed />} />
<Route path="/newreview" element={<Reviews />} />
<Route path="/review/:id" element={<SingleReview />} />
</Routes> */}