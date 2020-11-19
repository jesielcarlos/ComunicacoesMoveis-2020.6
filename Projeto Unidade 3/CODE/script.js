function calcular(){
    
    var ncarrier   = window.document.getElementById('ncarrier').value
    var om   = window.document.getElementById('om').value
    var ncamadas  = window.document.getElementById('ncamadas').value
    var fe = window.document.getElementById('fe').value
    var nr =  window.document.getElementById('nr').value
    var nprb =  window.document.getElementById('nprb').value
    var overhead =  window.document.getElementById('overhead').value
    var mbps =  window.document.getElementById('Mbps')
    var result = parseFloat(ncarrier) + parseFloat(om)

    Mbps.innerHTML= result + "Mbps"
    
}