import { FormEvent, useState,  } from "react";

import { Button } from "../Button";
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
            <Button type="submit">Search</Button>
        </form>
    )
}

export { Search }