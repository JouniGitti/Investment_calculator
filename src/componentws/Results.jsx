import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultsData[0].valueEndOfYear - 
        resultsData[0].interest - 
        resultsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Vuosi</th>
                    <th>Sijoituksen arvo</th>
                    <th>Korko vuodessa</th>
                    <th>Kokonaiskorko</th>
                    <th>Sijoitettu pääoma</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearlyData => {
                    const totalInterestValue = 
                        yearlyData.valueEndOfYear - 
                        yearlyData.annualInvestment * yearlyData.year - 
                        initialInvestment;
                    const totalInvestedCapital = yearlyData.valueEndOfYear - totalInterestValue;

                    return <tr key={yearlyData.year}>
                        <td>{yearlyData.year}</td>
                        <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearlyData.interest)}</td>
                        <td>{formatter.format(totalInterestValue)}</td>
                        <td>{formatter.format(totalInvestedCapital)}</td>

                    </tr>
                })}
            </tbody>
        </table>
    )
}