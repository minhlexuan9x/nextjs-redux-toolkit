import ClientLoginFormWrapper from "@/components/ClientLoginFormWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen w-full flex">
        <div className="m-auto">
          <h1 className="font-bold text-3xl">Login</h1>
          <br />
          <ClientLoginFormWrapper />
        </div>
      </div>
    </main>
  );
}
