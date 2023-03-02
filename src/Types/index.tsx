import { ReactNode } from "react";

export type MainTemplateType = {
    children?: ReactNode;
    head?: HeadType
}

export type HeadType = {
    title?: string;
    description?: string
}