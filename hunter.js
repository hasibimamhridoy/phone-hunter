fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(response => response.json())
.then(phone => loadPhone(phone))

function loadPhone(phone){
    const phoneContainer = document.getElementById('phone-container')
    const datas = phone.data
    phoneContainer.classList.add="phone-flex"
    
    phoneContainer.innerHTML = datas.map(data => {
        return `
        
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="${data.image}" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
         
        `
    })
}

loadPhone()