import type { InstallmentsInterface } from "../types/cardTypes";

export function installmentsMap(installProps: InstallmentsInterface) {
    if (installProps.installmentsMonthlyFee != null && installProps.currencyKind != null && installProps.installmentsRate != null) {
        return <p className='installments'>{installProps.installmentsMonthlyFee} {installProps.currencyKind} x {installProps.installmentsRate} rat</p>
    }
}