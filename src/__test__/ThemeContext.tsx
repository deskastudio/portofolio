import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext'; // Sesuaikan dengan path ThemeContext
import '@testing-library/jest-dom';

// Komponen untuk mengakses context secara langsung
const TestComponent: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeContext', () => {
  test('initial theme based on prefers-color-scheme', () => {
    // Menyimulasikan preferensi tema
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true, // Anggap pengguna menginginkan tema gelap
    });

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Pastikan bahwa dark mode diaktifkan
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();
  });

  test('can toggle theme between dark and light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Cek initial state apakah defaultnya light mode atau dark mode
    expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();

    // Klik tombol untuk mengubah tema
    fireEvent.click(screen.getByText(/Toggle Theme/i));

    // Pastikan tema berubah menjadi dark mode
    expect(screen.getByText(/Dark Mode/i)).toBeInTheDocument();

    // Klik lagi untuk mengubah ke light mode
    fireEvent.click(screen.getByText(/Toggle Theme/i));

    // Pastikan tema kembali menjadi light mode
    expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
  });

  test('adds dark class to html element when dark mode is enabled', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Cek apakah kelas 'dark' ditambahkan ke root element saat dark mode aktif
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Klik tombol untuk mengubah tema ke dark mode
    fireEvent.click(screen.getByText(/Toggle Theme/i));

    // Pastikan kelas 'dark' ada setelah toggle
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Klik lagi untuk mengubah ke light mode
    fireEvent.click(screen.getByText(/Toggle Theme/i));

    // Pastikan kelas 'dark' hilang setelah toggle kembali ke light mode
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
