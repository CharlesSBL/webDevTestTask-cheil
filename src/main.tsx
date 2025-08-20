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
        <li id='filter-1' className='filter-item filter-by'>
          <label htmlFor="sort-by">Sortuj Po:</label>
          <select id="sort-by">
            <option value="popularność">Popularność</option>
            <option value="cena">Cena</option>
            <option value="pojemność">pojemność</option>
          </select>
        </li>
        <li id='filter-2' className='filter-item filter-function'>
          <label htmlFor="sort-function">Funkcje:</label>
          <select id="sort-function">
            <option value="pokaż-wszystkie">Pokaż wszystkie</option>
            <option value="drzwi-addwash">Drzwi AddWash™</option>
            <option value="panel-ai-control">Panel AI Control</option>
            <option value="silnik-inwerterowy">Silnik inwerterowy</option>
            <option value="wyświetlacz-elektroniczny">Wyświetlacz elektroniczny</option>
          </select>
        </li>
        <li id='filter-3' className='filter-item filter-energy'>
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
        <li id='filter-4' className='filter-item filter-capacity'>
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

    <section className='card-listing'>
      <div className='product-counter'>
        <p>Liczba wyników: 23</p>
      </div>
      <ul className='card-grid'>
        <li id='card-1' className='card-item'>
          <img id='img-1' className='product-image' src="/img/image.png" alt="washer machine" />
          <h3 id='prod-name-1' className='product-name'>WW90T754ABT, Pralka QuickDrive™, 9 kg, biała</h3>
          <ul id='info-1' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (kg): <strong className='capacity-value'>9</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>55 x 60 x 85 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              {/* <img id='energy-a' className='energy-value' src="/img/class-A.png" alt="A" /> */}
              <div className='arrow-box'>A</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-1' className='price-value'>3 199</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>53,31 zł x 60 rat</p>
          <button id='btn-1' className='product-btn'>wybierz</button>
        </li>
      </ul>
    </section>

    <footer>
      <div className='card-expand'>
        <a href="">Pokaż więcej</a>
        <img src="/img/triangle.svg" alt="triangle" />
      </div>
    </footer>
  </StrictMode>
)
