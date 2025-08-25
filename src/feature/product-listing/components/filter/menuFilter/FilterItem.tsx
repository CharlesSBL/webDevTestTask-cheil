import { useContext, useEffect, useRef, useState } from "react";
import type { IFilterItemRo, IFetchStateData } from "../../../interfaces/interfaces";
import { fetchContext } from "../../../context/context";


// filter item 
export function FilterItem(
    { filtItem }: Readonly<IFilterItemRo>
) {
    const [showOptions, setShowOptions] = useState(false);
    const selectedRef = useRef<HTMLDivElement>(null);

    const [selectOpt, setSelectOpt] = useState<string>(filtItem.mainOption);
    const [unselectOpt, setUnselectOpt] = useState<string[]>(filtItem.optionList);

    const fetchStateData: IFetchStateData = useContext(fetchContext)!;
    const {
        setMenuFilterStateOptions,
    } = fetchStateData;


    useEffect(() => {
        if (!showOptions) return;

        const pageClick = (e: MouseEvent) => {
            if (!selectedRef.current?.contains(e.target as HTMLElement)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("click", pageClick);
        return () => document.removeEventListener("click", pageClick);
    }, [showOptions]);

    useEffect(() => {
        setMenuFilterStateOptions(prevState => {
            const newState = prevState.slice();

            newState[filtItem.id - 1] = selectOpt;

            return newState;
        })
    }, [selectOpt])

    return (

        <li
            id={`filter-${filtItem.id}`}
            className={`menu-item filter-${filtItem.name}`}
        >
            <div className="menu-item-header">
                <span>{filtItem.header}:</span>
            </div>

            <div className="options-box">
                <div
                    className="selected"
                    ref={selectedRef}
                >
                    <button
                        className="option selected-option"
                        data-value={selectOpt}
                        onClick={() => setShowOptions(!showOptions)}
                    >
                        <span>{
                            selectOpt.includes("wszystkie") ?
                                "Pokaż wszystkie"
                                : selectOpt.replace(
                                    selectOpt.charAt(0),
                                    selectOpt.charAt(0).toLocaleUpperCase()
                                )
                        }</span>
                        <img src="/assets/images/arrow/arrow.svg" alt="arrow" />
                    </button>
                </div>

                {showOptions && (
                    <div className="non-selected">
                        {unselectOpt.includes("wszystkie") && (
                            <button
                                id="option-all"
                                className="non-selected-option"
                                data-value="wszystkie"
                                onClick={() => {
                                    const newUnselectArr = unselectOpt.filter(item => !item.includes("wszystkie"));
                                    newUnselectArr.push(selectOpt);
                                    setUnselectOpt(newUnselectArr);

                                    setSelectOpt("wszystkie");
                                }}
                            >
                                <span>Wszystkie</span>
                            </button>
                        )}

                        {unselectOpt.filter(item => !item.includes("wszystkie")).map((option: string, id) => {
                            return (
                                <button
                                    key={option + id}
                                    className="non-selected-option"
                                    data-value={option}
                                    onClick={() => {
                                        const newUnselectArr = unselectOpt.filter(item => !item.includes(option));
                                        newUnselectArr.push(selectOpt);
                                        setUnselectOpt(newUnselectArr);

                                        setSelectOpt(option);
                                    }}
                                >
                                    <span>{option.replace(option.charAt(0), option.charAt(0).toLocaleUpperCase())}</span>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
        </li>


    );
}