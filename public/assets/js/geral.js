/*!
 * Gfp v1.0 
 * Script da página inicial index.php
 * Copyright 2015-2015 Dcoding TI.
 * 
 */

//So executa depois que todo documento for carregado
$(document).ready(function () {
   /* ========================================================================
    * Realizar a inicialização de plugins 
    * ======================================================================== */
    $('[data-toggle="tooltip"]').tooltip(); //inicia o tooltip do bootstrap
    $('[data-toggle="popover"]').popover(); //inicia o popover do bootstrap
    
   /* ========================================================================
    * GFP Ações de click do btn box Apresentação
    * ======================================================================== */
    $('body').on('click', '#btn-comecar', function () {
        $('#estado_entrada').load('html/inicio/estado_cadastrar.html');
    });
    
   /* ========================================================================
    * GFP Carregamento do Painel de login, cadastro
    * ======================================================================== */
    //# realiza o carregamento padrão no estado de login
    $('#estado_entrada').load('html/inicio/estado_login.html');
    
    //# Verifica as acões e Carrega os arquivos
    $('body').on('click', '.form-entrada > button,span', function (event) {
        event.preventDefault();
        //Pegar o id da açao a ser executada
        var acao = $(this).attr('id');//Recebe o id da acao clicada
        switch (acao) {
            case 'txt-esqueceu-senha':
                var dir = 'html/inicio/estado_recuperar_senha.html';
                break;
            case 'btn-login-cadastrar':
                var dir = 'html/inicio/estado_cadastrar.html';
                break;
            case 'txt-login-cadastrar':
                var dir = 'html/inicio/estado_cadastrar.html';
                break;
            case 'btn-cadastro-login':
                var dir = 'html/inicio/estado_login.html';
                break;
            case 'btn-recuperacao-login':
                var dir = 'html/inicio/estado_login.html';
                break;
            case 'txt-cadasto-login':
                var dir = 'html/inicio/estado_login.html';
                break;
            case 'txt-recuperacao-login':
                var dir = 'html/inicio/estado_login.html';
                break;
        }
        if (dir) {
            $('#estado_entrada').load(dir);
        }
    });
    
   /* ========================================================================
    * GFP Ações de submit para txt do form de entrada
    * ======================================================================== */
    $('body').on('click', '#form-entrada>form>span', function () {
        $(this).prev().click();
    });
    
    
   /* ========================================================================
    * GFP Validação do Painel de login, cadastro
    * Realiza validação do formulario utilizando plugin Validate
    * Utiliza o popover do bootstrap para mostrar mensagens de erro
    * ======================================================================== */
    
    // # Realiza a ativação do popover caso formulario não esteja de acordo com as regras
    $(document).on('focus', 'input.error', function () {
        var tamanhoTela = $(window).width(); //Recebe tamanho da tela
        if(tamanhoTela <= 750){
            $(this).popover({placement: "top",trigger: "focus"});
            $(this).popover('show');
        }
        else{
            $(this).popover({placement: "left",trigger: "focus"});
            $(this).popover('show');
        }
        $(document).on('keyup', 'input.error', function () {
            $(this).popover('show');
        });
    });
    
    /* ========================================================================
    * GFP Definição do box de loading
    * Mostra um gif animado enquando o sistema realiza alguma busca
    * 
    * ======================================================================== */
    var dcModal;
    dcModal = dcModal || (function () {
        return {
            showLoading: function () {
                $('#dc-modal-loading').css({display:'block'});
            },
            hideLoading: function () {
                $('#dc-modal-loading').css({display:'none'});
            },
            showAlerta: function($msg){
                $('#dc-modal-msg').html($msg);
                $('#dc-modal-alerta').modal('show');
            },
            hideAlerta: function () {
                $('#dc-modal-alerta').modal('hide');
            }
            
        };
    })();
    
    /* ========================================================================
    * GFP Definição de Funçoes de uso geral
    * Funções utilizada em todo o sistema
    * 
    * ======================================================================== */
    var dc;
    dc = dc || (function () {
        return {
            
            resetForm: function ($select) {
                $($select).each(function () {
                    this.reset();
                });
            }
        };
    })();
    
    //# Realiza a validação
    $(document).on('click', '#form-entrada form', function () {
        $(this).validate({
            //Se os dados forem validados chama o ajax para o envio
            submitHandler: function (form) {
                var dados = $(form).serialize(); // Dados do formulário
                $.ajax({
                    beforeSend: function () {
                        dcModal.showLoading();// Apresenta gif loading
                    },
                    url: 'php/controladores/controle_usuario.php',
                    type: 'POST',
                    data: dados,
                    processData: false,
                    cache: false,
                    success: function (result) {
                        dcModal.hideLoading(); //esconde gif loading
                        $acao =  parseInt(result.substring(0, 3));
                        switch ($acao) {
                            case 1: //Login com sucesso
                                location.href = 'lancamento.php';//Redireciona
                                break;
                            case 2: //Cadastro com sucesso
                                location.href = 'cadastroInicial.php';//Redireciona
                                break;
                            case 3: //Recuperação com sucesso
                                $msg = 'As instruções foram enviadas para o seu email!';//msg de status
                                dcModal.showAlerta($msg);
                                $('#estado_entrada').load('html/inicio/estado_login.html');//carrega estado login
                                break;
                            case 4: //Erro de autenticação
                                $msg = result.substring(3);//Pega msg de erro
                                dcModal.showAlerta($msg);
                                break;
                            case 5: //Erro do sistema
                                $msg = result.substring(3);//Pega msg de erro
                                dcModal.showAlerta($msg);
                                break;
                        }
                    },
                    error: function (request, status, error) {
                        dcModal.hideLoading(); //esconde gif loading
                        // alerta o erro
                        alert('Erro cod aj01 contate o suporte!');
                    }
                });
                return false;
            },
            success: function (label, element) {
                //se validar o campo com sucesso destroi o popover
                var id = $(element).attr('id');
                $("#" + id).popover('destroy');
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                senha: {
                    required: true,
                    minlength: 6
                },
                confirmaSenha:{
                    required: true,
                    minlength: 6,
                    equalTo: "#senha"
                }
            },
            messages: {
                email: {
                    required: "Obrigatório.",
                    email: "Email Inválido."
                },
                senha: {
                    required: "Obrigatório.",
                    minlength: "Mínimo 6 caracteres."
                },
                confirmaSenha:{
                    required: "Obrigatório.",
                    minlength: "Mínimo 6 caracteres.",
                    equalTo: "As senhas devem ser iguais."
                }
            }
        });
    });

});