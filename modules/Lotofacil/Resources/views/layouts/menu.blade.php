<nav class="navbar-inverse navbar-default menu">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="menu">
      <ul class="nav navbar-nav">
        <li><a href="{{ url('/') }}">Inicio<span class="sr-only">(current)</span></a></li>
        <li><a href="{{ url('lotofacil/resultados') }}">Resultados</a></li>
        <li><a href="{{ url('lotofacil') }}">Apostas</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>