import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // Sesuaikan dengan path komponen Footer
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders social media icons with correct links', () => {
    render(<Footer />);

    // Cek apakah ikon-ikon media sosial ditampilkan
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    const instagramLink = screen.getByRole('link', { name: /instagram/i });

    // Pastikan link memiliki atribut href yang benar
    expect(githubLink).toHaveAttribute('href', 'https://github.com/deskastudio');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/deskamulyana');
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/deskamlyn_');
  });

  test('displays current year in copyright text', () => {
    render(<Footer />);

    // Cek apakah teks hak cipta menampilkan tahun yang benar
    const year = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${year} Deska Portfolio. All rights reserved.`);
    
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders social media icons with correct alt text', () => {
    render(<Footer />);

    // Pastikan ikon memiliki teks alt yang sesuai untuk aksesibilitas
    const githubIcon = screen.getByAltText(/github/i);
    const linkedinIcon = screen.getByAltText(/linkedin/i);
    const instagramIcon = screen.getByAltText(/instagram/i);

    expect(githubIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });
});
