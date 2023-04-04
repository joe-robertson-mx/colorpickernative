import { createElement, ReactElement } from "react";
import { View } from "react-native";
import { ColorPicker } from "react-native-color-picker";
import { CustomStyle } from "../Colorpickernative";
import { EditableValue } from "mendix";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

export interface ColorPickerProps {
    color: EditableValue<string>;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        height: 400
    },
    label: {
        color: "#F6BB42"
    }
};

export const MyColorPicker = ({ color, style }: ColorPickerProps): ReactElement => {
    const styles = mergeNativeStyles(defaultStyle, style);

    const handleColorChange = (newColor: string) => {
        color.setTextValue(newColor);
    };

    return (
        <View style={styles.container}>
            <ColorPicker style={{ flex: 1 }} onColorSelected={handleColorChange} hideSliders />
        </View>
    );
};
