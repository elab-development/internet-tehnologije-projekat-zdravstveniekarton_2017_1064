<?php

namespace App\Http\Controllers;

use App\Http\Resources\LekarCollection;
use App\Http\Resources\LekarResource;
use App\Http\Resources\PacijentResource;
use App\Models\Lekar;
use Illuminate\Http\Request;

class LekarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lekari = Lekar::all();
        return new LekarCollection($lekari);
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
    public function show($lekar_id)
    {
        $lekar = Lekar::find($lekar_id);
        if(is_null($lekar))
            return response()->json('Nije pronadjeno.', 404);
        return new LekarResource($lekar);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lekar $lekar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lekar $lekar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lekar $lekar)
    {
        //
    }
}
