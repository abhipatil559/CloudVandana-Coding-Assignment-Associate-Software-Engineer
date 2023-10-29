document.getElementById('submitButton').addEventListener('click', function (event) {
    event.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;

    const email = document.getElementById("email").value;
    const phoneNo = document.getElementById("phoneNo").value;

    const date = document.getElementById("date").value;
    const country = document.querySelector("#country").value;

    const gender = document.querySelector("#gender").value;
    const profession = document.getElementById("profession").value;

    const firstTimeText = document.querySelector('label[for="product_services"]').textContent;
    const firstTime = document.querySelector('input[name="first_time"]').value;

    const suggest_friends_text = document.querySelector('label[for="suggest_friends"]').textContent;
    const suggest_friends = document.querySelector('input[name="sf"]').value;

    const satisfied_text = document.querySelector('label[for="satisfaction"]').textContent;
    const satisfied = document.querySelector('input[name="satisfaction"]').value;

    const suggestions = document.querySelector('label[for="suggestions"]').textContent;
    const suggestions_textarea = document.getElementById("suggestions").value;

    // Define an array of input element IDs to check
    const inputIds = [ fname, lname,email,phoneNo,date,  country,
        gender,profession,firstTime, suggest_friends,satisfied,
        suggestions_textarea]; // Add all your input IDs
    console.log(inputIds)

    // Flag to track if all fields are filled
    let allFieldsFilled = true;

    inputIds.forEach((inputId) => {
        // const inputValue = document.getElementById(inputId).value;
        const inputValue = inputId;
        if (inputValue.trim() === '') {
            allFieldsFilled = false;
            return;
        }
    });

    if (allFieldsFilled) {
        // All required fields are filled, proceed to display the modal
        // inputIds.forEach((inputId) => {
        //     const inputValue = inputId;
        //     // You can do something with the input values here if needed
        // });

        // INSERTING TEXT IN MODAL CONTENT
        document.getElementById("modalFullName").textContent = `Full Name: ${fname} ${lname}`;
        document.getElementById("modalEmail").textContent = `Email: ${email}`;
        document.getElementById("modalPhoneNumber").textContent =`Phone Number : ${phoneNo}`;
        document.getElementById("modalDOB").textContent =`Date of Birth: ${date}`;
        document.getElementById("modalCountry").textContent =`Country: ${country}`;
        document.getElementById("modalGender").textContent =`Country: ${gender}`;
        document.getElementById("modalProfession").textContent = `Profession: ${profession}`;
        document.getElementById("modalFirstTimeService").textContent = `${firstTimeText}: ${firstTime}`;
        document.getElementById("modalSuggestFriends").textContent = `${suggest_friends_text}: ${suggest_friends}`;
        document.getElementById("modalSatisfied").textContent = `${satisfied_text}: ${satisfied}`;
        document.getElementById("modalAnySuggestion").textContent = `${suggestions}: ${suggestions_textarea}`;

        

        document.getElementById('myModal').style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});



function resetform() {
    const form = document.getElementById("myForm");
    form.reset();

}