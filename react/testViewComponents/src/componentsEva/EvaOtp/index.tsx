import { useState } from "react";
import otpStyles from "./EvaOtp.module.scss";
import ErrorIcon from "@material-ui/icons/Error";
import PinCodeWrapper from "./PinCodeWrapper";
import EvaTypography from "../EvaTypography";
import EvaAlert from "../EvaAlert";
import EvaButton from "../EvaButton";
import variables from "../../scss/_variables.module.scss";

type EvaOtpProps = {
    initOtpValues: string[];
    alertMessage: string;
    errorMessage?: string;
    error?: "expired" | "incorrect";
    hasError?: boolean;
    disabled?: boolean;
    onSend: Function;
    onResend: Function;
    onGoBack: Function;
};

const EvaOtp = (props: EvaOtpProps) => {
    const [numberOTP, setNumberOTP] = useState(props.initOtpValues);

    const handlePinCodeChange = ({ values }) => {
        setNumberOTP(values);
    };

    const handleGoBackButtonClick = () => {
        props.onGoBack();
    };

    const handleSendButtonClick = () => {
        props.onSend(numberOTP.join(""));
    };

    const handleReSendButtonClick = () => {
        props.onResend();
    };

    const disabledButton =
        props.disabled || numberOTP.some((elm) => elm === "");

    return (
        <div className={otpStyles["otp__container"]}>
            <EvaAlert
                variant="info"
                content={props.alertMessage}
                withIcon={true}
            />
            <div className={otpStyles["otp__pincode-container"]}>
                <PinCodeWrapper
                    values={numberOTP}
                    disabled={props.disabled}
                    onChange={handlePinCodeChange}
                    hasError={props.hasError}
                />
                {props.errorMessage && (
                    <div className={otpStyles["otp__error"]}>
                        <ErrorIcon className={otpStyles["otp__error-icon"]} />
                        <EvaTypography
                            variant="helper1"
                            style={{ color: variables.errorColor400 }}
                        >
                            {props.errorMessage}
                        </EvaTypography>
                    </div>
                )}
            </div>

            <div className={otpStyles["otp__btn-container"]}>
                <EvaButton
                    variant="outlined"
                    onClick={handleGoBackButtonClick}
                    className={otpStyles["otp__btn-divider"]}
                >
                    Regresar
                </EvaButton>
                <EvaButton
                    variant="contained"
                    onClick={handleSendButtonClick}
                    disabled={disabledButton}
                >
                    Enviar
                </EvaButton>
            </div>
            {props.disabled && (
                <div className={otpStyles["otp__resend-container"]}>
                    <EvaTypography variant="body2">
                        No recibí el mensaje.
                    </EvaTypography>
                    <EvaButton
                        variant="text"
                        buttonSize="small"
                        onClick={handleReSendButtonClick}
                        className={otpStyles["otp__resend"]}
                    >
                        Reenviar código
                    </EvaButton>
                </div>
            )}
        </div>
    );
};

export default EvaOtp;
