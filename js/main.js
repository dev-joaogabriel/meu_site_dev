document.addEventListener("DOMContentLoaded", () => {
    // Busca os switches de tema nas páginas (pega todos se houver mais de um)
    const themeCheckboxes = document.querySelectorAll("#theme-toggle");
    const htmlElement = document.documentElement;

    // 1. Verifica se existe uma preferência salva no LocalStorage do navegador
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        htmlElement.classList.add("light-theme");
        themeCheckboxes.forEach(checkbox => {
            checkbox.checked = true; // Sincroniza e liga todos os switches da página
        });
    }

    // 2. Adiciona o evento de escuta a todos os switches encontrados
    themeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                htmlElement.classList.add("light-theme");
                localStorage.setItem("theme", "light"); // Salva preferência clara
                
                // Sincroniza outros switches caso existam na mesma tela
                themeCheckboxes.forEach(cb => cb.checked = true);
            } else {
                htmlElement.classList.remove("light-theme");
                localStorage.setItem("theme", "dark"); // Salva preferência escura
                
                themeCheckboxes.forEach(cb => cb.checked = false);
            }
        });
    });
});