function register() {
    // Get values from the registration form
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
    var password = document.getElementById('password').value;
  
    // Perform simple validation
    if (name === '' || age === '' || address === '' || gender === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate a registration process (you'll replace this with backend logic)
    alert('Registration successful! You can now log in.');
  }
  
