import EvaButton from "../EvaButton";
import EvaTypography from "../EvaTypography";
import { ReactComponent as OtpImage } from "../../assets/otp/otpImage.svg";
import moduleStyles from "./EvaOtpSecondary.module.scss";

function EvaOtpSecondary(props) {
    return (
        <div className={moduleStyles["container"]}>
            <div className={moduleStyles["container__image"]}>
                <OtpImage />
            </div>
            <EvaTypography variant="h5">
                Excediste el número de intentos
            </EvaTypography>
            <div className={moduleStyles["container__description"]}>
                <EvaTypography
                    variant="body2.medium"
                    className={moduleStyles["custom-typography"]}
                >
                    Puedes volver a intentarlo en
                </EvaTypography>
                <EvaTypography
                    variant="body2.medium"
                    className={`${moduleStyles["container__description--accent"]} ${moduleStyles["custom-typography"]}`}
                >
                    &nbsp;{props.remainTime}.
                </EvaTypography>
            </div>
            <EvaButton
                variant="contained"
                className={moduleStyles["container__button"]}
                onClick={props.onTryAgain}
                disabled={props.disabledButton}
            >
                Volver a intentarlo
            </EvaButton>
        </div>
    );
}

export default EvaOtpSecondary;
