import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import washerImage1 from '../assets/images/washer/washer-1.png';
import washerImage2 from '../assets/images/washer/washer-2.png';
import washerImage3 from '../assets/images/washer/washer-3.png';

import "./css/main.scss";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <header className='section-header-title'>
      <h1 className='section-title-name'>Wybierz urządzenie</h1>
    </header>

    <section className='container-out container-filter-out'>
      <div className='container-in container-filter-in'>
        <div className='filter-bar'>
          <input className='search-input' placeholder='Search...' type="search" />

          <ul className='filter-menu'>
            <li id='filter-1' className='menu-item filter-by'>
              <div className="menu-item-header">
                <span>Sortuj po:</span>
              </div>

              <div className="options-box">
                <div className='selected'>
                  <div className="option selected-option" data-value="popularność">
                    <span>Popularność</span>
                    <img src="" alt="arrow" />
                  </div>
                </div>

                {/* <div className='non-selected'>
                  <div className="option" data-value="cena">
                    <span>Cena</span>
                    <img src="" alt="arrow" />
                  </div>
                  <div className="option" data-value="pojemność">
                    <span>Pojemność</span>
                    <img src="" alt="arrow" />
                  </div>
                </div> */}
              </div>
            </li>

            <li id='filter-2' className='menu-item filter-function'>
              <div className="menu-item-header">
                <span>Funkcje:</span>
              </div>
              <div className="options-box">
                <div className='selected'>
                  <div className="option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                <div className="option" data-value="drzwi-addwash">
                <span>Drzwi AddWash™</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="panel-ai-control">
                <span>Panel AI Control</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="silnik-inwerterowy">
                <span>Silnik inwerterowy</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="wyświetlacz-elektroniczny">
                <span>Wyświetlacz elektroniczny</span>
                <img src="" alt="arrow" />
                </div>
              </div> */}
              </div>
            </li>

            <li id='filter-3' className='menu-item filter-energy'>
              <div className="menu-item-header">
                <span>Klasa energetyczna:</span>
              </div>
              <div className="options-box">
                <div className='selected'>
                  <div className="option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                <div className="option" data-value="a">
                <span>A</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="b">
                <span>B</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="c">
                <span>C</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="d">
                <span>D</span>
                <img src="" alt="arrow" />
                </div>
                <div className="option" data-value="f">
                <span>F</span>
                <img src="" alt="arrow" />
                </div>
              </div> */}
              </div>
            </li>

            <li id='filter-4' className='menu-item filter-capacity'>
              <div className="menu-item-header">
                <span>Pojemność:</span>
              </div>
              <div className="options-box">
                <div className='selected'>
                  <div className="option selected-option" data-value="pokaż-wszystkie">
                    <span>Pokaż wszystkie</span>
                    <img src="" alt="arrow" />
                  </div>
                </div>
                {/* <div className='non-selected'>
                  <div className="option" data-value="9kg">
                    <span>9kg</span>
                    <img src="" alt="arrow" />
                  </div>
                  <div className="option" data-value="8kg">
                    <span>8kg</span>
                    <img src="" alt="arrow" />
                  </div>
                  <div className="option" data-value="10.5kg">
                    <span>10.5kg</span>
                    <img src="" alt="arrow" />
                  </div>
                </div> */}
              </div>
            </li>
          </ul>


        </div>
      </div>
    </section>

    <section className='container-out container-counter-out'>
      <div className='container-in container-counter-in'>
        <div className='product-counter'>
          <p>Liczba wyników: 23</p>
        </div>
      </div>
    </section>

    <section className='container-out container-listing-out'>
      <div className='container-in container-listing-in'>
        <div className='product-listing'>

          <ul className='card-grid'>
            <li id='card-1' className='card-item'>
              <img id='img-1' className='product-image' src={washerImage1} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-1' className='product-name'>WW90T754ABT, Pralka QuickDrive™, 9 kg, biała</h3>
                <ul id='info-1' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>9</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>55 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>Drzwi AddWash™, Panel AI Control, Silnik inwerterowy, Wyświetlacz elektroniczny</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>A</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
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

              </div>
              <button id='btn-1' className='product-btn'>wybierz</button>
            </li>
            <li id='card-2' className='card-item'>
              <img id='img-2' className='product-image' src={washerImage2} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-2' className='product-name'>WW80T554DAE, Pralka EcoBubble™, 8 kg, biała</h3>
                <ul id='info-2' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>8</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>55 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>EcoBubble™, Panel AI Control, Silnik inwerterowy</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>B</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                  </li>
                </ul>
                <div className='product-price'>
                  <h1 id='price-2' className='price-value'>2 799</h1>
                  <div className='price-value-right'>
                    <p className='value-right-val'><strong>00</strong></p>
                    <p className='value-right-currency'><strong>zł</strong></p>
                  </div>
                </div>
                <p className='installments'>46,65 zł x 60 rat</p>

              </div>
              <button id='btn-2' className='product-btn'>wybierz</button>
            </li>
            <li id='card-3' className='card-item'>
              <img id='img-3' className='product-image' src={washerImage3} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-3' className='product-name'>WW10T654DLH, Pralka AddWash™, 10.5 kg, biała</h3>
                <ul id='info-3' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>10.5</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>60 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>Drzwi AddWash™, Panel AI Control, Silnik inwerterowy</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>A</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                  </li>
                </ul>
                <div className='product-price'>
                  <h1 id='price-3' className='price-value'>3 599</h1>
                  <div className='price-value-right'>
                    <p className='value-right-val'><strong>00</strong></p>
                    <p className='value-right-currency'><strong>zł</strong></p>
                  </div>
                </div>
                <p className='installments'>59,98 zł x 60 rat</p>

              </div>
              <button id='btn-3' className='product-btn'>wybierz</button>
            </li>
            <li id='card-4' className='card-item'>
              <img id='img-4' className='product-image' src={washerImage1} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-4' className='product-name'>WW70T4040CE, Pralka, 7 kg, biała</h3>
                <ul id='info-4' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>7</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>55 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>Panel AI Control, Silnik inwerterowy</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>C</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                  </li>
                </ul>
                <div className='product-price'>
                  <h1 id='price-4' className='price-value'>2 199</h1>
                  <div className='price-value-right'>
                    <p className='value-right-val'><strong>00</strong></p>
                    <p className='value-right-currency'><strong>zł</strong></p>
                  </div>
                </div>
                <p className='installments'>36,65 zł x 60 rat</p>

              </div>
              <button id='btn-4' className='product-btn'>wybierz</button>
            </li>
            <li id='card-5' className='card-item'>
              <img id='img-5' className='product-image' src={washerImage2} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-5' className='product-name'>WW90T534DAE, Pralka EcoBubble™, 9 kg, biała</h3>
                <ul id='info-5' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>9</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>55 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>EcoBubble™, Panel AI Control</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>B</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                  </li>
                </ul>
                <div className='product-price'>
                  <h1 id='price-5' className='price-value'>2 999</h1>
                  <div className='price-value-right'>
                    <p className='value-right-val'><strong>00</strong></p>
                    <p className='value-right-currency'><strong>zł</strong></p>
                  </div>
                </div>
                <p className='installments'>49,98 zł x 60 rat</p>

              </div>
              <button id='btn-5' className='product-btn'>wybierz</button>
            </li>
            <li id='card-6' className='card-item'>
              <img id='img-6' className='product-image' src={washerImage3} alt="washer machine" />
              <div className='card-body'>
                <h3 id='prod-name-6' className='product-name'>WW80T304MBW, Pralka, 8 kg, biała</h3>
                <ul id='info-6' className='product-info-list'>
                  <li className='product-info-item capacity-info'>
                    <p className='info-name capacity-name'>Pojemność (kg): <strong className='product-info-value capacity-value'>8</strong></p>
                  </li>
                  <li className='product-info-item dimensions-info'>
                    <p className='info-name dimensions-name'>Wymiary (GxSxW): <strong className='product-info-value dimensions-value'>55 x 60 x 85 cm</strong></p>
                  </li>
                  <li className='product-info-item functions-info'>
                    <p className='info-name functions-name'>Funkcje: <strong className='product-info-value functions-value'>Silnik inwerterowy</strong></p>
                  </li>
                  <li className='product-info-item energy-info'>
                    <p className='info-name energy-name'>Klasa energetyczna</p>
                    <span className='energy-value'>D</span>
                  </li>
                  <li className='product-info-item expiration-info'>
                    <p className='info-name expiration-name'>Cena obowiązuje: <span className='expiration-value'>15.09.2022 - 21.09.2022</span></p>
                  </li>
                </ul>
                <div className='product-price'>
                  <h1 id='price-6' className='price-value'>1 899</h1>
                  <div className='price-value-right'>
                    <p className='value-right-val'><strong>00</strong></p>
                    <p className='value-right-currency'><strong>zł</strong></p>
                  </div>
                </div>
                <p className='installments'>31,65 zł x 60 rat</p>

              </div>
              <button id='btn-6' className='product-btn'>wybierz</button>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer>
      <div className='card-expand'>
        <a href="">Pokaż więcej</a>
      </div>
    </footer>
  </StrictMode>
)