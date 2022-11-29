const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (event) => {
    event.preventDefault();

    let url = document.getElementById("url").value;
    let size = document.getElementById("size").value;

    console.log(url, size);
    
    showSpinner();

};

const showSpinner = () => {
    document.getElementById("spinner").style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById("spinner").style.display = 'none';
}

// on load
hideSpinner();

form.addEventListener('submit', onGenerateSubmit);