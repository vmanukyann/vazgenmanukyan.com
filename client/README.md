# vazgenmanukyan.com

A personal portfolio website by Vazgen Manukyan.

## Features

- Modern responsive design using React and Tailwind CSS
- Projects and employment showcase
- Skills & expertise section
- Contact form and social links
- Flask backend API (with CORS enabled)
- Easy deployment and local development

## Structure

- `client/` — React frontend
  - Contains all UI components, pages, and styles
  - Uses Tailwind CSS for styling
  - Communicates with the backend via REST API
- `Server/` — Flask backend
  - Provides API endpoints
  - Handles CORS for frontend-backend communication

## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x

### Frontend

```bash
cd client
npm install
npm start
```
- Runs the React app on [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd Server
python run.py
```
- Starts the Flask server on [http://localhost:5000](http://localhost:5000)

## API Example

- `GET /api/hello` — Returns a hello message from Flask

## Deployment

You can deploy the frontend to platforms like Vercel or Netlify, and the backend to services like Heroku or Render.  
Make sure to set up environment variables for production as needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Author

[Vazgen Manukyan](https://github.com/vmanukyann)