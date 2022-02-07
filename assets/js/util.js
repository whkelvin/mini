function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function toggleDarkMode() {
    if (window.localStorage.getItem("IsDarkModeEnabled") === "false") {
        window.localStorage.setItem("IsDarkModeEnabled", "true");
    } else {
        window.localStorage.setItem("IsDarkModeEnabled", "false");
    }
    setTheme();
}

function setTheme() {
    if (window.localStorage.getItem("IsDarkModeEnabled") === "true") {
        if (!document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
        }
    } else {
        document.documentElement.classList.remove("dark");
    }
}

if (window.localStorage.getItem("IsDarkModeEnabled") === null) {
  window.localStorage.setItem("IsDarkModeEnabled", "true");
}
setTheme();

