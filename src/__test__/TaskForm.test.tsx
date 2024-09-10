import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskForm from '../TaskForm';

describe('TaskForm Component', () => {
  const onAddTask = jest.fn();

  it('allows input to be entered and submitted', () => {
    render(<TaskForm onAddTask={onAddTask} />);
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByRole('button', { name: /add task/i });

    fireEvent.change(input, { target: { value: 'New Task' } });

    fireEvent.click(button);
    
    expect(onAddTask).toHaveBeenCalledWith('New Task');
  });


  it('prevents empty task submission', () => {
    const onAddTask = jest.fn();
    render(<TaskForm onAddTask={onAddTask} />);
    
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByRole('button', { name: /add task/i });
  
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    
    expect(onAddTask).not.toHaveBeenCalled();
  });

  it('clears input after submitting a task', () => {
    render(<TaskForm onAddTask={jest.fn()} />);
  
    const input = screen.getByPlaceholderText('Enter task');
    const button = screen.getByRole('button', { name: /add task/i });
  
    fireEvent.change(input, { target: { value: 'Task' } });
    fireEvent.click(button);
  
    expect(input).toHaveValue('');
  });

  it('prevents submission of overly long task titles', () => {
    const onAddTask = jest.fn();
    render(<TaskForm onAddTask={onAddTask} />);
  
    const input = screen.getByPlaceholderText('Enter task');
    const addButton = screen.getByRole('button', { name: /add task/i });
  
    const longTask = 'x'.repeat(300);
    fireEvent.change(input, { target: { value: longTask } });
    
    fireEvent.click(addButton);
  
    expect(onAddTask).not.toHaveBeenCalled();
  });
});