const avanca = querySelectorAll ('.btn-proximo');

avanca.forEach(button =>{
    button.addEventisener('click' , function (){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo_' + this.getAttribute('data-proximo'

        atual.classList.List.remove('ativo');
        document.getElemetByld(proximoPasso).classlist.add('ativo');
        })
    })