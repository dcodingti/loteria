<?php

Route::group(['prefix' => 'megasena', 'namespace' => 'Modules\MegaSena\Http\Controllers'], function()
{
	Route::get('/', 'MegaSenaController@index');
});