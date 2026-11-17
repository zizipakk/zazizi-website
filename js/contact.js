const contactForm =
    document.getElementById(
        "contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (e) {

            e.preventDefault();

            const status =
                document.getElementById(
                    "form-status"
                );

            const formData =
                new FormData(contactForm);

            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData
                        }
                    );

                const result =
                    await response.json();

                if (result.success) {

                    status.innerHTML =
                    "Thank you. Your message has been sent.";

                    contactForm.reset();

                } else {

                    status.innerHTML =
                    "Message sending failed.";
                }

            } catch (error) {

                status.innerHTML =
                "Unexpected error occurred.";
            }
        }
    );
}