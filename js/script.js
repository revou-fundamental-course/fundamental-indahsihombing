let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("banner-slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}


document.querySelector('.order-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.querySelector('#name').value;
    const dob = document.querySelector('#dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.querySelector('#course').value;

    // Update the table with form values
    document.querySelector('#submitted-name').innerText = name;
    document.querySelector('#submitted-dob').innerText = dob;
    document.querySelector('#submitted-gender').innerText = gender;
    document.querySelector('#submitted-course').innerText = course;

    // Update current time
    const currentTime = new Date().toLocaleTimeString();
    document.querySelector('#current-time').innerText = currentTime;
});
