import { ReactNode } from 'react';
import styled from 'styled-components';

const Radio = styled.input.attrs(() => ({
    type: "radio"
}))`
    appearance: none;
`;

interface LabelProps {
    selected?: boolean;
}

export const Label = styled.label<LabelProps>`
    border: 1px solid black;

    background-color: ${props =>  props.selected ? 'lightpink' : 'inherit'};


    &:hover {
        background-color: lightpink;
    }
`;

interface RadioProps {
    id: string, 
    name: string, 
    value: string, 
    children: ReactNode,
    onChange: (value: string) => void,
    selected?: boolean
}

export const RadioWithLabel = ({id, name, value, children, onChange, selected }: RadioProps) => {
    return (
        <>
            <Radio name={name} 
                   id={id} 
                   value={value}
                   onChange={ e => onChange(e.target.value)}/>
            <Label htmlFor={id} selected={selected}>
                {children}
            </Label>
        </>
    );
}
