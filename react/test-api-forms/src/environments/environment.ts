export const environment = {
    production: false,
	errorsCode: {
		identificationNotFound: "ERROR_IDENTIFICATION_NOT_FOUND",
		connectionAborted: {
			code: "ECONNABORTED",
			message: "Conexión Abortada"
		},
		networkError: {
			code: "Network Error",
			message: "Error de red"
		}
	},
	product: {
		getByAdvanceFiltersCodes: `get-by-advance-filters-codes?channelCode={0}&insuranceTypeCode={1}&insuranceCarrierCode={2}&contractTypeCode={3}`,
		baseUrlKey: "PRODUCT_BASE_URL",
		channelCodeKey: "PRODUCT_CHANNEL_CODE",
		insuranceTypeCodeKey: "PRODUCT_INSURANCE_TYPE_CODE",
		insuranceCarrierCodeKey: "PRODUCT_INSURANCE_CARRIER_CODE",
		contractTypeCodeKey: "PRODUCT_CONTRACT_TYPE_CODE",
		timeout: 20000,
		productCodeKey: "PRODUCT_PRODUCT_CODE",
		planCodeKey: "PRODUCT_PLAN_CODE",
		wayCodeKey: "PRODUCT_WAY_CODE",
		paymentPeriodicityCodeKey: "PRODUCT_PAYMENT_PERIODICITY_CODE",
		paymentMethodCodeKey: "PRODUCT_PAYMENT_METHOD_CODE"
	},
	subscription: {
		createComplete: "create-complete",
		baseUrlKey: "SUBSCRIPTION_BASE_URL",
		timeout: 30000
	},
	sale: {
		registerSale: "sale/registerSale",
		confirmPayment: "sale/confirmPayment",
		finalizeSale: "sale/finalizeSale",
		baseUrlKey: "SALE_BASE_URL",
		timeout: 30000,
		vigencyTimeInYears: 1
	},
	integration: {
		createContract: "nova-services/gps/document/create?referenceId={0}",
		findPerson: "person/get?idCard={0}",
		baseUrlKey: "INTEGRATION_BASE_URL",
		createOtp: "otp/create",
		checkOtp: "otp/check",
		validTime: 300,
		maxNumberAttemptsCheckOtp: 3,
		maxNumberAttemptsCreateContract: 3,
		timeout: 30000
	},
	messengerService: {
		welcome: "email/send/welcome",
		baseUrlKey: "MESSENGER_SERVICE_BASE_URL",
		template: "WELCOME_MAIL_DESGRAVAMEN_RESURRECTION",
		timeout: 30000
	},
	reactPrefixKey: "REACT_APP_"
  };
  
  