const listEl = document.querySelector(".cards-list");




const BASE_URL = "https://jsonplaceholder.typicode.com/users";



async function getData(category) {
    try {
        let response = await fetch(BASE_URL)

        if (!response.ok) {
            throw new Error("Xatolik bor: " + response.status);
        }

        console.log(response);
        


        let data = await response.json()
        console.log(data);
        
        updateUI(data)
    return data;
    } catch(error){
        return error.message;
    }
}

getData();

function updateUI(products) {
    products.forEach((product) =>{
        const li = document.createElement("li");
        li.classList.add("cards-item");
        const title = document.createElement("h2");
        title.textContent = product.name;
        const username = document.createElement("p");
        username.textContent = "Username: " + product.username;
        const email = document.createElement("p");
        email.textContent = "Email: " + product.email;
        const adres = document.createElement("p"); 
        adres.textContent = "Adres: " + product.address.city;
        const companyname = document.createElement("h4");
        companyname.textContent = "Company: " + product.company.name;
        const phone = document.createElement("p");
        phone.textContent = "Phone: " + product.phone;

        li.append(title, username, email, adres, companyname, phone);
        listEl.append(li)
    });
}