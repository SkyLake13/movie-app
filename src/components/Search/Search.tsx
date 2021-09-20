import { FormEvent, useState } from "react";
import styled from "styled-components";

import { Button } from "../Button";
import { RadioWithLabel } from "../Radio";
import { Textbox } from "../Textbox";

interface SearchEvent {
    search: string,
    year: string,
    type: string
}
interface Props {
    onSearch: (event: SearchEvent) => void;
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
        <Form onSubmit={e => formSubmit(e)}>
            <Textbox type="text"
                placeholder="Title"
                value={search}
                onChange={(e: any) => setSearch(e.target.value)} />
            <Textbox type="number"
                placeholder="Year"
                value={year}
                onChange={(e: any) => setYear(e.target.value)} />
            <RadioGroupContainer>
                <RadioGroup>
                    <RadioWithLabel name="type"
                        id="movie"
                        value="movie"
                        selected={'movie' === type}
                        onChange={e => setType(e)}>
                        Movie
                    </RadioWithLabel>
                    <RadioWithLabel name="type"
                        id="series"
                        value="series"
                        selected={'series' === type}
                        onChange={e => setType(e)}>
                        Series
                    </RadioWithLabel>
                    <RadioWithLabel name="type"
                        id="episode"
                        value="episode"
                        selected={'episode' === type}
                        onChange={e => setType(e)}>
                        Episode
                    </RadioWithLabel>
                </RadioGroup>
            </RadioGroupContainer>
            <Button type="submit">Search</Button>
        </Form>
    )
}

const RadioGroup = styled.div`
    margin: 1em;
`;

const RadioGroupContainer = styled.div`
    margin: 3px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export { Search }