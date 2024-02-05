// Seleciona o campo de telefone
const telefoneInput = document.querySelector("#tel");

// Adiciona um ouvinte de evento de entrada para o campo de telefone
telefoneInput.addEventListener("input", function () {
    // Remove todos os caracteres não numéricos do valor do campo
    this.value = this.value.replace(/\D/g, "");
});

// Função para adicionar um novo contato
function adicionarContato(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const nomeInput = document.querySelector("#nome");
    const telefoneInput = document.querySelector("#tel");
    const contactsContainer = document.querySelector("#contacts_container");

    const nome = nomeInput.value;
    const telefone = telefoneInput.value;

    if (nome === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
        <td class="action-contact">
            <button class="del-contact">x</button>
            <button class="edit-contact">Editar</button>
        </td>
    `;

    contactsContainer.appendChild(newRow);

    nomeInput.value = "";
    telefoneInput.value = "";
}

// Adiciona um ouvinte de evento de clique ao botão "Adicionar"
const addContactButton = document.querySelector("#add-contact");
addContactButton.addEventListener("click", adicionarContato);

// Função para excluir um contato
function excluirContato(event) {
    // Verifica se o clique foi no botão de excluir
    if (event.target.classList.contains('del-contact')) {
        // Confirma se o usuário realmente deseja excluir o contato
        if (confirm("Você tem certeza que deseja excluir este contato?")) {
            // Acessa o elemento 'tr' que é o ancestral direto do botão e o remove
            event.target.closest('tr').remove();
        }
    }
}

// Adiciona um ouvinte de evento ao container de contatos para delegação de eventos
const contactsContainer = document.querySelector("#contacts_container");
contactsContainer.addEventListener("click", excluirContato);
