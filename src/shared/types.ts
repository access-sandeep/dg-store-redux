import { Tracing } from "trace_events";

export type CheckboxType = {
    value:string; 
    isChecked?:boolean; 
    checkboxLabel:string;
}

export type PriceInputType = {
    label: string;
    labelId?: string;
    id?:string;
    name: string;
    ariaLabel?: string;
    onChangeValue?:Function;
}

export type SubmitType = {
    name:string; 
    label:string;
}

export type ActionProduct = {
    id: string;
    name: string;
    sku: string;
    description: string;
    short_description: string;
    createddate: Date;
    updatedate: Date
}

export type PayloadProduct = {
    url: string; 
    method: string; 
    data: {
        id: string;
        name: string;
        sku: string;
        description: string;
        short_description: string;
    };
    onSuccess: string; 
    onError: string;
}

export type DispatchProduct = {
    type: string;
    payload: PayloadProduct;
}

export type DispatchProducts = {
    type: string;
    payload: Array<PayloadProduct>;
}