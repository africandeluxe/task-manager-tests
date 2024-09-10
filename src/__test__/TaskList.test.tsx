import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import TaskList from '../TaskList';
import { Task } from '@/utils/types';

describe('TaskList Component', () => {
  afterEach(cleanup);
  
const tasks: Task[] = [ { 
  id: 1, 
  title: 'Task 1', 
  completed: false ,
  dueDate: '2024-09-07'
},
{ 
  id: 2, 
  title: 'Task 2', 
  completed: true,
  dueDate: '2024-09-07'
}];

const onEdit = jest.fn();
const onDelete = jest.fn();
const onToggleComplete = jest.fn();
const OnEditDueDate = jest.fn();

  it('renders all tasks', () => {
    render(<TaskList tasks={tasks} onEditTitle={jest.fn()} onEditDueDate={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(tasks.length);
  });

  it('interactions affect multiple items', () => {
    render(<TaskList tasks={tasks} onEditTitle={onEdit} onEditDueDate={jest.fn()} onDelete={onDelete} onToggleComplete={onToggleComplete} />);

    const checkboxes = screen.getAllByRole('checkbox');

    checkboxes.forEach(checkbox => fireEvent.click(checkbox));
    
    expect(onToggleComplete).toHaveBeenCalledTimes(tasks.length);
  });

  it('ensures checkboxes reflect task completion state', () => {
    render(<TaskList tasks={tasks} onEditTitle={onEdit} onEditDueDate={jest.fn()} onDelete={onDelete} onToggleComplete={onToggleComplete} />);
    
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];
    
    expect(checkboxes[0].checked).toBe(false);
    expect(checkboxes[1].checked).toBe(true);
  });

  it('checks for no tasks scenario', () => {
    render(<TaskList tasks={[]} onEditTitle={jest.fn()} onEditDueDate={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);
    const lists = screen.queryAllByRole('list'); 
    expect(lists).toHaveLength(1); 
    expect(lists[0]).toBeEmptyDOMElement(); 
  });
  
  it('calls onEditTitle when a task title is edited', () => {
    const tasks = [{ 
      id: 1, 
      title: 'Task 1', 
      completed: false, 
      dueDate: '2024-09-07'
    },
    { 
      id: 2, 
      title: 'Task 2', 
      completed: true, 
      dueDate: '2024-09-07' 
    },
    ];

    const onEdit = jest.fn();
    
    render(<TaskList tasks={tasks} onEditTitle={onEdit} onEditDueDate={jest.fn()} onDelete={jest.fn()} onToggleComplete={jest.fn()} />);
    
    const editButtons = screen.getAllByText('Edit');
    fireEvent.click(editButtons[0]);
  
    const input = screen.getByDisplayValue('Task 1');
    fireEvent.change(input, { target: { value: 'Updated Task' } });
  
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
  
    expect(onEdit).toHaveBeenCalledWith(1, 'Updated Task');
  });
});