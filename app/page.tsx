import { Countdown } from "@/components/countdown";

export default function HomePage() {
  const eventDate = new Date(2025, 6, 1);

  return (
    <main>
      <section className="hidden md:flex justify-center items-center h-screen">
        <p>Ce site est disponible uniquement en version mobile. Changez d'appareil et réessayez</p>
      </section>
      <section className="md:hidden">
        <div className="h-full mx-auto w-full max-w-screen-2xl px-2.5">
          {eventDate < new Date() ? (
            <div className="flex flex-col justify-center items-center h-screen text-center">
              <h1 className="text-3xl mb-2">Il reste</h1>
              <Countdown targetDate={eventDate} />
              <h2 className="text-xl">avant le concours</h2>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl">Bienvenue !</h1>
              <h2 className="text-xl">sur la plateforme de vote du concours d'éloquence du Campus La Chataîgneraie</h2>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
