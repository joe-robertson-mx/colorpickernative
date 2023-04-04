import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { MyColorPicker } from "./components/ColorPicker";
import { ColorpickernativeProps } from "../typings/ColorpickernativeProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function Colorpickernative({ style, color }: ColorpickernativeProps<CustomStyle>): ReactElement {
    return <MyColorPicker color={color} style={style} />;
}
