var imageArrayForCards = ["https://c1.staticflickr.com/8/7693/17123251389_bed3c3a1ba_b.jpg", "https://i.forbesimg.com/media/2009/12/16/1216_cash-dollars_650x455.jpg", "http://a.abcnews.com/images/Business/GTY_stock_cash_pile_money_dollar_bills-thg-130726_33x16_1600.jpg" ]

function getLADataFromAPI(){
    var endpoint = 'https://controllerdata.lacity.org/resource/az6p-ktv2.json'
    
    fetch(endpoint)
    .then(function(newdata){
        return newdata.json()
    })
    .then(function(json){

        
        console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
         var newData = json.filter(function(item){
            return item.year === "2015"
        }).filter(function(item){
            return item.employment_type === "Full Time"
        })
        
        newData.forEach(function(item){
            var randNum = Math.floor(Math.random() * 3)
            
            var cardItem = 
            `
              <div class="col s6 m4">
                  <div class="card">
                    <div class="card-image">
                      <img class="random-card-image" src=${imageArrayForCards[randNum]}>
                      <span style="color:black" class="card-title" >${item.department_title}</span>
                    </div>
                    <div class="card-content">
                      <p >
                        The average salary that work in the year ${item.year} as a ${item.employment_type} the salary would be $${item.regular_pay}
                      </p>
                    </div>
                    <div class="card-action">
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
            `
            finalHTML += cardItem
        })
                resultDiv.innerHTML = finalHTML
    }).catch(function(error){
        console.log(error)
    })

        
        



}
