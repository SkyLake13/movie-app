import { Search } from './Search';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { SearchParams } from '../../state';

describe('Search', () => {
    beforeEach(() => {

    });

    afterEach(() => {

    });

    it('should render', () => {
        render(<Search onSearch={e => {}} />);

        const searchTextbox = screen.getByPlaceholderText('Title');
        const yearTextbox = screen.getByPlaceholderText('Year');
        const radios = screen.getByLabelText('Movie');

        expect(searchTextbox).toBeDefined();
        expect(yearTextbox).toBeDefined();
        expect(radios).toBeDefined();
    });

    it('should fire search event', () => {
        let searchEvent = null;
        const search = (e: SearchParams) => searchEvent = e;

        render(<Search onSearch={e => search(e)} />);
        fireEvent.click(screen.getByRole('button'));

        expect(searchEvent).not.toBeNull();
    });

    it('should values in search event', () => {
        let searchEvent: SearchParams = { text: '' };

        const search = (e: SearchParams) => searchEvent = e;

        render(<Search onSearch={e => search(e)} />);
        fireEvent.input(screen.getByPlaceholderText('Title'), {
            target: { value: 'game' }
        });

        fireEvent.input(screen.getByPlaceholderText('Year'), {
            target: { value: '2012' }
        });

        fireEvent.click(screen.getByRole('button'));

        expect(searchEvent).not.toBeNull();
        expect(searchEvent?.text).toBe('game');
        expect(searchEvent?.year).toBe('2012');
    });

    it('should emit movie type in search event', () => {
        let searchEvent: SearchParams = { text: '' };

        const search = (e: SearchParams) => searchEvent = e;

        render(<Search onSearch={e => search(e)} />);
    
        fireEvent.click(screen.getByLabelText('Movie'));

        fireEvent.click(screen.getByRole('button'));

        expect(searchEvent).not.toBeNull();
        expect(searchEvent?.type).toBe('movie');
    });

    it('should emit series type in search event', () => {
        let searchEvent: SearchParams = { text: '' };

        const search = (e: SearchParams) => searchEvent = e;

        render(<Search onSearch={e => search(e)} />);
    
        fireEvent.click(screen.getByLabelText('Series'));

        fireEvent.click(screen.getByRole('button'));

        expect(searchEvent).not.toBeNull();
        expect(searchEvent?.type).toBe('series');
    });

    it('should emit episode type in search event', () => {
        let searchEvent: SearchParams = { text: '' };

        const search = (e: SearchParams) => searchEvent = e;

        render(<Search onSearch={e => search(e)} />);
    
        fireEvent.click(screen.getByLabelText('Episode'));

        fireEvent.click(screen.getByRole('button'));

        expect(searchEvent).not.toBeNull();
        expect(searchEvent?.type).toBe('episode');
    });
});