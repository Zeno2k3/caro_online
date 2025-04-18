import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from "@mui/material"


import { RouterProvider } from 'react-router'
import router from './router/index.ts'
import theme from './constants/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <CssBaseline/>
    </ThemeProvider>
  </StrictMode>,
)
