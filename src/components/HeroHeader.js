function HeroHeader(){
    return(
        <div className="text-center text-slate-700 bg-slate-300 h-4/5 grid content-center">
            <h1 className=" p-6 text-4xl font-bold">Wyrusz z nami na przygodę!</h1>
            <div>
                <p>Nasza dróżnyna Milion Ryb team Specjalizuje się w spiningu. Metoda ta pochłonęła nas całkowicie i nie umiemy się od niej uwlonić! </p>
                <p>Naszą codziennością jest szlifowanie umiejętności połowu szczupaków, okoni i sandaczy!</p>
                <p>Tworzymy własne przynęty, które sprawdzą się w bocznym troku, dropshocie i opadzie.</p>
                <p>Naszym marzeniem jest stworzenie dużej społeczości wędkarskiej!</p>
                <button className="rounded-full bg-lime-500 py-2 px-4 m-4 w-"><p className="font-bold">Dołącz do nas!</p></button>
            </div>
        </div>);
}

export default HeroHeader;