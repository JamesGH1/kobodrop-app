import AppleLogo from "../assets/logos/app_store.svg";

function Hero() {
  return (
    <section>
      <div>
        <h1>Start spending the smart way</h1>
        <p>
          Take Control of Your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
      </div>
      <a
        href="https://www.apple.com/app-store"
        className="hover:bg-950 flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white active:bg-zinc-800"
      >
        <img src={AppleLogo} alt="Apple Logo" className="w-5" />
        Download on the App Store
      </a>
    </section>
  );
}

export default Hero;
