const Navigation = () => {
  const navItems = [
    { label: "เกี่ยวกับ", href: "#about" },
    { label: "ความสนใจ", href: "#learning" },
    { label: "งานอดิเรก", href: "#hobbies" },
    { label: "โปรเจค", href: "#projects" },
    { label: "เกียรติบัตร", href: "#certificates" },
    { label: "การเรียนรู้", href: "#learn-path" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 opacity-90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <h2 className="text-xl text-white font-semibold">Chankuz</h2>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
