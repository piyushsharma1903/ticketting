document.addEventListener("DOMContentLoaded", function () {
    // Search Bar Filtering
    const searchInput = document.querySelector(".search-bar input");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            document.querySelectorAll(".concert-card").forEach(card => {
                const title = card.querySelector("h3").textContent.toLowerCase();
                card.style.display = title.includes(searchTerm) ? "block" : "none";
            });
        });
    }

    // Highlight Active Nav Item
    const navItems = document.querySelectorAll(".nav-item");
    const currentPath = window.location.pathname;
    navItems.forEach(item => {
        if (item.href.includes(currentPath)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Ensure Navigation Links Work
    document.querySelector(".nav-item[href='home-page.html']").addEventListener("click", () => window.location.href = "home-page.html");
    document.querySelector(".nav-item[href='dashboard-page.html']").addEventListener("click", () => window.location.href = "dashboard-page.html");
    document.querySelector(".nav-item[href='marketplace-page.html']").addEventListener("click", () => window.location.href = "marketplace-page.html");
    document.querySelector(".nav-item[href='profile-page.html']").addEventListener("click", () => window.location.href = "profile-page.html");

    // Ticket Purchase Simulation
    document.querySelectorAll(".buy-now-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Ticket purchased successfully! (Integrate payment API here)");
        });
    });

    // Profile Form Submission Handling
    const profileForm = document.querySelector(".profile-form");
    if (profileForm) {
        profileForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Profile updated successfully! (Send data to backend here)");
        });
    }

    // Placeholder for Face Authentication Integration
    function authenticateWithFace() {
        alert("Face authentication triggered! (Integrate facial recognition API here)");
    }

    const faceIDButton = document.querySelector(".menu-item[data-face-id]");
    if (faceIDButton) {
        faceIDButton.addEventListener("click", authenticateWithFace);
    }
});
