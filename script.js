function validateOrderForm() {
    let valid = true;

    // Get form inputs
    const name = document.getElementById("customerName").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const orderDetails = document.getElementById("orderDetails").value.trim();
    const address = document.getElementById("address").value.trim();

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const contactError = document.getElementById("contactError");
    const emailError = document.getElementById("emailError");
    const orderError = document.getElementById("orderError");
    const addressError = document.getElementById("addressError");

    // Hide all previous error messages
    nameError.style.display = "none";
    contactError.style.display = "none";
    emailError.style.display = "none";
    orderError.style.display = "none";
    addressError.style.display = "none";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        valid = false;
    }

    // Contact validation
    if (contact === "") {
        contactError.textContent = "Contact number is required";
        contactError.style.display = "block";
        valid = false;
    } else if (!/^\d{10}$/.test(contact)) {
        contactError.textContent = "Enter a valid 10-digit phone number";
        contactError.style.display = "block";
        valid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        emailError.style.display = "block";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
        valid = false;
    }

    // Order details validation
    if (orderDetails === "") {
        orderError.textContent = "Please enter your order details";
        orderError.style.display = "block";
        valid = false;
    }

    // Address validation
    if (address === "") {
        addressError.textContent = "Delivery address is required";
        addressError.style.display = "block";
        valid = false;
    }

    return valid;
}

