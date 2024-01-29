function checkPasswordStrength(password) {
    const strengthIndicator = document.getElementById('password-strength');
    const strength = {
      0: "Very Weak",
      1: "Weak",
      2: "Moderate",
      3: "Strong",
      4: "Very Strong"
    };
    let score = 0;
    if (password.length >= 8) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    if (/[a-z]/.test(password)) {
      score++;
    }
    if (/\d/.test(password)) {
      score++;
    }
    strengthIndicator.textContent = `Password Strength: ${strength[score]}`;
  }

  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggle.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      passwordToggle.textContent = '👁️';
    }
  }

  document.getElementById('uniqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login/signup logic or AJAX request here
    alert('Form submitted!');
  });
