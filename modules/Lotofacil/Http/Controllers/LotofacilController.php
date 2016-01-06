<?php namespace Modules\Lotofacil\Http\Controllers;

use Pingpong\Modules\Routing\Controller;

class LotofacilController extends Controller {
	
	public function index()
	{
		return view('lotofacil::index');
	}
	
}