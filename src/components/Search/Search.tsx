import { FormEvent, ReactNode, useState,  } from "react";

import { Button } from "../Button";
import { Label, Radio } from "../Radio";
import { Textbox } from "../Textbox";

interface Props {
    onSearch: ({ search, year, type }:{ search: string, year: string, type: string }) => void;
}

const Search = ({ onSearch }: Props) => {
    const [search, setSearch] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [type, setType] = useState<string>('');

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSearch({
            search, year, type
        });
    };

    return (
        <form onSubmit={ e => formSubmit(e)}>
            <Textbox type="text"
                    placeholder="Title"
                    value={search} 
                    onChange={ (e: any) => setSearch(e.target.value) }/>
            <Textbox type="number" 
                    placeholder="Year"
                    value={year} 
                    onChange={ (e: any) => setYear( e.target.value) }/>
            <RadioWithLabel name="type" 
                            id="movie" 
                            value="movie"
                            onChange={ e => setType(e) }>
                Movie
            </RadioWithLabel>
            <RadioWithLabel name="type" 
                            id="series" 
                            value="series"
                            onChange={ e => setType(e) }>
                Series
            </RadioWithLabel>
            <RadioWithLabel name="type" 
                            id="episode" 
                            value="episode"
                            onChange={ e => setType(e) }>
                Episode
            </RadioWithLabel>

            <Button type="submit">Search</Button>
        </form>
    )
}

export { Search }

interface RadioProps {
    id: string, 
    name: string, 
    value: string, 
    children: ReactNode,
    onChange: (value: string) => void
}

const RadioWithLabel = ({id, name, value, children, onChange }: RadioProps) => {
    return (
        <>
            <Radio name={name} 
                   id={id} 
                   value={value}
                   onChange={ e => onChange(e.target.value)}/>
            <Label htmlFor={id}>
                {children}
            </Label>
        </>
    );
}