<?php

namespace App\Http\Controllers;

use App\Http\Resources\PregledCollection;
use App\Http\Resources\PregledResource;
use App\Models\Pregled;
use Illuminate\Http\Request;

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
        //
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
