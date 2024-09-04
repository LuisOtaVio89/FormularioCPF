document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let snome = document.getElementById("snome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let birthdate = document.getElementById("birthdate").value;
    let gen = document.querySelector('input[name="gen"]:checked').value;
    let ati = document.querySelectorAll('input[name="ati"]:checked');
    let estado = document.getElementById("estado").value;
    let photo = document.getElementById("photo").files[0];
    let cpf = document.getElementById("cpf").value;
    let rg = document.getElementById("rg").value;
    let num = document.getElementById("num").value;
    let bairro = document.getElementById("bairro").value;
    let rua = document.getElementById("rua").value;
    let comp = document.getElementById("comp").value;

    if (!nome || !email || !telefone || !birthdate || !gen || ati.length === 0 || !estado || !photo) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    let telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!telefonePattern.test(telefone)) {
        alert("Por favor, insira apenas números");
        return;
    }


    let dateParts = birthdate.split('-');
    let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

    let reader = new FileReader();

    reader.onload = function(event) {
        let photoUrl = event.target.result;

        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h2>Suas Informações</h2>

              <p><strong>Foto de Perfil:</strong></p>
            <img src="${photoUrl}" alt="Sua foto" style="max-width: 100%; height: auto;">

            <p><strong>Nome:</strong> ${nome}</p>

            <p><strong>Sobrenome:</strong> ${snome}</p>

            <p><strong>Data de Nascimento:</strong> ${formattedDate}</p>

            <p><strong>E-mail:</strong> ${email}</p>
            
            <p><strong>Telefone:</strong> ${telefone}</p>

            <p><strong>Rua:</strong> ${rua}</p>

            <p><strong>Bairro:</strong> ${bairro}</p>

            <p><strong>N° Casa:</strong> ${num}</p>

            <p><strong>Estado:</strong> ${estado}</p>

            <p><strong>Complemento:</strong> ${comp}</p>

            <p><strong>CPF:</strong> ${cpf}</p>

            <p><strong>RG:</strong> ${rg}</p>
          
            <p><strong>Sexo:</strong> ${gen}</p>

            <p><strong>Preferências de Atividades:</strong> ${Array.from(ati).map(ati => ati.value).join(', ')}</p>

        `;

        document.getElementById('eventForm').reset();
    };

    reader.readAsDataURL(photo);
});
