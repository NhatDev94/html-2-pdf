import { CustomBlock } from "./components/cv/CustomBlock";
import { ReactToPdf } from "./components/reactToPdf";
import { useReactToPdf } from "./hooks/useReactToPdf";

function App() {
  const { containRef, toPDF } = useReactToPdf();

  return (
    <div className="w-screen h-[100dvh] grid grid-cols-7">
      <div className="col-span-5 w-full h-full overflow-y-scroll bg-gray-600 px-20 pb-20">
        <h2 className="w-full text-center text-3xl font-bold text-black py-12">
          My CV
        </h2>
        <ReactToPdf containRef={containRef}>
          <CustomBlock />
        </ReactToPdf>
      </div>
      <div className="col-span-2 h-full p-20">
        <button onClick={toPDF}>To PDF</button>
      </div>
    </div>
  );
}

export default App;
