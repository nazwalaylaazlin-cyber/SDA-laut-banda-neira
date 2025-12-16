function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "admin") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Username atau Password salah!");
    }
}

function logout() {
    document.getElementById("content").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}
