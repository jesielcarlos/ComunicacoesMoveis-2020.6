function throughput5G(){
    var ncarrier   = parseFloat(window.document.getElementById('ncarrier').value) 
    var om   = parseFloat(window.document.getElementById('om').value)
    var ncamadas  = parseFloat(window.document.getElementById('ncamadas').value)
    var fe = parseFloat(window.document.getElementById('fe').value)
    var nr =  parseFloat(window.document.getElementById('nr').value)
    var nprb =  parseFloat(window.document.getElementById('nprb').value)
    var overhead =  parseFloat(window.document.getElementById('overhead').value)
    var Ts = (Math.pow(10,-3))/(Math.pow(2,nr) * 14) 
    var mbps =  window.document.getElementById('Mbps')
    var gbps = window.document.getElementById('Gbps')
    var result = 0
    var result2 = 0
    for (var i = 0; i < ncarrier; i++){
        result = result + ( Math.pow(ncamadas,i+1) * Math.pow(om,i+1) * Math.pow(fe,i+1) * (948/1024) * (nprb*12/Ts) * (1 - Math.pow(overhead,i+1)) )
    }
    
    result = Math.pow(10,-6) * result
    result2 = result/1000

    mbps.innerHTML= result + "Mbps"
    gbps.innerHTML = result2 + "Gbps"
}