<?php

namespace App\Http\Controllers;

use App\Http\Resources\TerminCollection;
use App\Http\Resources\TerminResource;
use App\Models\Termin;
use Illuminate\Http\Request;

class TerminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $termini = Termin::all();
        return new TerminCollection($termini);
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
    public function show($termin_id)
    {
        $termin = Termin::find($termin_id);
        if(is_null($termin))
            return response()->json('Nije pronadjeno.', 404);
        return new TerminResource($termin);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Termin $termin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Termin $termin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Termin $termin)
    {
        //
    }
}
