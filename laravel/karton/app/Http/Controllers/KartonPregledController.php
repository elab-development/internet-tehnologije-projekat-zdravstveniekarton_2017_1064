<?php

namespace App\Http\Controllers;

use App\Http\Resources\PregledCollection;
use App\Models\Karton;
use App\Models\Pregled;
use Illuminate\Http\Request;

class KartonPregledController extends Controller
{
    public function index($karton_id){

        $pregledi= Pregled::get()->where('karton_id', $karton_id);
        if(is_null($pregledi))
            return response()->json('Nije pronadjeno.', 404 );

        return new PregledCollection($pregledi);
        //return response()->json($pregledi);
    }
}
