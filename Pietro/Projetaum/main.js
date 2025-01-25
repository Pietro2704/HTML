$("#btn").on('click', () => {
    // Pegar os valores dos campos inputs
    let nome = $("#nome").val()
    let sexo = $("input[name='sexo']:checked").val()
    let idade = $("#idade").val()
    let cpf = $("#cpf").val()
    let email = $("#email").val()
    let usuario = $("#usuario").val()
    let senha = $("#senha").val()

    // criar uma linha com alguns td
    // colocar os valores obtidos nos td
    let novaLinha = (
        $("<tr></tr>")
            .append("<td>" + nome + "</td>")
            .append("<td>" + sexo + "</td>")
            .append("<td>" + idade + "</td>")
            .append("<td>" + cpf + "</td>")
            .append("<td>" + email + "</td>")
            .append("<td>" + usuario + "</td>")
            .append("<td>" + senha + "</td>")
    )

    // append pra tabela
    $("tbody").append(novaLinha)
})




