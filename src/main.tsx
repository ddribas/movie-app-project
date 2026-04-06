import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.tsx'
import Layout from './components/Layout/Layout.tsx'
import "@fontsource/inter";
import MoviesListPage from './pages/MoviesListPage/MoviesListPage.tsx'
import SeriesListPage from './pages/SeriesListPage/SeriesListPage.tsx'
import DetailsPage from './pages/DetailsPage/DetailsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index  element={<MoviesListPage />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
          <Route path="/series">
            <Route index  element={<SeriesListPage />} />
            <Route path=":id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
