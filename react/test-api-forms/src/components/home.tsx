import { SubscriptionPage } from "./subscription-page";
import { ProductPage } from "./product-page";
import { SalePage } from "./sale-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";
import { Thanks } from "./thanks-page";
import { Error } from "./error-page";
import { OtpPage } from "./otp-page";

export const Home = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/subscription" element={<SubscriptionPage />} />
                    <Route path="/sale" element={<SalePage />} />
                    <Route path="/thanks" element={<Thanks />} />
                    <Route path="/error" element={<Error />} />
                    <Route path="/otp" element={<OtpPage />} />
                    <Route path="/*" element={<ProductPage />} />
                </Routes>
            </Router>
        </>
    )
}
