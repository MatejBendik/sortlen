const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-slate-100 w-full">
      <div className="mx-auto max-w-screen-xl p-4 text-center">
        <span className="text-sm text-gray-900">
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/BendikMatej"
            className="text-blue-800 hover:text-blue-900"
            target="_blank"
          >
            Matej Bendík
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
