# Token Atlas

A high-performance, pixel-perfect replica of **Axiom Trade’s Token Discovery Table**, built with **Next.js 14**, **TypeScript** and **Tailwind CSS**, featuring real-time price updates via **WebSockets**, smooth UI interactions and Lighthouse-optimized performance.

---

## 🚀 Live Demo

- **Frontend (Vercel):** <https://token-atlas.vercel.app/>
- **Backend (REST + WebSocket):** <https://token-atlas-2.onrender.com/>

---

## 🎥 Demo Video (1–2 min)

- **YouTube:** <ADD_PUBLIC_YOUTUBE_LINK_HERE>

The video demonstrates:
- Loading skeletons & shimmer
- Token table interactions (hover, sorting, popovers, modal)
- Real-time price updates (WebSocket)
- Mobile & desktop responsiveness

---

## 🧩 Features

### Core Functionality
- Token discovery table (New Pairs / Active tokens)
- Sorting by **price** and **volume**
- Hover effects, popovers, tooltips and modal interactions
- Real-time price updates using **WebSocket mock server**
- Smooth color transitions on price change
- Fully responsive down to **320px width**

### UI & UX
- Skeleton loaders and shimmer effects
- Progressive loading states
- Accessible UI using **shadcn/ui (Radix UI)**
- Dark-themed layout inspired by Axiom Trade
- Pixel-perfect spacing (≤ 2px visual variance)

---

## 🏗️ Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **TypeScript (strict mode)**
- **Tailwind CSS**
- **shadcn/ui (Radix UI)**
- **Atomic component architecture**
- **Custom hooks for WebSocket logic**

### Backend
- **Node.js + Express**
- **MongoDB + Mongoose**
- **REST API for initial token fetch**
- **WebSocket server (`ws`) for live price updates**

---

## 📁 Project Structure

```
root/
├── backend/
│   ├── models/
│   │   └── Token.ts
│   │
│   ├── routes/
│   │   └── tokens.ts
│   │
│   ├── ws/
│   │   └── tokenWebSocket.ts
│   │
│   ├── seed.ts
│   ├── server.ts
│   └── tsconfig.json
│
├── frontend/
│   ├── app/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── token/
│   │   │   ├── TokenTable.tsx
│   │   │   ├── TokenRow.tsx
│   │   │   ├── TokenHeader.tsx
│   │   │   └── TokenModal.tsx
│   │   │
│   │   └── ui/
│   │       ├── table.tsx
│   │       ├── tooltip.tsx
│   │       ├── popover.tsx
│   │       ├── dialog.tsx
│   │       └── skeleton.tsx
│   └── lib/
|        ├── types.ts
│        ├── utils.ts
│        └── webSocket.ts
│   
└── README.md

```

---

## 🔌 Data Flow Architecture

1. **Initial Load**
   - Frontend fetches token data via REST API (`/api/tokens`)
2. **Real-Time Updates**
   - WebSocket connection streams price updates every few seconds
3. **UI Updates**
   - Prices update smoothly with green/red color transitions
   - No layout shifts or blocking renders

---

## 🪝 Custom Hooks

### `webSocket`
Encapsulates all WebSocket logic:
- Connection lifecycle
- Real-time updates
- Clean separation from UI components

This ensures:
- Reusability
- Maintainability
- Clear atomic architecture

---

## ⚙️ Performance Optimizations

- Memoized row components (`React.memo`)
- Minimal re-renders on WebSocket updates
- No layout shifts (CLS = 0)
- Lightweight animations using CSS transitions
- Optimized bundle size

### Lighthouse Scores
| Device   | Score |
|---------|-------|
| Mobile  | 94–100 |
| Desktop| 100 |

---

## 🧠 Design Decisions

### Why Redux Toolkit was not used
Token state is:
- Flat
- Real-time driven
- Scoped to a single page

Local state + WebSocket updates provided a simpler and more performant solution without unnecessary global state complexity.

### Why React Query was optional
REST is only used for **initial hydration**.  
WebSocket becomes the source of truth after connection.

---

## 🧪 Loading & Error Handling

- Skeleton shimmer during loading
- Graceful fallback states
- Defensive typing across API and WebSocket payloads

---

## 📱 Responsive Design

- Fully responsive down to **320px**
- Column visibility adapts by screen size
- Mobile-optimized interactions

---

## 🛠️ Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

- Create a `.env` file in backend/:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📌 Notes
- **The WebSocket server simulates real-time token price fluctuations.**
- **Backend and frontend are fully decoupled to ensure scalability and maintainability.**
- **The codebase prioritizes clarity, reusability and performance.**
- **Frontend follows a component-driven architecture with reusable UI primitives.**
- **WebSocket logic is isolated using custom React hooks for clean lifecycle management.**

---

## ✅ Deliverables Checklist
- GitHub repository with clean and meaningful commits
- REST API built with Node.js, Express and TypeScript
- WebSocket server for real-time token updates
- Pixel-perfect, responsive UI using Next.js and Tailwind CSS
- Lighthouse score ≥ 90 (Mobile & Desktop)
- Frontend deployed on Vercel
- Public YouTube demo video showcasing the project

--- 

## 👤 Author
- **Isha Doifode**

---





