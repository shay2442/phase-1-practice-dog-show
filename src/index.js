document.addEventListener('DOMContentLoaded', () => {

    const tableBody = document.querySelector('#table-body')
    const dogForm = document.getElementById('dog-form')
    
    dogForm.addEventListener('submit', e => {
    e.preventDefault()
    const updatedDog = {
        name: dogForm.name.value,
        breed: dogForm.breed.value,
        sex: dogForm.sex.value
    }
    const dogId = e.target.dataset.id
    updateDog(e.target.dataset.id, updateDog)
    .then(actualUpdateDog => {
        const dogRow = document.querySelector(`tr[data-id='${dogId}']`)
        dogRow.innerHTML = `
        <td>${actualUpdateDog.name}</td>
        <td>${actualUpdateDog.breed}</td>
        <td>${actualUpdateDog.sex}</td>
        <td><button>Edit</button></td>
      `
    })
    })
    
    
    
    
    function populateDogForm(dog) {
        dogForm.name.value = dog.name 
        dogForm.breed.value = dog.breed
        dogForm.sex.value = dog.sex
        dogForm.dataset.id = dog.id
    
    }
    
    function renderDogRow(dog) {
        const dogRow = document.createElement("tr")
        dogRow.dataset.id = dog.id
        dogRow.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td><button>Edit</button></td>
    `
    const button = dogRow.querySelector('button')
    button.addEventListener('click', () => {
    populateDogForm(dog)
    })
    
    
    tableBody.append(dogRow)
    }
    
    function renderAllDogs(dogs) {
        dogs.forEach(renderDogRow)
    }
    
    getAllDogs().then(renderAllDogs)
    
    
    })
    