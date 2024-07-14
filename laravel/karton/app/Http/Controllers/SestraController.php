<?php

namespace App\Http\Controllers;

use App\Http\Resources\SestraCollection;
use App\Http\Resources\SestraResource;
use App\Models\Sestra;
use Illuminate\Http\Request;

class SestraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sestre = Sestra::all();

        return new SestraCollection($sestre);
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
    public function show($sestra_id)
    {
        $sestra = Sestra::find($sestra_id);
        if(is_null($sestra))
            return response()->json('Nije pronadjeno.', 404);
        return new SestraResource($sestra);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Sestra $sestra)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sestra $sestra)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sestra $sestra)
    {
        //
    }
}
