"use client";

export function WhatsAppButton() {
  const phone = "5492995743730";
  const message = "Hola! Me interesa saber más sobre Valley Software.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulsos */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping" style={{ animationDelay: "0.4s" }} />

      {/* Ícono WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 relative z-10"
        fill="white"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.827.737 5.476 2.027 7.775L0 32l8.455-2.016A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.756-1.845l-.484-.287-5.02 1.197 1.23-4.895-.317-.504A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.778c-.398-.199-2.354-1.162-2.718-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.158-1.227-2.954-.323-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.361-1.393 3.32s1.426 3.85 1.625 4.116c.199.265 2.806 4.283 6.798 6.005.95.41 1.692.655 2.27.839.953.304 1.82.261 2.505.158.764-.114 2.354-.962 2.686-1.891.332-.929.332-1.726.232-1.891-.1-.166-.364-.265-.762-.464z" />
      </svg>
    </a>
  );
}
