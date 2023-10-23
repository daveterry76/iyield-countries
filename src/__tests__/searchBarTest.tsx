import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';


test('Renders input', () => {
    render(<SearchBar />);
    const input = screen.getByLabelText(/search for a country/i);
    expect(input).toBeInTheDocument();
})

test('Updates input value', () => {
    render(<SearchBar />);
    const input: any = screen.getByLabelText(/search for a country/i);
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input?.value).toBe('New Value');
});