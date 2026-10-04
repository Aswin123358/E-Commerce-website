# MyShop E-Commerce Website

A full-stack e-commerce website with a responsive HTML/CSS/JavaScript frontend, Node.js/Express backend, MongoDB Atlas database, and JWT authentication.

## Project Structure

- `frontend/` — static website deployed on Vercel
- `backend/` — Express API deployed on Render
- `backend/.env.example` — required backend environment variables
- `render.yaml` — Render deployment configuration

## Deploy on Render

Create a Render Web Service from this repository.

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check: `/api/health`

Add these environment variables in Render:

```
MONGO_URI=your MongoDB Atlas connection string
JWT_SECRET=your long random secret
FRONTEND_URL=https://your-vercel-project.vercel.app
NODE_ENV=production
```

Do not commit real secrets or a `.env` file.

## Deploy on Vercel

Import the repository into Vercel and set:

- Root Directory: `frontend`
- Framework Preset: Other
- Build Command: leave empty
- Output Directory: leave empty

Before deploying the frontend, edit:

`frontend/js/config.js`

and replace the placeholder Render URL with your actual Render service URL:

```js
window.MYSHOP_API_URL = "https://your-render-service.onrender.com";
```

After deployment, copy the Vercel URL into Render's `FRONTEND_URL` environment variable and redeploy the Render service.

## Local Development

Backend:

```bash
cd backend
npm install
npm start
```

Frontend can be served with VS Code Live Server. For local API testing, `config.js` can temporarily use:

```js
window.MYSHOP_API_URL = "http://localhost:5000";
```

## API Health Check

Once Render is deployed, open:

`https://your-render-service.onrender.com/api/health`

A healthy deployment returns JSON with `status: "ok"`.
