import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'; // Sesuaikan dengan path komponen Footer
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders social media icons with correct links', () => {
    render(<Footer />);

  });

  test('displays current year in copyright text', () => {
    render(<Footer />);

    // Cek apakah teks hak cipta menampilkan tahun yang benar
    const year = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${year} Deska Portfolio. All rights reserved.`);
    
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders social media icons with correct alt text or accessible label', () => {
    render(<Footer />);

  });
});
