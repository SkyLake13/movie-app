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
    text: string,
    type: string,
    year: string,
    onSearch: (event: SearchEvent) => void;
}

const Search = ({ text, type, year, onSearch }: Props) => {
    const [search, setSearch] = useState<string>(text);
    const [yr, setYr] = useState<string>(year);
    const [typ, setTy] = useState<string>(type);

    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSearch({
            search,
            year: yr,
            type: typ
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
                    value={yr}
                    onChange={(e: any) => setYr(e.target.value)} />
            </Container>
            <Container>
                <RadioGroup>
                    <RadioWithLabel name="type"
                        id="movie"
                        value="movie"
                        selected={'movie' === type}
                        onChange={e => setTy(e)}>
                        Movie
                    </RadioWithLabel>
                    <RadioWithLabel name="type"
                        id="series"
                        value="series"
                        selected={'series' === type}
                        onChange={e => setTy(e)}>
                        Series
                    </RadioWithLabel>
                    <RadioWithLabel name="type"
                        id="episode"
                        value="episode"
                        selected={'episode' === type}
                        onChange={e => setTy(e)}>
                        Episode
                    </RadioWithLabel>
                </RadioGroup>
            </Container>
            <Container>
                <Button type="submit">Search</Button>
            </Container>
        </Form>
    )
}

const RadioGroup = styled.div`

`;

const Container = styled.div`
    margin: 1em
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

export { Search }