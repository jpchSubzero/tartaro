import React, {
    MouseEventHandler,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import styles from "./EvaAlert.module.scss";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import CloseIcon from "@material-ui/icons/Close";
import EvaTypography from "../../componentsEva/EvaTypography";
import EvaButton from "../../componentsEva/EvaButton";
import { Avatar } from "@material-ui/core";

type EvaAlertProps = {
    title?: string;
    variant: string;
    content: string | JSX.Element | JSX.Element[];
    className ?: string;
    withIcon?: boolean;
    customIcon?: string,
    altCustomIcon?: string,
    withButtons?: boolean;
    onClose?: MouseEventHandler<HTMLButtonElement>;
    onCancel?: MouseEventHandler<HTMLButtonElement>;
    onConfirm?: MouseEventHandler<HTMLButtonElement>;
};

const DisencumbranceAlert = (props: EvaAlertProps) => {
    const [lineStyles, setlineStyles] = useState("");
    const divRef = useRef(null);

    useLayoutEffect(() => {
        function updateSize() {
            if (divRef.current) {
                if (divRef.current.children.length === 1) {
                    setlineStyles(
                        divRef.current.children[0].clientHeight <= 22
                            ? styles["alert--simple"]
                            : ""
                    );
                }
            }
        }

        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const variantCheck =
        props.variant === "success" ||
        props.variant === "warning" ||
        props.variant === "error";

    const variantStyles = variantCheck
        ? styles[`alert--${props.variant}`]
        : styles["alert--info"];
    const btnBorderStyles = variantCheck
        ? styles[`alert__btns--border-${props.variant}`]
        : styles["alert__btns--border-info"];
    const btnBackgroundStyles = variantCheck
        ? styles[`alert__btns--background-${props.variant}`]
        : styles["alert__btns--background-info"];

    const renderIcon = () => {
        let iconStyles = styles["alert__icon"];

        if (props.customIcon) {
            return (
            <Avatar className={styles["alert__icon--img"]}>
                <img src={props.customIcon} alt={props.altCustomIcon} />
            </Avatar>);
        }

        switch (props.variant) {
            case "success":
                iconStyles += " " + styles["alert__icon--success"];
                return <CheckCircleIcon className={iconStyles} />;
            case "warning":
                iconStyles += " " + styles["alert__icon--warning"];
                return <ErrorIcon className={iconStyles} />;
            case "error":
                iconStyles += " " + styles["alert__icon--error"];
                return <WarningIcon className={iconStyles} />;
            default:
                iconStyles += " " + styles["alert__icon--info"];
                return <InfoIcon className={iconStyles} />;
        }
    };

    return (
        <div className={`${styles.alert} ${variantStyles} ${lineStyles} ${props.className}`}>
            {props.withIcon && renderIcon()}
            <div className={styles["alert__content"]} ref={divRef}>
                {props.title ? (
                    <>
                        <EvaTypography
                            variant="body2.medium"
                            style={{ color: "#211C26" }}
                            className={styles["custom-font-size"]}
                        >
                            {props.title}
                        </EvaTypography>
                        <div className={styles["alert__divider"]} />
                        <EvaTypography
                            variant="helper1"
                            style={{ color: "#211C26" }}
                        >
                            {props.content}
                        </EvaTypography>
                        <div className={styles["alert__divider"]} />
                    </>
                ) : (
                    <EvaTypography variant="body2" style={{ color: "#211C26" }}>
                        {props.content}
                    </EvaTypography>
                )}

                {props.withButtons && (
                    <div className={styles["alert__btns-container"]}>
                        <EvaButton
                            variant="outlined"
                            buttonSize="small"
                            className={`${styles["alert__btns"]} ${btnBorderStyles}`}
                            style={{ marginRight: "16px" }}
                            onClick={props.onCancel}
                        >
                            Cancelar
                        </EvaButton>
                        <EvaButton
                            variant="contained"
                            buttonSize="small"
                            className={`${styles["alert__btns"]} ${btnBackgroundStyles}`}
                            onClick={props.onConfirm}
                        >
                            Continuar
                        </EvaButton>
                    </div>
                )}
            </div>
            {props.onClose && (
                <IconButton
                    disableRipple
                    className={styles["alert__closeIconBtn"]}
                    onClick={props.onClose}
                >
                    <CloseIcon className={styles["alert__closeIcon"]} />
                </IconButton>
            )}
        </div>
    );
};

export default DisencumbranceAlert;
