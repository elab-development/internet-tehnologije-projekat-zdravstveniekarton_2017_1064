<?php

namespace App\Http\Controllers;

use App\Http\Resources\KartonCollection;
use App\Http\Resources\KartonResource;
use App\Models\Karton;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class KartonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kartoni = Karton::all();
        return new KartonCollection($kartoni);
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
            'alergije' => 'required|string|max:255',
            'pacijent_id' => 'required'
        ]);

        if($validator->fails())
        return response()->json($validator->errors());

        $karton = Karton::create([
            'alergije'=>request()->alergije,
            'pacijent_id'=>request()->pacijent_id
         ]);
      
        return response()->json(['Karton je uspesno kreiran', new KartonResource($karton)]);
    }

    /**
     * Display the specified resource.
     */
    public function show($karton_id)
    {
        $karton = Karton::find($karton_id);
        if(is_null($karton))
            return response()->json('Nije pronadjeno.', 404);
        return new KartonResource($karton);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Karton $karton)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Karton $karton)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Karton $karton)
    {
        //
    }
}
