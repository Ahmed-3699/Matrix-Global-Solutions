import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Career from "./Components/Career/Career";
import Contact from "./Components/Contact/Contact";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermOfUse from "./Components/TermOfUse/TermOfUse";
import ContactCenter from "./Components/ContactCenter/ContactCenter";
import OffShore from "./Components/OffShoreTalentPool/OffShore";
import DispatchOrder from "./Components/DispatchOrderManagement/DispatchOrder";
import TaxiDispatch from "./Components/TaxiDispatch/TaxiDispatch";
import HomeSecurity from "./Components/HomeSecurity/HomeSecurity";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DashBoard from "./Components/DashBoard/DashBoard";
import PostJob from "./Components/PostJob/PostJob";
import SignUp from './Components/Signup-Login/SignUp'
import SignIn from './Components/Signup-Login/SignIn'
import ChangePassword from './Components/Signup-Login/ChangePassword'
import ForgetPassword from './Components/Signup-Login/ForgetPassword'
import Redirect from './Components/Signup-Login/Redirect'
import UpdatePostJobs from "./Components/PostJob/UpdatePostJobs";
import favicon from './Images/WhatsApp Image 2024-08-15 at 6.49.20 PM.jpeg';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    document.head.appendChild(link);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"/about"} exact={true} element={<About />} />
          <Route path={"/services"} exact={true} element={<Services />} />
          <Route path={"/career"} exact={true} element={<Career />} />
          <Route path={"/contact"} exact={true} element={<Contact />} />
          <Route path={"/privacy-policy"} exact={true} element={<PrivacyPolicy />} />
          <Route path={"/term-of-use"} exact={true} element={<TermOfUse />} />
          <Route path={"/contact-center-as-a-service"} exact={true} element={<ContactCenter />} />
          <Route path={"/offshore-talent-pool"} exact={true} element={<OffShore />} />
          <Route path={"/dispatch-order-management"} exact={true} element={<DispatchOrder />} />
          <Route path={"/taxi-dispatch"} exact={true} element={<TaxiDispatch />} />
          <Route path={"/home-security"} exact={true} element={<HomeSecurity />} />
          <Route path={"/admin/dashboard/001"} exact={true} element={<DashBoard />} />
          <Route path={"/admin/post-job"} element={<PostJob />} />
          <Route path={"/admin/update-post-jobs/:id"} element={<UpdatePostJobs />} />

          <Route path={"/signup/admin/for-dashboard"} exact={true} element={<SignUp />} />
          <Route path={"/signin/admin/for-dashboard"} exact={true} element={<SignIn />} />
          <Route path={"/changepassword"} exact={true} element={<ChangePassword />} />
          <Route path={"/forgetpassword"} exact={true} element={<ForgetPassword />} />
          <Route path={"/redirect/:token"} exact={true} element={<Redirect />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
