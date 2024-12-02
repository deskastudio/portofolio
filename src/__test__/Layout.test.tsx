import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

describe('Layout Component', () => {
  test('renders Navbar and Footer', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Cek apakah Navbar dan Footer dirender
    const navbar = screen.getByRole('navigation');
    const footer = screen.getByRole('contentinfo');

    expect(navbar).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test('renders children passed to Layout', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Cek apakah konten yang diteruskan sebagai children dirender
    const content = screen.getByText('Test Content');
    expect(content).toBeInTheDocument();
  });

  

  test('applies dark background in dark mode', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Pastikan class untuk dark mode diterapkan
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveClass('dark:bg-gray-900');
  });
});
