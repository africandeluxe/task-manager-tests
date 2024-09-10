import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../Filter';

describe('Filter Component', () => {
  it('calls onFilterChange with correct filter type when a button is clicked', () => {
    const onFilterChange = jest.fn();

    render(<Filter filter="all" onFilterChange={onFilterChange} />);

    fireEvent.click(screen.getByText('Completed'));
    expect(onFilterChange).toHaveBeenCalledWith('completed');

    fireEvent.click(screen.getByText('Incomplete'));
    expect(onFilterChange).toHaveBeenCalledWith('incomplete');

    fireEvent.click(screen.getByText('All'));
    expect(onFilterChange).toHaveBeenCalledWith('all');
  });
});