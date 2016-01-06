<?php namespace Modules\Megasena\Http\Controllers;

use Pingpong\Modules\Routing\Controller;

class MegaSenaController extends Controller {
	
	public function index()
	{
		return view('megasena::index');
	}
	
}