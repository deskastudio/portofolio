import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext'; // Sesuaikan dengan provider tema Anda
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  test('renders Navbar links', () => {
    render(
      <Router>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </Router>
    );

    // Cek apakah link navigasi tersedia
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const projectsLink = screen.getByText(/projects/i);
    const contactLink = screen.getByText(/contact/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('toggles dark mode on button click', () => {
    render(
      <Router>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </Router>
    );

    const darkModeButton = screen.getByRole('button'); // Tombol untuk toggle dark mode

    // Sebelum klik, pastikan icon bulan (untuk dark mode) muncul
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

    // Klik untuk toggle dark mode
    fireEvent.click(darkModeButton);

    // Setelah klik, pastikan icon matahari (untuk light mode) muncul
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  test('renders Navbar with correct animation', () => {
    render(
      <Router>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </Router>
    );

    // Cek apakah elemen navbar muncul di posisi yang tepat dengan animasi
    const navbar = screen.getByRole('navigation');
    expect(navbar).toHaveClass('bg-gradient-to-r'); // Pastikan kelas gradien diterapkan
    expect(navbar).toHaveClass('text-white'); // Pastikan teks berwarna putih
  });
});
