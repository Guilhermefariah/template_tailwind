function App() {
  return (
    <>
      <div>
        <div className="w-full flex gap-3 items-center flex-col lg:flex-row justify-center">
          <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64 xs:bg-green-500"></div>
          <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64 xl:bg-red-500"></div>
          <div className="bg-blue-700 w-32 h-32 md:w-64 md:h-64"></div>
        </div>
      </div>
    </>
  );
}

export default App;
