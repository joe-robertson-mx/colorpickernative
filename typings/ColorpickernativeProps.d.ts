/**
 * This file was generated from Colorpickernative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface ColorpickernativeProps<Style> {
    name: string;
    style: Style[];
    color: EditableValue<string>;
}

export interface ColorpickernativePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    color: string;
}
