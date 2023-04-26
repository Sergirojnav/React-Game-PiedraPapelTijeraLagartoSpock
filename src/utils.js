export const CHOICES = ['Piedra', 'Papel', 'Tijeras', 'Lagarto', 'Spock'];

export const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'Empate';
    } else if (
        (playerChoice === 'Piedra' && (computerChoice === 'Tijeras' || computerChoice === 'Lagarto')) ||
        (playerChoice === 'Papel' && (computerChoice === 'Piedra' || computerChoice === 'Spock')) ||
        (playerChoice === 'Tijeras' && (computerChoice === 'Papel' || computerChoice === 'Lagarto')) ||
        (playerChoice === 'Lagarto' && (computerChoice === 'Papel' || computerChoice === 'Spock')) ||
        (playerChoice === 'Spock' && (computerChoice === 'Piedra' || computerChoice === 'Tijeras'))
    ) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
};