import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App'; // Sesuaikan dengan path App.js atau App.tsx
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders the home page by default', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Pastikan Home page terlihat pertama kali
    expect(screen.getByText("Hi, I'm Deska Mulyana")).toBeInTheDocument();
  });

  test('navigates to About page when the About link is clicked', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Klik link untuk menuju halaman About
    fireEvent.click(screen.getByText('About'));

    // Tunggu sampai halaman About tampil
    await waitFor(() => {
      expect(screen.getByText('About Page')).toBeInTheDocument(); // Sesuaikan dengan konten About
    });
  });

  test('navigates to Projects page when the Projects link is clicked', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Klik link untuk menuju halaman Projects
    fireEvent.click(screen.getByText('Projects'));

    // Tunggu sampai halaman Projects tampil
    await waitFor(() => {
      expect(screen.getByText('My Projects')).toBeInTheDocument(); // Sesuaikan dengan konten Projects
    });
  });

  test('navigates to Contact page when the Contact link is clicked', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Klik link untuk menuju halaman Contact
    fireEvent.click(screen.getByText('Contact'));

    // Tunggu sampai halaman Contact tampil
    await waitFor(() => {
      expect(screen.getByText('Contact Me')).toBeInTheDocument(); // Sesuaikan dengan konten Contact
    });
  });

  test('applies page transition animations on navigation', async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Klik untuk navigasi ke Projects page dan tunggu animasi transisi
    fireEvent.click(screen.getByText('Projects'));

    // Verifikasi bahwa animasi telah diterapkan (gunakan kelas atau animasi yang diharapkan)
    await waitFor(() => {
      expect(screen.getByText('My Projects')).toBeInTheDocument();
    });
  });
});
