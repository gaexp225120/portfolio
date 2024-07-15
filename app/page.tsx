import Introduction from "@/components/Introduction";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="font-sans">
      <NavBar />
      <main className="bg-custom-gradient h-[80vh] flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <section>
          <Introduction />
        </section>
      </main>
    </div>
  );
}
