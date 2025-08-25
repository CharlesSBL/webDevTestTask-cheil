import { useContext } from "react";
import { MaxContext } from "../context/context";

export default function Footer() {
    const maxCards = useContext(MaxContext);

    return (
        <footer>
            <div className='card-expand'>
                <button
                    onClick={() => {
                        console.log("click!");

                        maxCards?.setCardsAmountMax((current) => {
                            return current + 6
                        })
                    }}
                >
                    <p>Pokaż więcej</p>
                    <img src="/assets/images/foot_arrow/foot_arrow.svg" alt="" />
                </button>
            </div>
        </footer >
    )
}