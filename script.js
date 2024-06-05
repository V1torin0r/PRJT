document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Obtém os valores do formulário
    var nome = document.getElementById('NOME COMPLETO').value; 
    var data_nas = document.getElementById('DATA DE NASCIMENTO').value;
    var numero_wpp = document.getElementById('NUMERO DE WHATSAPP').value;
    var endereco = document.getElementById('ENDEREÇO').value;
    var alergia = document.getElementById('Você possui alergia a algum tiopo de medicamento? Se sim, qual?').value;
    var contato_fam = document.getElementById('Contato de algum familiar').value;
    var tam_camisa = document.getElementById('Tamanho da Camisa').value;
    
    // Cria uma linha CSV com os valores do formulário
    var csvRow = nome + ',' + data_nas + ',' + numero_wpp + ',' + endereco + ',' + alergia + ',' + contato_fam + ',' + tam_camisa + '\n';
    
    // Cria ou atualiza o arquivo CSV
    var blob = new Blob([csvRow], { type: 'text/csv' });
    var link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'dados.csv');
    link.click();
});