import { ReactNode } from 'react';
import styled from 'styled-components';

const Radio = styled.input.attrs(() => ({
    type: "radio"
}))`
    display: none;
`;

interface LabelProps {
    selected?: boolean;
}

export const Label = styled.label<LabelProps>`
    color: ${props => props.selected ? props.theme.fg : props.theme.bg };
    border: 1px solid ${props => props.theme.bg };
    background-color: ${props => props.selected ? props.theme.bg : props.theme.fg };

    
    font-size: 1em;
    margin: 0px -1px;
    padding: 0.17em 1em 0.30em 1em;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.bg };
        color: ${props => props.theme.fg };
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
                   checked={selected}
                   onChange={ e => onChange(e.target.value)}/>
            <Label htmlFor={id} selected={selected}>
                {children}
            </Label>
        </>
    );
}
