var token = "";

function logar() {
    const URL_TO_FETCH = 'http://localhost:8081/autenticar';

    var tag = document.getElementById("feedback");

    const data = new FormData(document.getElementById('fdados'));
    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const value = JSON.stringify(Object.fromEntries(data.entries()));


    fetch(URL_TO_FETCH, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
            "usuario" : user,
            "senha" : pass
        }
    })
        .then(response => {
            response.json()
                .then((result) => {
                    tag.innerHTML = JSON.stringify(result);
                    token = result.token;
                });
        })
        .catch(err => { console.error("Erro:" + err); });
}

// function tarefa() {
//     var tag = document.getElementById("tarefa");
//     const URL_TO_FETCH = 'http://localhost:8081/proxima-tarefa';
//     fetch(URL_TO_FETCH, {
//         method: 'get',
//         headers: new Headers({ 'x-access-token': token })
//     }).then(response => {
//         response.text().then(result => {
//             tag.innerHTML = result;
//         });
//     }).catch(function (err) { console.error(err); });
// }
    