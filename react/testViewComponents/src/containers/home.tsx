import { Subscription } from "./subscription";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from "./navbar";
import { Thanks } from "./thanks";
import { Error } from "./error";
import { Otp } from "./otp";
import Product from "./product";
import { Sale } from "./sale";

export const Home = () => {
  
    return (
        <>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/sale" element={<Sale trackingId="" />} />
                    <Route path="/thanks" element={<Thanks />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/otp" element={<Otp />} />
                    <Route path="/*" element={<Product />} />
                </Routes>
            </Router>
        </>
    )
}
