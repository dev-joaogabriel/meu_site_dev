// Funcionalidade do Formulário de Contato
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const submitBtn = this.querySelector(".btn-submit");
            
            // Verifica se o formulário está indo para o Formspree real
            if (!this.action.includes("seu_id_aqui")) {
                // Modifica o texto do botão para dar feedback visual ao usuário
                submitBtn.innerText = "Enviando proposta... 🚀";
                submitBtn.style.opacity = "0.7";
                
                // Aqui NÃO colocamos o event.preventDefault(), pois queremos 
                // que o Formspree receba os dados e faça o redirecionamento.
            }
        });
    }
});