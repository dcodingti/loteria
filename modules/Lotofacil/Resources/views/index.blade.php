@extends('lotofacil::layouts.padrao')

@section('content')
	
	<h1>Bem vindo</h1>
        <a href="{{ url('lotofacil/resultados') }}">Resultados</a>
	
	<p>
		Este eo modulo lotofacil: {!! config('lotofacil.name') !!}
	</p>

@stop