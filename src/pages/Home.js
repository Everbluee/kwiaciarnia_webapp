const Home = () => {
    return (  
        <><div className="home">
            <h2>Witamy na stronie internetowej Kwiaciarni "Gardena"</h2>
            <p>
                Na tej stronie jesteś w stanie zarządzać zasobami tej kwiaciarni. Na pasku nawigacji znajdziesz przyciski,
                które przekierują Cię do odpowiednich stron. Każda z nich odpowiada za ważne człony naszego sklepu.
            </p>
        </div>
        <br></br>
        <div className="container">
            <div className="box">
                <h2>Produkty</h2>
                <p>Ta zakładka oferuje podgląd wszystkich produktów, które znajdują się w sklepie oraz
                    ich aktualizację. Znajdziesz tam również miejsca, w których możesz zdefiniować i dodać nowe produkty, 
                    a także usunąć produkty już istniejące. W naszym sklepie mamy 4 rodzaje produktów: rośliny, narzędzia, doniczki
                    oraz produkty do uprawy roślin. 
                </p>
            </div>
            <div className="box">
                <h2>Pracownicy</h2>
                <p>W tej zakładce znajdziesz informacje na temat naszych pracowników. Będziesz mieć możliwość zaktualizowania 
                    danych konkretnego pracownika w tym stanowisko oraz wynagrodzenia, dodanie nowej osoby do załogi, 
                    bądź też usunięcie osoby z bazy danych i nie pozostawienie po niej śladu.
                </p>
            </div>
        </div>
        <div className="container">
            <div className="box">
                <h2>Klienci</h2>
                <p>Tutaj będziesz mógł zobaczyć kto kupuje u nas w sklepie. Zbieramy dane na temat naszych klientów, aby później łatwiej
                    było nam się z nimi komunikować. Dla każdego klienta będziesz mógł zobaczyć jego dane i to czy jest stałym klientem.
                </p>
            </div>
            <div className="box">
                <h2>Zamówienia</h2>
                <p>Ta zakładka oferuje nam bogactwo zamówień jakie zostały kiedykolwiek złożone od początku istnienia firmy.
                    Jesteśmy w stanie spojrzeć na zamówienia, które przeszły już do historii, a także śledzić postępy przy zamówieniach, 
                    które nie zostały jeszcze dostarczone do klienta. 
                </p>
            </div>
        </div>
        </>
    );
}
 
export default Home;
