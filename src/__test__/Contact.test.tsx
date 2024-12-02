import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../pages/Contact'; // Sesuaikan path ke komponen Contact
import '@testing-library/jest-dom';

describe('Contact Component', () => {
  // Sebelum setiap tes, spy on window.open
  let openSpy: jest.SpyInstance;

  beforeEach(() => {
    openSpy = jest.spyOn(window, 'open').mockImplementation(); // Mock window.open untuk menghindari jendela baru terbuka
  });

  afterEach(() => {
    openSpy.mockRestore(); // Mengembalikan fungsi open ke keadaan semula setelah tes
  });

  test('renders the Contact Me form correctly', () => {
    render(<Contact />);

    // Pastikan form ditampilkan dengan elemen-elemen yang benar
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  test('shows error messages for invalid form submission', async () => {
    render(<Contact />);

    // Cek form tanpa input apapun
    userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Pastikan error muncul jika form tidak diisi
    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  test('submits the form and opens WhatsApp link', async () => {
    render(<Contact />);

    // Isi form dengan data valid
    userEvent.type(screen.getByLabelText(/Name/i), 'Deska Mulyana');
    userEvent.type(screen.getByLabelText(/Email/i), 'deska@email.com');
    userEvent.type(screen.getByLabelText(/Message/i), 'Hello, this is a message!');

    // Klik tombol kirim
    userEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Tunggu untuk memastikan link WhatsApp dibuka
    await waitFor(() => {
      expect(openSpy).toHaveBeenCalledWith(
        'https://wa.me/6281316195586?text=Name%3A%20Deska%20Mulyana%0AEmail%3A%20deska%40email.com%0AMessage%3A%20Hello%2C%20this%20is%20a%20message%21',
        '_blank'
      );
    });

    // Pastikan pesan berhasil dikirim (pesan konfirmasi muncul)
    expect(screen.getByText(/Your message has been sent successfully!/i)).toBeInTheDocument();
  });
});
