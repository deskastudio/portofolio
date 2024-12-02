import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home'; // Sesuaikan path ke komponen Home
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders the component and animates elements correctly', async () => {
    render(<Home />);

    // Tunggu sampai animasi selesai dan elemen muncul dengan opacity yang benar
    await waitFor(() => {
      // Pastikan elemen dengan animasi pertama (h1) muncul dan terlihat
      const h1Element = screen.getByText(/Hi, I'm Deska Mulyana/i);
      expect(h1Element).toBeInTheDocument();
      expect(h1Element).toHaveStyle('opacity: 1'); // Pastikan opacity 1 setelah animasi

    });
  });
});
