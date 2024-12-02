import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../pages/Contact'; // Sesuaikan path ke komponen Contact
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  let openSpy: jest.SpyInstance;

  beforeEach(() => {
    openSpy = jest.spyOn(window, 'open').mockImplementation(); // Mock window.open
  });

  afterEach(() => {
    openSpy.mockRestore(); // Kembalikan mock setelah tiap tes
  });

  test('renders the Contact Me form correctly', () => {
    render(<Contact />);

    // Pastikan form tampil dengan elemen-elemen yang benar
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('shows error messages for invalid form submission', () => {
    render(<Contact />);

    // Klik tombol tanpa mengisi form
    userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Pastikan error muncul
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });

  test('submits the form successfully', () => {
    render(<Contact />);
  });
});
