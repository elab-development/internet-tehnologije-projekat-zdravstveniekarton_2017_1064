<?php

namespace App\Http\Controllers;

use App\Http\Resources\PregledCollection;
use App\Http\Resources\PregledResource;
use App\Models\Pregled;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PregledController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pregledi = Pregled::all();
        return new PregledCollection($pregledi);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'simptomi'=>'required|string|max:255',
            'dijagnoza'=>'required|string',
            'terapija'=>'required|string|max:255',
            'termin_id'=>'required',
            'karton_id'=>'required' 
        ]); 

        if($validator->fails())
        return response()->json($validator->errors());

        $pregled = Pregled::create([  
            'simptomi'=>$request->simptomi,
            'dijagnoza'=>$request->dijagnoza,
            'terapija'=>$request->terapija,
            'termin_id'=>$request->termin_id,
            'karton_id'=>$request->karton_id
        ]);

        return response()->json(['Pregled je kreiran uspesno.', new PregledResource($pregled) ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($pregled_id)
    {
        $pregled = Pregled::find($pregled_id);
        if(is_null($pregled))
            return response()->json('Nije pronadjeno.', 404);
        return new PregledResource($pregled);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pregled $pregled)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pregled $pregled)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pregled $pregled)
    {
        //
    }
}
