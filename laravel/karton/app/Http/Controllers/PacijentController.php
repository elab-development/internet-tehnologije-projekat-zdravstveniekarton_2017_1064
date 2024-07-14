<?php

namespace App\Http\Controllers;

use App\Http\Resources\PacijentCollection;
use App\Http\Resources\PacijentResource;
use App\Models\Pacijent;
use App\Models\User;
use Illuminate\Http\Request;

class PacijentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pacijenti = Pacijent::all();
        //return $pacijenti;
        //return PacijentResource::collection($pacijenti);
        return new PacijentCollection($pacijenti);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($ime, $email, $lozinka, $datum_rodjenja, $telefon)
    {
        // $pacijent = Pacijent::create([  'ime'=>$ime,
        //                                 'email'=>$email,
        //                                 'lozinka'=>$lozinka,
        //                                 'datum_rodjenja'=>$datum_rodjenja,
        //                                 'telefon'=>$telefon]);

        // $pacijent->save();
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
    public function show($pacijent_id)
    {
        $pacijent=Pacijent::find($pacijent_id);
        if(is_null($pacijent))
            return response()->json('Nije pronadjeno.', 404);
        // return response()->json($pacijent);

        return new PacijentResource($pacijent);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pacijent $pacijent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pacijent $pacijent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pacijent $pacijent)
    {
        //
    }
}
