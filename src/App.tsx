import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "@/components/Navbar";
import { MeteorShower } from "@/components/MeteorShower";
import BlogPage from "./components/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <MeteorShower />
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-0 sm:py-6 flex flex-col items-center justify-center min-h-screen">
                <Index />
              </div>
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-10 lg:px-16 pt-10 pb-20 flex flex-col items-start">
                <BlogPage />
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-10 lg:px-16 pt-10 pb-20 flex flex-col items-start">
                <NotFound />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
