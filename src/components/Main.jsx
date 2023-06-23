import { useState, useRef } from "react";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [sortedLines, setSortedLines] = useState([]);
  const [sortingOption, setSortingOption] = useState("longest");
  const [prefixOption, setPrefixOption] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const textareaRef = useRef(null);

  const sortTextByLength = () => {
    const lines = inputText.split("\n");
    let sorted;

    if (sortingOption === "shortest") {
      sorted = lines.sort((a, b) => a.length - b.length);
    } else {
      sorted = lines.sort((a, b) => b.length - a.length);
    }

    setSortedLines(sorted);
  };

  const getPrefixSymbol = (index) => {
    switch (prefixOption) {
      case "bullet":
        return "•";
      case "dash":
        return "–";
      case "arrow-right":
        return "→";
      case "arrow-left":
        return "←";
      case "number":
        return `${index + 1}.`;
      case "none":
        return "";
      default:
        return "";
    }
  };

  const handleCopyToClipboard = () => {
    textareaRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  return (
    <>
      <div className="container mx-auto mb-32 md:max-w-screen-xl px-3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-8">
          <div className="col-span-3 rounded-lg bg-slate-100 p-3 md:h-72">
            <label
              htmlFor="input"
              className="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Input
            </label>
            <textarea
              id="input"
              rows="10"
              className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 outline-none resize-none"
              placeholder="Write your list here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className="col-span-3 h-56 rounded-lg bg-slate-100 px-3 pt-3 md:col-span-2 md:h-72">
            <label
              htmlFor="symbols"
              className="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Options
            </label>
            <select
              id="symbols"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none"
              value={prefixOption}
              onChange={(e) => setPrefixOption(e.target.value)}
            >
              <option value="none">None</option>
              <option value="number">1. Number</option>
              <option value="bullet">• Bullet</option>
              <option value="dash">– Dash</option>
              <option value="arrow-right">→ Arrow right</option>
              <option value="arrow-left">← Arrow left</option>
            </select>

            <div className="mb-4 flex items-center pt-3 md:pt-8">
              <input
                id="shortest-first-radio"
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-white outline-none"
                type="radio"
                value="shortest"
                name="sort-option"
                checked={sortingOption === "shortest"}
                onChange={() => setSortingOption("shortest")}
              />
              <label
                htmlFor="shortest-first-radio"
                className="ml-2 text-sm font-medium text-slate-800"
              >
                Shortest first
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-white outline-none"
                id="longest-first-radio"
                type="radio"
                value="longest"
                name="sort-option"
                checked={sortingOption === "longest"}
                onChange={() => setSortingOption("longest")}
              />
              <label
                htmlFor="longest-first-radio"
                className="ml-2 text-sm font-medium text-slate-800"
              >
                Longest first
              </label>
            </div>

            <div className="mx-auto flex justify-center py-3 md:pt-8">
              <button
                type="button"
                className="text-md mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-center font-medium text-white transition hover:bg-gradient-to-bl"
                onClick={sortTextByLength}
              >
                Sort
              </button>
            </div>
          </div>
          <div className="col-span-3 rounded-lg bg-slate-100 p-3 md:h-72">
            <label
              htmlFor="output"
              className="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Output
            </label>
            <div className="relative">
              <textarea
                id="output"
                rows="10"
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 outline-none resize-none"
                value={sortedLines
                  .map((line, index) => {
                    const prefix = getPrefixSymbol(index);
                    return `${prefix} ${line}`;
                  })
                  .join("\n")}
                readOnly
                ref={textareaRef}
              ></textarea>
              <a
                href="#"
                className="absolute top-2 right-2 px-1 py-1.5 cursor-pointer"
                onClick={handleCopyToClipboard}
              >
                <img
                  src="/copy_to_clipboard.svg"
                  alt="Copy"
                  className="w-4 h-4"
                />
              </a>
              {showPopup && (
                <div className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-green-500 text-white rounded-lg text-xs">
                  Copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
