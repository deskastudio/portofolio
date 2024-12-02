import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home'; // Sesuaikan path ke komponen Home
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders the component and animates elements correctly', async () => {
    render(<Home />);

    // Tunggu sampai animasi selesai (dengan menunggu durasi yang cukup)
    await waitFor(() => {
      // Pastikan elemen dengan animasi pertama (h1) muncul dan terlihat
      expect(screen.getByText(/Hi, I'm Deska Mulyana/i)).toBeInTheDocument();
      expect(screen.getByText(/Hi, I'm Deska Mulyana/i)).toHaveStyle('opacity: 1');

      // Pastikan animasi kedua (p) muncul setelah beberapa detik
      expect(screen.getByText(/A Fullstack Developer Enthusiast/i)).toBeInTheDocument();
      expect(screen.getByText(/A Fullstack Developer Enthusiast/i)).toHaveStyle('opacity: 1');

      // Pastikan tombol 'View My Work' muncul setelah delay animasi
      expect(screen.getByRole('link', { name: /View My Work/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /View My Work/i })).toHaveStyle('opacity: 1');
    });
  });

  test('button link leads to /projects', () => {
    render(<Home />);

    // Pastikan tombol memiliki href yang benar
    const button = screen.getByRole('link', { name: /View My Work/i });
    expect(button).toHaveAttribute('href', '/projects');
  });
});
