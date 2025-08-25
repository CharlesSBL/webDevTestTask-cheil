import { installmentsMap } from "../../../functions/installmentsMap"
import type { InstallmentsInterfaceRo } from "../../../types/cardTypes"


export default function Installments(
    { installProps }: Readonly<InstallmentsInterfaceRo>
) {
    return (
        <>
            {installmentsMap(installProps)}
        </>
    )
}