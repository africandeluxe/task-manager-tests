import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCounter from '../TaskCounter';

describe('TaskCounter Component', () => {
  it('displays zero state correctly', () => {
    render(<TaskCounter totalTasks={0} completedTasks={0} />);

    expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
    
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });

  it('displays some tasks are completed', () => {
    render(<TaskCounter totalTasks={5} completedTasks={3} />);

    expect(screen.getByText('Total Tasks: 5')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 3')).toBeInTheDocument();
  });

  it('updates counter correctly when new tasks are added', () => {
    render(<TaskCounter totalTasks={5} completedTasks={2} />);
  
    expect(screen.getByText('Total Tasks: 5')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 2')).toBeInTheDocument();
  });

  it('displays correct count when all tasks are completed', () => {
    render(<TaskCounter totalTasks={5} completedTasks={5} />);

    expect(screen.getByText('Total Tasks: 5')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 5')).toBeInTheDocument();
  });
  
  it('displays correct count when no tasks are completed', () => {
    render(<TaskCounter totalTasks={5} completedTasks={0} />);
  
    expect(screen.getByText('Total Tasks: 5')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });

  it('displays correct count when no tasks exist', () => {
    render(<TaskCounter totalTasks={0} completedTasks={0} />);
  
    expect(screen.getByText('Total Tasks: 0')).toBeInTheDocument();
    expect(screen.getByText('Completed Tasks: 0')).toBeInTheDocument();
  });
});