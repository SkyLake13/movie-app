import { FormEvent, useState } from "react";
import styled from "styled-components";
import { SearchParams } from "../../state";

import { Button } from "../Button";
import { RadioWithLabel } from "../Radio";
import { Textbox } from "../Textbox";

const Search = ({ onSearch }: Props) => {
    const [search, setSearch] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [type, setType] = useState<string>('');

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSearch({
            text: search,
            year,
            type
        });
    };

    return (
        <Form onSubmit={e => formSubmit(e)}>
            <Container>
                <Textbox type="text"
                    placeholder="Title"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)} />
            </Container>
            <Container>
                <Textbox type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e: any) => setYear(e.target.value)} />
            </Container>
            <Container>
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
            </Container>
            <Container>
                <Button type="submit">Search</Button>
            </Container>
        </Form>
    )
}


const Container = styled.div`
    margin: 1em
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

interface Props {
    onSearch: (event: SearchParams) => void;
}

export { Search }