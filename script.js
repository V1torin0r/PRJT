document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    

    var nome = document.getElementById('nome').value; 
    var data_nascimento = document.getElementById('data_nascimento').value;
    var numero_whatsapp = document.getElementById('numero_whatsapp').value;
    var endereco = document.getElementById('endereco').value;
    var alergia = document.getElementById('alergia').value;
    var contato_famamilia = document.getElementById('contato_famamilia').value;
    var tamanho_da_camisa = document.getElementById('tamanho_da_camisa').value;
    

    var csvRow = nome + '|' + data_nascimento + '|' + numero_whatsapp + '|' + endereco + '|' + alergia + '|' + contato_famamilia + '|' + tamanho_da_camisa + '\n';
    

    var blob = new Blob([csvRow], { type: 'text/csv' });
    var link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', 'dados.csv');
    link.click();
});
