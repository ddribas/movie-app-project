import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.tsx'
import Layout from './components/Layout/Layout.tsx'
import "@fontsource/inter";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index  element={<Home />} />
            <Route path=":id" element={<Home />} />
          </Route>
          <Route path="/series">
            <Route index  element={<Home />} />
            <Route path=":id" element={<Home />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
