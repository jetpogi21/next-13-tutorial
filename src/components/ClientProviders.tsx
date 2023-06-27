"use client";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect, FC } from "react";
import { Toaster } from "@/components/ui/Toaster";

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders: FC<ClientProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <SessionProvider>{children}</SessionProvider>;
  }

  return (
    <ThemeProvider attribute="class">
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;
