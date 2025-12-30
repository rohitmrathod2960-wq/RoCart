document.addEventListener("DOMContentLoaded", () => {
  const moreBtn = document.getElementById("moreBtn");
  const menu = document.getElementById("moreMenu");

  const profileModal = document.getElementById("profileModal");
  const profileOverlay = document.getElementById("profileOverlay");
  const profileClose = document.getElementById("profileClose");
 
    //  DROPDOWN TOGGLE  
  moreBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.addEventListener("click", e => {
    if (!moreBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("active");
    }
  });

    //  AUTH CHECK
  function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
  }

    //  MENU ACTIONS
menu.addEventListener("click", e => {
  const action = e.target.dataset.action;

  // Close dropdown
  menu.classList.remove("active");

  if (action === "profile") {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login first");
      return;
    }

    document.getElementById("profileModal")?.classList.add("active");
    document.getElementById("profileOverlay")?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  if (action === "orders") {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      alert("Please login first");
      return;
    }

    alert("My Orders coming soon");
  }

  if (action === "help") {
    const footer = document.getElementById("siteFooter");

    if (footer) {
      footer.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
});

    //  CLOSE PROFILE
  function closeProfile() {
    profileModal.classList.remove("active");
    profileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  profileClose?.addEventListener("click", closeProfile);
  profileOverlay?.addEventListener("click", closeProfile);
});
document.addEventListener("DOMContentLoaded", () => {
  const profileLogout = document.getElementById("profileLogout");
  const loginBtn = document.getElementById("loginBtn");

  if (!profileLogout) {
    console.error("Logout button not found");
    return;
  }

  profileLogout.addEventListener("click", () => {
    // 1. Clear login state
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginTime");

    // 2. Reset header login button
    if (loginBtn) {
      loginBtn.textContent = "Login";
    }

    // 3. Close profile modal
    document.getElementById("profileModal")?.classList.remove("active");
    document.getElementById("profileOverlay")?.classList.remove("active");
    document.body.style.overflow = "";

    // 4. Optional debug confirmation
    console.log("User logged out successfully");
  });
});
