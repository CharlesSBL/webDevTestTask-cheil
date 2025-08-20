import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header>
      <h1>Wybierz urządzenie</h1>
    </header>

    <section className='filter-bar'>
      <input className='search-input' placeholder='Search...' type="search" />

      <ul className='filter-menu'>
        <li className='filter-item filter-item-1 filter-by'>
          <label htmlFor="sort-by">Sortuj Po:</label>
          <select id="sort-by">
            <option value="popularność">Popularność</option>
            <option value="cena">Cena</option>
            <option value="pojemność">pojemność</option>
          </select>
        </li>
        <li className='filter-item filter-item-2 filter-function'>
          <label htmlFor="sort-function">Funkcje:</label>
          <select id="sort-function">
            <option value="pokaż-wszystkie">Pokaż wszystkie</option>
            <option value="drzwi-addwash">Drzwi AddWash™</option>
            <option value="panel-ai-control">Panel AI Control</option>
            <option value="silnik-inwerterowy">Silnik inwerterowy</option>
            <option value="wyświetlacz-elektroniczny">Wyświetlacz elektroniczny</option>
          </select>
        </li>
        <li className='filter-item filter-item-3 filter-energy'>
          <label htmlFor="sort-energy">Klasa energetyczna:</label>
          <select id="sort-energy">
            <option value="pokaż-wszystkie">Pokaż wszystkie</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
            <option value="d">D</option>
            <option value="f">F</option>
          </select>
        </li>
        <li className='filter-item filter-item-4 filter-capacity'>
          <label htmlFor="sort-capacity">Pojemność:</label>
          <select id="sort-capacity">
            <option value="pokaż-wszystkie">Pokaż wszystkie</option>
            <option value="9kg">9kg</option>
            <option value="8kg">8kg</option>
            <option value="10.5kg">10.5kg</option>
          </select>
        </li>
      </ul>
    </section>



    <footer>
      <div className='card-expand'></div>
    </footer>
  </StrictMode>
)
