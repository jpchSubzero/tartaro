import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { PinCode } from "baseui/pin-code";
import {
    ThemeProvider,
    createTheme,
    lightThemePrimitives,
    LightTheme,
    BaseProvider,
} from "baseui";
import variables from "../../scss/_variables.module.scss";

const engine = new Styletron();

// PinCode Styles
const pinCodeBorderStyles = ($error, $isFocused, $disabled) => {
    if ($error || ($error && $isFocused)) {
        return variables.errorColor400;
    }

    if ($disabled) {
        return variables.neutralColor700;
    }

    return $isFocused ? variables.primaryColor400 : variables.neutralColor700;
};

const pinCodeStyles = {
    Input: {
        props: {
            overrides: {
                Root: {
                    style: ({ $theme, $isFocused, $error, $disabled }) => ({
                        width: "40px",
                        height: "44px",
                        borderBottomRightRadius: "4px",
                        borderBottomLeftRadius: "4px",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        marginRight: "8px",

                        [$theme.mediaQuery.medium]: {
                            width: "56px",
                            height: "56px",
                            borderBottomRightRadius: "8px",
                            borderBottomLeftRadius: "8px",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            marginRight: "14px",
                        },

                        opacity: $disabled ? "0.6" : "1.0",
                        backgroundColor: "transparent",

                        borderTopWidth: "1.5px",
                        borderBottomWidth: "1.5px",
                        borderLeftWidth: "1.5px",
                        borderRightWidth: "1.5px",

                        borderRightColor: pinCodeBorderStyles(
                            $error,
                            $isFocused,
                            $disabled
                        ),
                        borderLeftColor: pinCodeBorderStyles(
                            $error,
                            $isFocused,
                            $disabled
                        ),
                        borderTopColor: pinCodeBorderStyles(
                            $error,
                            $isFocused,
                            $disabled
                        ),
                        borderBottomColor: pinCodeBorderStyles(
                            $error,
                            $isFocused,
                            $disabled
                        ),                        
                    }),
                },
                InputContainer: {
                    style: () => ({
                        backgroundColor: "transparent",
                    }),
                },
                Input: {
                    style: ({ $error }) => ({
                        fontFamily: "Poppins-Regular",
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "26px",
                        color: $error
                            ? variables.errorColor400
                            : variables.neutralColor1000,
                    }),
                },
            },
        },
    },
};

const PinCodeWrapper = (props) => {
    return (
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <ThemeProvider
                    theme={createTheme(lightThemePrimitives, {
                        colors: {
                            inputFill: "#FFFFFF",
                            inputFillActive: "#FFFFFF",
                            inputFillError: "#FFFFFF",
                            inputBorder: "#D9D9D9",
                        },
                    })}
                >
                    <PinCode
                        error={props.hasError}
                        placeholder=""
                        disabled={props.disabled}
                        values={props.values}
                        onChange={props.onChange}
                        overrides={pinCodeStyles}
                    />
                </ThemeProvider>
            </BaseProvider>
        </StyletronProvider>
    );
};

export default PinCodeWrapper;
