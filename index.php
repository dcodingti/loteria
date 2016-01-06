<?php
//Inicia uma seção
session_start();

//Verifica se há seções
if (isset($_SESSION['emailUsuario'])) {  
    header("Location: lancamento.php");
}


?>


<!DOCTYPE HTML>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>GFP|Início</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <link href="css/modAuxiliares.css" rel="stylesheet" type="text/css"/>
        <link href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'>
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        
    </head>
    <body>
        <section class="superior">
            <?php include 'html/inicio/topo_inicio.html'; ?>
        </section>
        <section class="conteudo">
            <?php include 'html/inicio/conteudo.html'; ?>
        </section>
        <footer>
            <?php include 'html/geral/rodape.html'; ?> 
        </footer>
        <?php include 'html/geral/alertaModal.html'; ?>
        <?php include 'html/geral/loading.html'; ?>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        -->

        <script src="js/jquery.min.js" type="text/javascript"></script>
        <script src="js/jquery.validate.js" type="text/javascript"></script>
        <script src="js/jquery.maskMoney.js" type="text/javascript"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="js/bootstrap.min.js"></script>
        <script src="js/geral.js" type="text/javascript"></script>

    </body>
</html>