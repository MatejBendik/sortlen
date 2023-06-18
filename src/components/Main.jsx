import { useState } from "react";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [sortedLines, setSortedLines] = useState([]);
  const [sortingOption, setSortingOption] = useState("longest");
  const [prefixOption, setPrefixOption] = useState("");

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

  return (
    <>
      <div class="container mx-auto mb-32 md:max-w-screen-xl px-3">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-8">
          <div class="col-span-3 rounded-lg bg-slate-100 p-3 md:h-72">
            <label
              for="message"
              class="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Input
            </label>
            <textarea
              id="message"
              rows="10"
              class="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 outline-none resize-none"
              placeholder="Write your list here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div class="col-span-3 h-56 rounded-lg bg-slate-100 px-3 pt-3 md:col-span-2 md:h-72">
            <label
              for="countries"
              class="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Options
            </label>
            <select
              id="symbols"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none"
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

            <div class="mb-4 flex items-center pt-3 md:pt-8">
              <input
                id="shortest-first-radio"
                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-white outline-none"
                type="radio"
                value="shortest"
                name="sort-option"
                checked={sortingOption === "shortest"}
                onChange={() => setSortingOption("shortest")}
              />
              <label
                for="shortest-first-radio"
                class="ml-2 text-sm font-medium text-slate-800"
              >
                Shortest first
              </label>
            </div>
            <div class="flex items-center">
              <input
                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-white outline-none"
                id="longest-first-radio"
                type="radio"
                value="longest"
                name="sort-option"
                checked={sortingOption === "longest"}
                onChange={() => setSortingOption("longest")}
              />
              <label
                for="longest-first-radio"
                class="ml-2 text-sm font-medium text-slate-800"
              >
                Longest first
              </label>
            </div>

            <div class="mx-auto flex justify-center py-3 md:pt-8">
              <button
                type="button"
                class="text-md mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-center font-medium text-white transition hover:bg-gradient-to-bl"
                onClick={sortTextByLength}
              >
                Sort
              </button>
            </div>
          </div>
          <div class="col-span-3 rounded-lg bg-slate-100 p-3 md:h-72">
            <label
              for="message"
              class="mb-2 block text-center text-xl font-medium text-slate-800"
            >
              Output
            </label>
            <textarea
              id="message"
              rows="10"
              class="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 outline-none"
              value={sortedLines
                .map((line, index) => {
                  const prefix = getPrefixSymbol(index);
                  return `${prefix} ${line}`;
                })
                .join("\n")}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
