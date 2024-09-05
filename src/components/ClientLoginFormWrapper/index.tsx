"use client";

import ReduxProvider from "@/store/ReduxProvider";
import ClientLoginForm from "../ClientLoginForm";

export default function ClientLoginFormWrapper() {
  return (
    <ReduxProvider>
      <ClientLoginForm />
    </ReduxProvider>
  );
}
