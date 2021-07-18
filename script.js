var bp = document.getElementById("bp")

bp.addEventListener('change', (event) => {
  var file = event.target.files[0]
  
  let reader = new FileReader()
  
  reader.readAsText(file)

  reader.onload = function() {
  				var input = JSON.parse(reader.result).parts
  				
  				var cost = 0
  				var num = 0
  				
  				for(let i in input) {
  								var sil = 0
  								
  								for(let j in costs) {
  												if(costs[j].n == input[i].n){
  																sil = j
																	num += j * Math.pow(27, i)
  												}
  								}
  								
  								var dc = 0
  				
  								if(costs[sil].size) {
  												dc = costs[sil].cost * input[i].N.size
  								} else if(costs[sil].width) {
  												dc = costs[sil].cost * input[i].N.width
  								} else if(costs[sil].areas) {
  												dc = costs[sil].cost * input[i].N.height * (input[i].N.width_a + input[i].N.width_b) / 2
  								} else if(costs[sil].areat) {
  												dc = costs[sil].cost * input[i].N.width * input[i].N.height / 2
  								} else {
  												dc = costs[sil].cost
  								}
  								
  								cost += dc
  								
  								console.log(input[i].n + ": " + dc)
  				}
  				
  				console.log(cost)
  				document.getElementById('costp').innerHTML = 'Цена: ' + cost
  }

  reader.onerror = function() {
    console.log(reader.error)
  }
})
