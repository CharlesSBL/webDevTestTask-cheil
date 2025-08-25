import { useContext } from "react";
import { MaxContext } from "../context/context";

export default function Footer() {
    const maxCards = useContext(MaxContext);

    return (
        <footer>
            <div className='card-expand'>
                <button className="expand-btn"
                    onClick={() => {
                        console.log("click!");

                        maxCards?.setCardsAmountMax((current) => {
                            return current + 6
                        })
                    }}
                >
                    <p>Pokaż więcej</p>
                </button>
            </div>
        </footer >
    )
}