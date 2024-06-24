Feature: Automacao

    Feature Inserindo e deletando novos usuarios

    Background:
        Given que estou na pagina principal
        When mudo o valor da combo select para Bootsrap V4 Theme
    Scenario: Adicionando usuario novo
        When clico para adicionar um novo usuario
        Then preencho todo o formulario
        Then salvo o novo usuario e verifico a mensagem de cadastro realizado

    Scenario: Deletando o usuario
        When realizo a busca do usuario no campo search
        Then seleciono e excluo o usuario e verifico a mensagem de usuario deletado