export default function MenuFilter() {
    return (
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


    );
}