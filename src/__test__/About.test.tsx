import { render, screen } from '@testing-library/react';
import About from '../pages/About'; // Pastikan path import sesuai
import '@testing-library/jest-dom';

describe('About Component', () => {
  test('renders About Me section correctly', () => {
    render(<About />);

    // Cek apakah judul "About Me" ada di dalam komponen
    const heading = screen.getByText(/About Me/i);
    expect(heading).toBeInTheDocument();

    // Cek apakah gambar profil dirender dengan benar
    const profileImage = screen.getByAltText(/Profile/i);
    expect(profileImage).toBeInTheDocument();

    // Cek apakah teknologi seperti React dan Node.js muncul di halaman
    const techTextReact = screen.getByText(/React/i);
    expect(techTextReact).toBeInTheDocument();

    const techTextNode = screen.getByText(/Node.js/i);
    expect(techTextNode).toBeInTheDocument();
  });
});
