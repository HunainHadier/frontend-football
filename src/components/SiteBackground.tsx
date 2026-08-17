const SiteBackground = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 gradient-soft" />
      <div className="absolute inset-0 bg-grid-fade opacity-40" />
      <div className="absolute left-[8%] top-[6rem] h-72 w-72 rounded-full bg-accent/35 blur-3xl" />
      <div className="absolute right-[6%] top-[24rem] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-secondary/80 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
};

export default SiteBackground;
