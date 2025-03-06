import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-auto h-[1024px] flex flex-col background">
      <h1 className="text-4xl font-bold px-4 py-4 mt-6 mr-12 ml-12 rounded-2xl   flex justify-center items-center bg-white border-none">
        RANDOM GIFs
      </h1>
      <Random />
    </div>
  );
}
