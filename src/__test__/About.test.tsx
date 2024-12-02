import { render, screen, waitFor } from '@testing-library/react';
import About from '../pages/About'; // Pastikan path import sesuai
import '@testing-library/jest-dom';

describe('About Component', () => {
  test('renders the About Me section correctly', async () => {
    render(<About />);

    // Cek apakah judul "About Me" ada di dalam komponen
    const heading = screen.getByText(/About Me/i);
    expect(heading).toBeInTheDocument();

    // Cek apakah gambar profil dirender dengan benar
    const profileImage = screen.getByAltText(/Profile/i);
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveClass('w-64 h-64 object-cover rounded-full');

    // Cek apakah beberapa teks deskripsi muncul dengan benar
    const introText = screen.getByText((content) => {
      return content.includes("Hello! I'm Deska Mulyana");
    });
    expect(introText).toBeInTheDocument();

    const techText = screen.getByText(/React/);  // Teknologi yang disebutkan
    expect(techText).toBeInTheDocument();
    expect(screen.getByText(/Node.js/i)).toBeInTheDocument();

    // Cek apakah animasi dari framer-motion bekerja (berdasarkan animasi opacity)
    await waitFor(() => {
      const motionDiv = screen.getByTestId('motion-div');
      expect(motionDiv).toHaveStyle('opacity: 1'); // Setelah render animasi opacity
    });
  });
});
