export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-10 text-xs text-muted flex flex-col sm:flex-row gap-4 justify-between">
        <p>? {new Date().getFullYear()} Cognitive Waves</p>
        <p>Designed with minimal motion & careful calm</p>
      </div>
    </footer>
  );
}
