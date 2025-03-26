# Umbrella Faucet

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-4.4%2B-brightgreen)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB)](https://reactjs.org/)

This project was created to create your own faucet, more informations will coming soon.

Currently, I use two different UI:

- [MUI](https://mui.com/material-ui/) for commons components
- [Aceternity UI](https://ui.aceternity.com) for unique components like the background of the homepage

## 🛠 Tech Stack

| Component               | Technology                          |
|-------------------------|--------------------------------------|
| Core Framework          | React 18 + TypeScript               |
| Build Tool              | Vite 4                              |
| Base UI Components      | MUI (Material-UI)                   |
| Animated Components     | Aceternity UI                       |
| Styling                 | Tailwind CSS v3                     |
| Icons                   | Tabler Icons                        |
| State Management        | React Context API                   |

### Prerequisites

- Node.js 18+
- npm 9+ or yarn 1.22+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/umbrella-faucet.git
cd umbrella-faucet
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start development server:

```bash
npm run dev
# or
yarn dev
```

## Configuration

Configure the server port and host property in the `vite.config.ts` file like this:

```js
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 9000, // Local port
    host: '0.0.0.0', // Listening on all network interfaces
  },
  ...
})
```
