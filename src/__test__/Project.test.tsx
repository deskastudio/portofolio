import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  test('opens modal with project details when "View Details" is clicked', async () => {
    render(<Projects />);

    // Klik tombol 'View Details' pada Project One
    fireEvent.click(screen.getByText('View Details'));

    // Tunggu modal muncul dan pastikan detail proyek ditampilkan
    await waitFor(() => {
      expect(screen.getByText('DigiCar Point')).toBeInTheDocument();
      expect(screen.getByText('A platform offering car rental services...')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '✕' })).toBeInTheDocument(); // Tombol tutup modal
    });
  });

  test('closes modal when close button is clicked', async () => {
    render(<Projects />);

    // Klik untuk membuka modal
    fireEvent.click(screen.getByText('View Details'));

    // Tunggu sampai modal muncul
    await waitFor(() => {
      expect(screen.getByText('DigiCar Point')).toBeInTheDocument();
    });

    // Klik tombol '✕' untuk menutup modal
    fireEvent.click(screen.getByRole('button', { name: '✕' }));

    // Tunggu sampai modal hilang
    await waitFor(() => {
      expect(screen.queryByText('DigiCar Point')).not.toBeInTheDocument();
    });
  });

  test('renders modal with correct project details when a project is clicked', async () => {
    render(<Projects />);

    // Klik pada tombol 'View Details' untuk Project Two
    fireEvent.click(screen.getByText('View Details'));

    // Pastikan modal menampilkan informasi yang benar untuk Project Two
    await waitFor(() => {
      expect(screen.getByText('NeedSkincareID')).toBeInTheDocument();
      expect(screen.getByText('A design project showcasing a skincare product...')).toBeInTheDocument();
    });
  });
});
