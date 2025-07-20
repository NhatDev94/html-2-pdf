import { CustomBlock } from "./components/cv/CustomBlock";
import { ReactToPdf } from "./components/reactToPdf";
import { useReactToPdf } from "./hooks/useReactToPdf";

function App() {
  const { containRef, toPDF } = useReactToPdf();

  return (
    <div className="w-screen h-[100dvh] grid grid-cols-2">
      <div className="col-span-1 w-full h-full overflow-y-scroll bg-gray-600 px-20 pb-20">
        <h2 className="w-full text-center text-3xl font-bold text-black py-12">
          My CV
        </h2>
        <ReactToPdf containRef={containRef}>
          <CustomBlock />
        </ReactToPdf>
      </div>
      <div className="col-span-1 h-full p-20">
        <button
          className="px-6 py-1.5 rounded-lg bg-green-500 text-white text-sm font-semibold cursor-pointer"
          onClick={toPDF}
        >
          To PDF
        </button>

        <div id="hi" className="mt-4 w-full border border-black/10">
          <p className="w-full p-8 bg-gray-200 text-center">Demo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
