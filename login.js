document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  
  function updateAuthUIOnLoad() {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (loggedIn) {
      loginBtn.textContent = "Logout";
    } else {
      loginBtn.textContent = "Login";
    }
  }

  //  REFRESH 
  updateAuthUIOnLoad();
  const loginModal = document.getElementById("loginModal");
  const loginOverlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const closeLogin = document.getElementById("closeLogin");

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");

  
    //  AUTH HELPERS
  function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

  function getUserEmail() {
    return localStorage.getItem("userEmail");
  }

  function setLoggedIn(email) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("loginTime", new Date().toLocaleString());
  }

 function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("loginTime");
  localStorage.removeItem("cart");

  // 🔔 notify cart.js that logout happened
  window.dispatchEvent(new Event("user-logged-out"));
}


    //  UI UPDATE
  function updateAuthUI() {
    if (isLoggedIn()) {
      loginBtn.textContent = "Logout";

      const email = getUserEmail();
      if (profileName && profileEmail && email) {
        profileName.textContent = email.split("@")[0];
        profileEmail.textContent = email;
      }
    } else {
      loginBtn.textContent = "Login";
    }
  }
    //  MODAL CONTROLS
  function openLogin() {
    loginModal.classList.add("active");
    loginOverlay.classList.add("active");
  }

  function closeLoginModal() {
    loginModal.classList.remove("active");
    loginOverlay.classList.remove("active");
  }
    //  HEADER LOGIN BUTTON
  loginBtn.addEventListener("click", () => {
    if (!isLoggedIn()) {
      openLogin();
    } else {
      logout();
      updateAuthUI();
    }
  });

    //  LOGIN FORM SUBMIT
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoggedIn(email);
    closeLoginModal();
    updateAuthUI();
  });

  closeLogin.addEventListener("click", closeLoginModal);
  loginOverlay.addEventListener("click", closeLoginModal);

    //  INIT
  updateAuthUI();
});
