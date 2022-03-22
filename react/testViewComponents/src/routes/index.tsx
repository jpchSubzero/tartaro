import { Routes, Route } from "react-router-dom";
// import CoverageDetail from "../containers/coverageDetail";
// import ContratModality from "../containers/contratModality";
// import RequestIdentification from "../containers/requestIdentification";
// import RequestBriefFacts from "../containers/requestBriefFacts";
// import RequestAddDependents from "../containers/requestAddDependents";
// import RequestAgeGender from "../containers/requestAgeGender";
// import HealthLayout from "../components/HealthLayout/index";
// import ErrorRequestIdentification from "../containers/errorRequestIdentification";
// import SelectPlan from "../containers/selectPlan";
// import PurchaseSummary from "../containers/purchaseSummary";
// import PaymentSummary from "../containers/paymentSummary";
// import WeCallYou from "../containers/youAreJoined";
// import HealthError500 from "../components/HealthError500";
// import HealthProtectRoute from "../components/HealthProtectRoute/index"

import "../scss/index.scss";

//configuration
import configuration from "../api/data/configuration.json";
// import PaymentProcessPage from "../containers/payment/PaymentProcessPage";
// import PaymentSuccess from "../containers/payment/status/PaymentSuccess";
// import PaymentParamProcess from "../containers/payment/PaymentParamProcess";
// import PaymentError from "../containers/payment/status/PaymentError";
// import PaymentPending from "../containers/payment/status/PaymentPending";
// import CurrentInsurance from "../containers/payment/status/CurrentInsurance";

const getRouteByCodeStep = (codeStep) => {
	return configuration.protectedRoutes.find(
		item => item.codeStep === codeStep).stepRoute;
}

export const homeRoute = getRouteByCodeStep("homeRoute");
export const coverageRoute = getRouteByCodeStep("coverageRoute");
export const contratRoute = getRouteByCodeStep("contratRoute");
export const requestIdentificationRoute = getRouteByCodeStep("requestIdentificationRoute");
export const requestAgeGenderRoute = getRouteByCodeStep("requestAgeGenderRoute");
export const errorIdentificationRoute = getRouteByCodeStep("errorIdentificationRoute");
export const selectPlanRoute = getRouteByCodeStep("selectPlanRoute");
export const requestBriefFacts = getRouteByCodeStep("requestBriefFacts");
export const requestAddDependents = getRouteByCodeStep("requestAddDependents");
export const purchaseSummaryRoute = getRouteByCodeStep("purchaseSummaryRoute");
export const paymentSummary = getRouteByCodeStep("paymentSummary");
export const userJoined = getRouteByCodeStep("userJoined");
export const paymentProcessRoute = getRouteByCodeStep("paymentProcess");
export const paymentParamProcessRoute = getRouteByCodeStep("paymentParamProcess");
export const paymentSuccessRoute = getRouteByCodeStep("paymentSuccess");
export const paymentErrorRoute = getRouteByCodeStep("paymentError");
export const paymentPendingRoute = getRouteByCodeStep("paymentPending");
export const currentInsuranceRoute = getRouteByCodeStep("currentInsurance");


const AppRoutes = () => (
	<></>

/*	<HealthLayout>
		<Routes>
			<Route
				path={coverageRoute}
				element={<CoverageDetail />} />
			<Route
				path={contratRoute}
				element={
					<HealthProtectRoute >
						<ContratModality />
					</HealthProtectRoute>
				}
			/>
			<Route
				path={requestIdentificationRoute}
				element={
					<HealthProtectRoute >
						<RequestIdentification />
					</HealthProtectRoute>
				}
			/>
			<Route
				path={requestAgeGenderRoute}
				element={
					<HealthProtectRoute >
						<RequestAgeGender />
					</HealthProtectRoute>
				}
			/>

			<Route
				path={errorIdentificationRoute}
				element={
					<ErrorRequestIdentification />
				}
			/>

			<Route
				path={selectPlanRoute}
				element={
					<HealthProtectRoute >
						<SelectPlan />
					</HealthProtectRoute>
				}
			/>

			<Route
				path={requestBriefFacts}
				element={
					<HealthProtectRoute >
						<RequestBriefFacts />
					</HealthProtectRoute>
				}
			/>

			<Route
				path={requestAddDependents}
				element={
					<HealthProtectRoute >
						<RequestAddDependents />
					</HealthProtectRoute>
				}
			/>

			<Route
				path={purchaseSummaryRoute}
				element={
					<HealthProtectRoute >
						<PurchaseSummary />
					</HealthProtectRoute>
				}
			/>
			<Route
				path={paymentSummary}
				element={
					<HealthProtectRoute >
						<PaymentSummary />
					</HealthProtectRoute>
				}
			/>
			<Route
				path={userJoined}
				element={<WeCallYou />} />

			<Route path="/*" element={<HealthError500 />} />

			<Route path={paymentProcessRoute}
				element={<PaymentProcessPage />}
			/>

			<Route path={paymentParamProcessRoute}
				element={<PaymentParamProcess />}
			/>
			<Route path={paymentSuccessRoute}
				element={<PaymentSuccess />}
			/>
			<Route path={paymentErrorRoute}
				element={<PaymentError />}
			/>
			<Route path={paymentPendingRoute}
				element={<PaymentPending />}
			/>

			<Route path={currentInsuranceRoute}
				element={<CurrentInsurance />}
			/>

		</Routes>
	</HealthLayout>
*/
)

export default AppRoutes;

