<?php

Route::group(['prefix' => 'lotofacil', 'namespace' => 'Modules\Lotofacil\Http\Controllers'], function()
{
	Route::get('/', 'LotofacilController@index');
});