const Header = () => {
  return (
    <header>
      <nav class="border-gray-200 px-4 bg-slate-100 lg:px-6 py-2.5 mb-16">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r tracking-normal from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text xl:px-3">
              Sortlen
            </span>
          </div>
          <div class="flex items-center">
            <a href="https://github.com/MatejBendik/sortlen" target="_blank">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                class="h-8 xl:px-3"
                alt="Flowbite Logo"
              />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
