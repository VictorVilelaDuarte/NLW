export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="px28 relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[525px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes " />
      </div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lambrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
