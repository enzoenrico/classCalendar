import Header from "./Header";

function Calendar() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex items-center justify-around flex-col">
      <div className="lg:w-11/12 w-screen h-screen p-2 rounded-md bg-dayMode dark:bg-nightMode object-cover">
        {/* Header calendario, contendo dia mes + dia semana + icone se dia ou noite */}
        <Header />
        
      </div>
    </div>
  );
}

export default Calendar;
