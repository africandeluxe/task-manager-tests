import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DueDate from '../DueDate';

describe('DueDate Component', () => {
  it('calls onDateChange with the correct date when date is changed', () => {
    const onDateChange = jest.fn();
    const initialDate = '2024-12-31';

    render(<DueDate dueDate={initialDate} onDateChange={onDateChange} />);

    const dateInput = screen.getByDisplayValue(initialDate);

    fireEvent.change(dateInput, { target: { value: '2025-01-01' } });
    expect(onDateChange).toHaveBeenCalledWith('2025-01-01');
  });
});