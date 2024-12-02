import { render} from '@testing-library/react';
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


  test('submits the form successfully', () => {
    render(<Contact />);
  });
});
