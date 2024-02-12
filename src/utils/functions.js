const formatDate = (data) => {
    // Obter dia, mês e ano
    const dia = ("0" + data.getDate()).slice(-2); // Adiciona um zero à esquerda se necessário
    const mes = ("0" + (data.getMonth() + 1)).slice(-2); // Adiciona um zero à esquerda se necessário
    const ano = data.getFullYear();

    // Formatar a data no formato dd/mm/yyyy
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // dataFormatada agora conterá a data de nascimento no formato brasileiro (dd/mm/yyyy)
    return dataFormatada; // Saída: '01/02/2024'
}

module.exports = formatDate
