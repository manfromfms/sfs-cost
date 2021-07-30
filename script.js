var bp = document.getElementById("bp")

var out = document.getElementById("out")

bp.addEventListener('change', (event) => {
  var file = event.target.files[0]
  
  let reader = new FileReader()
  
  reader.readAsText(file)

  reader.onload = function() {
  				var input = JSON.parse(reader.result).parts
  				
  				var cost = 0
  				var costFuel = 0
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
  								var fu = 0
  				
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
  								
  								if(costs[sil].fuel) {
  												fu += costs[sil].fuelCost * input[i].N.height * (input[i].N.width_a + input[i].N.width_b) / 2 * input[i].N.fuel_percent
  												console.log(input[0].n + " fuel: " + fu)
  								}
  								
  								cost += dc
         costFuel += fu
  								
  								console.log(input[i].n + ": " + dc)
  								
  								out.innerHTML += input[i].n + ": " + dc + "<br>"
  				}
  				
  				console.log(cost)
  				document.getElementById('costp').innerHTML = 'Цена конструкции: ' + cost + '<br>Цена топлива: ' + costFuel + '<br>Общая цена: ' + (cost + costFuel)
  }

  reader.onerror = function() {
    console.log(reader.error)
  }
})
