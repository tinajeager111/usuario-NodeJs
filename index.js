const formlog = document.querySelector('#form-login'), 
formcreate = document.querySelector('#form-create'), 
inputlog = document.querySelector('#login-input'), 
inputcreate = document.querySelector('#create-input')

formcreate.addEventListener('submit', async  e => {
    e.preventDefault()

    if(!inputcreate.value){
        return alert('no puede dejar el campo vacio')
    }
    const consulta = await fetch('http://localhost:3000/Usuarios', {
        method: 'GET'
    }).then(i => i.json()).then(i => i),

    listadeusuarios = consulta
    
    let existe = false

    listadeusuarios.forEach(i => {
        if(i.nombre === inputcreate.value){
            return existe = true
        }
    });


    if(existe){
        return alert('el usuario ya existe')
    }

    await fetch('http://localhost:3000/Usuarios', {
        method:'POST',
        headers:{"Content-Type": 'application/json'},
        body: JSON.stringify( {nombre: inputcreate.value})
    })

    
})

formlog.addEventListener('submit', async e =>{
    e.preventDefault()
    if(!inputlog.value){
        return alert('no puede dejar el campo vacio')
    }

    const consulta = await fetch('http://localhost:3000/Usuarios', {
        method: 'GET'
    }).then(i => i.json()).then(i => i),

    listadeusuarios = consulta
    
    let existe = false

    listadeusuarios.forEach(i => {
        if(i.nombre !== inputlog.value){
            existe = true
        }
    });


    if(!existe){
        return alert('el usuario no existe')
    }

    localStorage.setItem('usuario', JSON.stringify({nombre: inputlog.value}))
    window.location.href="../tareas/tareas.html";

})