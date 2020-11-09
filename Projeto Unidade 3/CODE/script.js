function calcular(){
    window.alert('Testando....')
    var bw   = window.document.getElementById('BW').value
    var cp   = window.document.getElementById('CP').value
    var msc  = window.document.getElementById('BW').value
    var mimo = window.document.getElementById('BW').value
    var ca   = window.document.getElementById('BW').value
    var prb =  window.document.getElementById('prb')
    var result = parseFloat(bw) + parseFloat(cp)

    prb.innerHTML= result
    
}