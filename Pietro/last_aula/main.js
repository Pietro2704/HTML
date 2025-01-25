$("#add").on('click', ()=>{
    $("#lista-tarefas").append($("<li class='text-primary'>"+ $("#tarefa").val() +"</li>"))
})

$("#remove").on('click', ()=>{
    $("#lista-tarefas").empty()
})