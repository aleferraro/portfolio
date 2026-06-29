export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Alessandro Ferraro. Tutti i diritti riservati.</p>
        <p className="text-center md:text-right">Senior Full Stack Developer per ruoli selezionati e collaborazioni mirate.</p>
      </div>
    </footer>
  );
}
