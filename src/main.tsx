import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import washerImage1 from './feature/product-listing/images/washer-1.png';
import washerImage2 from './feature/product-listing/images/washer-2.png';
import washerImage3 from './feature/product-listing/images/washer-3.png';

import "./main.scss";

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
          <img style={{ width: '300px', height: 'auto' }} id='img-1' className='product-image' src={washerImage1} alt="washer machine" />
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
        <li id='card-2' className='card-item'>
          <img style={{ width: '300px', height: 'auto' }} id='img-2' className='product-image' src={washerImage2} alt="dryer machine" />
          <h3 id='prod-name-2' className='product-name'>DV90T6240AX, Suszarka pompowa, 9 kg, biała</h3>
          <ul id='info-2' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (kg): <strong className='capacity-value'>9</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>60 x 65 x 85 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>Technologia Heat Pump, Panel AI Control, Silnik inwerterowy, Wyświetlacz LED</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              <div className='arrow-box'>B</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-2' className='price-value'>3 499</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>58,31 zł x 60 rat</p>
          <button id='btn-2' className='product-btn'>wybierz</button>
        </li>
        <li id='card-3' className='card-item'>
          <img style={{ width: '300px', height: 'auto' }} id='img-3' className='product-image' src={washerImage3} alt="dishwasher" />
          <h3 id='prod-name-3' className='product-name'>DW60M6040FS, Zmywarka, 14 kompletów, srebrna</h3>
          <ul id='info-3' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (kompletów): <strong className='capacity-value'>14</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>60 x 60 x 85 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>Technologia WaterWall, Silnik inwerterowy, Wyświetlacz LED, Programy szybkie</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              <div className='arrow-box'>A</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-3' className='price-value'>2 799</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>46,65 zł x 60 rat</p>
          <button id='btn-3' className='product-btn'>wybierz</button>
        </li>
        <li id='card-4' className='card-item'>
          <img style={{ width: '300px', height: 'auto' }} id='img-4' className='product-image' src={washerImage2} alt="fridge" />
          <h3 id='prod-name-4' className='product-name'>RB37J5230SS, Lodówka No Frost, 362 l, srebrna</h3>
          <ul id='info-4' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (l): <strong className='capacity-value'>362</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>60 x 67 x 185 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>No Frost, Chłodzenie Multi Flow, Półki szklane, Oświetlenie LED</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              <div className='arrow-box'>A+</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-4' className='price-value'>2 999</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>49,98 zł x 60 rat</p>
          <button id='btn-4' className='product-btn'>wybierz</button>
        </li>
        <li id='card-5' className='card-item'>
          <img style={{ width: '300px', height: 'auto' }} id='img-5' className='product-image' src={washerImage3} alt="oven" />
          <h3 id='prod-name-5' className='product-name'>NV75K5541RS, Piekarnik, 71 l, srebrny</h3>
          <ul id='info-5' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (l): <strong className='capacity-value'>71</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>60 x 55 x 60 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>Grill, Termoobieg, Oczyszczanie katalityczne, Wyświetlacz LED</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              <div className='arrow-box'>A</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-5' className='price-value'>2 499</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>41,65 zł x 60 rat</p>
          <button id='btn-5' className='product-btn'>wybierz</button>
        </li>
        <li id='card-6' className='card-item'>
          <img style={{ width: '300px', height: 'auto' }} id='img-6' className='product-image' src={washerImage1} alt="microwave" />
          <h3 id='prod-name-6' className='product-name'>MG23K3515AK, Mikrofala, 23 l, czarna</h3>
          <ul id='info-6' className='list-info'>
            <li className='capacity-info'>
              <p className='capacity-name'>Pojemność (l): <strong className='capacity-value'>23</strong></p>
            </li>
            <li className='dimensions-info'>
              <p className='dimensions-name'>Wymiary (GxSxW): <strong className='dimensions-value'>48 x 27 x 37 cm</strong></p>
            </li>
            <li className='functions-info'>
              <p className='functions-name'>Funkcje: <strong className='functions-value'>Grill, Moc 900W, Odszczelnianie pary, Wyświetlacz LED</strong></p>
            </li>
            <li className='energy-info'>
              <p className='energy-name'>Klasa energetyczna</p>
              <div className='arrow-box'>A</div>
            </li>
            <li className='expiration-info'>
              <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
            </li>
          </ul>
          <div className='product-price'>
            <h1 id='price-6' className='price-value'>699</h1>
            <div>
              <p>00</p>
              <p>zł</p>
            </div>
          </div>
          <p className='installments'>11,65 zł x 60 rat</p>
          <button id='btn-6' className='product-btn'>wybierz</button>
        </li>
      </ul>
    </section>

    <footer>
      <div className='card-expand'>
        <a href="">Pokaż więcej</a>
        <img src="/img/triangle.svg" alt="arrow" />
      </div>
    </footer>
  </StrictMode>
)
