import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/global.css";
import MusicPage from "./pages/MusicPage/MusicPage";
import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <MusicPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
