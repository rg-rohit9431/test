import { BrowserRouter, Routes, Route } from "react-router-dom";


//css
import './App.css'

//pages
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import JoinAsPartner from './pages/JoinAsPartner';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs'
import BlogSingle from './pages/BlogSingle'
import TermsCondtion from './pages/Terms&Condtion';
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUs from './pages/ContactUs';
import RestaurantConsole from './pages/RestaurantConsole';
import MerchantProfile from './pages/MerchantProfile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/joinAsPartner" element={<JoinAsPartner />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blogDetail/:id" element={<BlogSingle />} />

          {/* merchant profile  */}
          <Route path="/profile/merchant/:id" element={<MerchantProfile />} />

          {/* contact,terms and privacy */}

          <Route path="/termsCondition" element={<TermsCondtion />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* First Target Restaurant console */}
          <Route path="/restaurant" element={<RestaurantConsole />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
