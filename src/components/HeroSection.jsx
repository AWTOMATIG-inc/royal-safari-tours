export default function HeroSection({ children, banner }) {
  return (
    <section
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-full"
    >
      <div className="container">
        <div className="grid place-items-center min-h-[50vh]">{children}</div>
      </div>
    </section>
  );
}
