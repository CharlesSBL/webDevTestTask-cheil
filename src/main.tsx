import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import washerImage1 from '../assets/images/washer/washer-1.png';
import washerImage2 from '../assets/images/washer/washer-2.png';
import washerImage3 from '../assets/images/washer/washer-3.png';

import "./css/main.scss";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className='header-title'>
      <h1 className='title-name'>Wybierz urządzenie</h1>
    </header>

    <section className='container-out container-filter-out'>
      <div className='container-in container-filter-in'>
        <div className='filter-bar'>
          <input className='search-input' placeholder='Search...' type="search" />

          <ul className='filter-menu'>
            <li id='filter-1' className='filter-item filter-by'>
              <div className="sort-by">
                <span>Sortuj po:</span>
              </div>

              <div className="sort-by-options">
                <div className='selected'>
                  <div className="sort-by-option selected-option" data-value="popularność">
                    <span>Popularność</span>
                    <img src="" alt="arrow" />
                  </div>
                </div>

                {/* <div className='non-selected'>
                  <div className="sort-by-option" data-value="cena">
                    <span>Cena</span>
                    <img src="./arrow.svg" alt="arrow" />
                  </div>
                  <div className="sort-by-option" data-value="pojemność">
                    <span>Pojemność</span>
                    <img src="./arrow.svg" alt="arrow" />
                  </div>
                </div> */}
              </div>
            </li>

            <li id='filter-2' className='filter-item filter-function'>
              <div className="sort-by">
                <span>Funkcje:</span>
              </div>
              <div className="sort-by-options">
                <div className='selected'>
                  <div className="sort-by-option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="./arrow.svg" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                <div className="sort-by-option" data-value="drzwi-addwash">
                <span>Drzwi AddWash™</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="panel-ai-control">
                <span>Panel AI Control</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="silnik-inwerterowy">
                <span>Silnik inwerterowy</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="wyświetlacz-elektroniczny">
                <span>Wyświetlacz elektroniczny</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
              </div> */}
              </div>
            </li>

            <li id='filter-3' className='filter-item filter-energy'>
              <div className="sort-by">
                <span>Klasa energetyczna:</span>
              </div>
              <div className="sort-by-options">
                <div className='selected'>
                  <div className="sort-by-option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="./arrow.svg" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                <div className="sort-by-option" data-value="a">
                <span>A</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="b">
                <span>B</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="c">
                <span>C</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="d">
                <span>D</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="f">
                <span>F</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
              </div> */}
              </div>
            </li>

            <li id='filter-4' className='filter-item filter-capacity'>
              <div className="sort-by">
                <span>Pojemność:</span>
              </div>
              <div className="sort-by-options">
                <div className='selected'>
                  <div className="sort-by-option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="./arrow.svg" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                <div className="sort-by-option" data-value="9kg">
                <span>9kg</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="8kg">
                <span>8kg</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
                <div className="sort-by-option" data-value="10.5kg">
                <span>10.5kg</span>
                <img src="./arrow.svg" alt="arrow" />
                </div>
              </div> */}
              </div>
            </li>
          </ul>

        </div>
      </div>
    </section>

    {/* <section className='container-out container-listing-out'>
      <div className='container-in container-listing-in'>
        <div className='card-listing'>
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
                  <div className='arrow-box'>A</div>
                </li>
                <li className='expiration-info'>
                  <p className='expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                </li>
              </ul>
              <div className='product-price'>
                <h1 id='price-1' className='price-value'>3 199</h1>
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
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
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
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
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
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
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
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
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
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
                <div className='price-value-right'>
                  <p className='value-right-val'><strong>00</strong></p>
                  <p className='value-right-currency'><strong>zł</strong></p>
                </div>
              </div>
              <p className='installments'>11,65 zł x 60 rat</p>
              <button id='btn-6' className='product-btn'>wybierz</button>
            </li>
          </ul>
        </div>
      </div>
    </section> */}

    {/* <footer>
      <div className='card-expand'>
        <a href="">Pokaż więcej</a>
        <img src="/img/triangle.svg" alt="arrow" />
      </div>
    </footer> */}
  </StrictMode>
)