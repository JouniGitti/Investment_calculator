import logo from '../assets/investment-calculator-logo.png'

export function Header () {
    return (
        <header id="header">
            <img src={logo} alt="Logo for investment calculator"/>
            <h1>Sijoituslaskuri</h1>
        </header>
    )
}