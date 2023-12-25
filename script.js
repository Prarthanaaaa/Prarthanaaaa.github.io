function login() {
    // Get values from the login form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform simple validation
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return;
    }
  
    // Simulate a login process (you'll replace this with backend logic)
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful! Redirecting to dashboard...');
      // You can add redirection logic or further actions here
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  