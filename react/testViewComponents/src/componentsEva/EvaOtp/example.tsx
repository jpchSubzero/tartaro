import { useState } from "react";
import EvaOtp from "./index";
import EvaOtpSecondary from "./EvaOtpSecondary";

const ExampleEvaOtp = () => {
    const [otpState, setOtpState] = useState("normal");
    const [view, setView] = useState("initial");

    return (
        <>
            <hr />
            <strong>OTP primary</strong>
            <br />
            <br />
            Estados:
            <button onClick={() => setOtpState("normal")}>Normal</button>
            <button onClick={() => setOtpState("expirado")}>Expirado</button>
            <button onClick={() => setOtpState("intento")}>
                Le queda (n) intentos
            </button>
            <hr />
            {otpState === "normal" && (
                <EvaOtp
                    initOtpValues={["", "", "", "", "", ""]}
                    alertMessage="El tiempo de duración del código es de 5 minutos"
                    errorMessage=""
                    onSend={(numberOtp: string) => alert(numberOtp)}
                    hasError={false}
                    onResend={() => alert("Resend Button clicked")}
                    onGoBack={() => alert("GoBack Clicked")}
                />
            )}
            {otpState === "expirado" && (
                <EvaOtp
                    initOtpValues={["1", "1", "1", "1", "1", "1"]}
                    alertMessage="El tiempo de duración del código es de 5 minutos"
                    errorMessage="El código que ingresaste ha expirado"
                    onSend={(numberOtp: string) => alert(numberOtp)}
                    hasError={false}
                    disabled={true}
                    onResend={() => alert("Resend Button clicked")}
                    onGoBack={() => alert("GoBack Clicked")}
                />
            )}
            {otpState === "intento" && (
                <EvaOtp
                    initOtpValues={["1", "1", "1", "1", "1", "1"]}
                    alertMessage="El tiempo de duración del código es de 5 minutos"
                    errorMessage="El código que ingresaste no es correcto, te queda(n) 2 intento(s)."
                    onSend={(numberOtp: string) => alert(numberOtp)}
                    hasError={true}
                    onResend={() => alert("Resend Button clicked")}
                    onGoBack={() => alert("GoBack Clicked")}
                />
            )}
            <hr />
            <strong>OTP secondary</strong>
            <br />
            <br />
            Estados:
            <button onClick={() => setView("initial")}>Tiempo inicial</button>
            <button onClick={() => setView("finished")}>Tiempo final</button>
            <hr />
            {view === "initial" ? (
                <EvaOtpSecondary remainTime="120 segundos" disabledButton={true} />
            ) : (
                <EvaOtpSecondary
                    remainTime="0 segundos"
                    disabledButton={false}
                    onTryAgain={()=>{alert("Volver a intentarlo clicked")}}
                />
            )}
        </>
    );
};

export default ExampleEvaOtp;
