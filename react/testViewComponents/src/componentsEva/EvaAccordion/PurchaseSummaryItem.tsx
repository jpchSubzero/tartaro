import React from "react";
import EvaTypography from "../EvaTypography";
import moduleStyles from "./PurchaseSummaryItem.module.scss";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const PurchaseSummaryItem = (props) => {
    return (
        <div className={moduleStyles["container"]}>
            <div className={moduleStyles["container__content"]}>
                {props.withIcon && (
                    <CheckCircleOutlinedIcon
                        className={moduleStyles["container__content-icon"]}
                    />
                )}
                <EvaTypography variant="body2">{props.content}</EvaTypography>
            </div>
            <EvaTypography
                variant="body2"
                className={moduleStyles["container__price"]}
            >
                {props.price}
            </EvaTypography>
        </div>
    );
};

export default PurchaseSummaryItem;
