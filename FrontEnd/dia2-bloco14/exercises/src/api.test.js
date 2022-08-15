import { render, screen } from "@testing-library/react"
import App from './App';

describe('Test if dog api works well', () => {
  test('test if api works', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        "message": "https://images.dog.ceo/breeds/malamute/n02110063_11668.jpg",
        "status": "success",
      })
    })
    render(<App />);
    const url = "https://dog.ceo/api/breeds/image/random";
    const success = await screen.findByRole('heading', { level: 3 });
    expect(global.fetch).toBeCalledWith(url);
    expect(success).toHaveTextContent('success');
  })
})