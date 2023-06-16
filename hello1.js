const loadPhones = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
    
}

const displayPhones = phonesBrands => {
    // console.log(phonesBrands)
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.innerText = "";
    phonesBrands = phonesBrands.slice(0, 10)
    const noPhone = document.getElementById('no-phone')
    if (phonesBrands.length == 0) {
      noPhone.classList.remove('d-none')
    }else{
      noPhone.classList.add('d-none')
    }

    for(const phone of phonesBrands){
        console.log(phone)
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100 p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `;
       
    phonesContainer.appendChild(phoneDiv)

    }
    
}


document.getElementById('search-btn').addEventListener('click', function(){
    const searchFiled = document.getElementById('search-filed')
    const searchValue = searchFiled.value;
    loadPhones(searchValue)
})








  // loadPhones() //comment for show no phone massage
