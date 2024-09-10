import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskItem from '.';
import { Task } from '@/utils/types';

describe('TaskItem Component', () => {
  it('displays line-through when task is completed', async () => {
    const completedTask = { 
      id: 1, 
      title: 'Test Task', 
      completed: true, 
      dueDate: '2024-09-07'
    };

    render(<TaskItem task={completedTask} onEditTitle={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} onEditDueDate={jest.fn()} />);
  
    const textElement = await screen.findByText(completedTask.title);
    expect(textElement).toHaveClass('line-through');
  });

  it('toggles task completed state on checkbox click', async () => {
    let task = { 
      id: 1, 
      title: 'Test Task', 
      completed: false, 
      dueDate: '2024-09-07'
    };

    const onToggleComplete = jest.fn(() => {
      task = { ...task, completed: !task.completed };
    });

    const { rerender } = render(
      <TaskItem task={task} onEditTitle={jest.fn()} onDelete={jest.fn()} onToggleComplete={onToggleComplete} onEditDueDate={jest.fn()} />
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox); 

    expect(onToggleComplete).toHaveBeenCalledTimes(1);

    rerender(<TaskItem task={task} onEditTitle={jest.fn()} onDelete={jest.fn()} onToggleComplete={onToggleComplete} onEditDueDate={jest.fn()} />);

    expect(checkbox.checked).toBeTruthy();
    
    const textElement = await screen.findByText(task.title);
    expect(textElement).toHaveClass('line-through');
  });

  it('calls onEditTitle when the edit button is clicked', () => { 
    const task = { 
      id: 1, 
      title: 'Test Task', 
      completed: false, 
      dueDate: '2024-09-07'
    };
    const onEditTitle = jest.fn();  
    const onDelete = jest.fn();
    const onToggleComplete = jest.fn(); 
  
    render(<TaskItem task={task} onEditTitle={onEditTitle} onDelete={onDelete} onToggleComplete={onToggleComplete} onEditDueDate={jest.fn()} />);
  
    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    const input = screen.getByDisplayValue('Test Task');
    fireEvent.change(input, { target: { value: 'Updated Task' } });
  
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
    
    expect(onEditTitle).toHaveBeenCalledWith(1, 'Updated Task');
  });

  it('calls onDelete when the delete button is clicked', () => {
    const onDelete = jest.fn();
    const task = { 
      id: 1, 
      title: 'Test Task', 
      completed: false, 
      dueDate: '2024-09-07'
    };
  
    render(<TaskItem task={task} onEditTitle={jest.fn()} onDelete={onDelete} onToggleComplete={jest.fn()} onEditDueDate={jest.fn()} />);
  
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
  
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});