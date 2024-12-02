import { render, screen } from '@testing-library/react';
import Projects from '../pages/Projects'; // Sesuaikan path ke komponen Projects
import '@testing-library/jest-dom';

describe('Projects Component', () => {
  test('renders the project cards correctly', () => {
    render(<Projects />);

    // Pastikan judul proyek muncul
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Project Three')).toBeInTheDocument();

    // Pastikan deskripsi proyek muncul
    expect(screen.getByText('DigiCar Point')).toBeInTheDocument();
    expect(screen.getByText('NeedSkincareID')).toBeInTheDocument();
    expect(screen.getByText('Shinta Sport Center')).toBeInTheDocument();
  });

});
