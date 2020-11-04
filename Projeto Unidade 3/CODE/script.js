function calcular(){
    //window.alert('Testando....')
    var bw = $('#BW').val()
    var cp = $('#CP').val()

    var result = parseFloat(bw) + parseFloat(cp)

    $('#prb').html(result);
}