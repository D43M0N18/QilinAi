import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Waitlist from "./components/Waitlist";

import Index from "./pages/Index";


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Global Toaster for notifications */}
      

      {/* App Routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
