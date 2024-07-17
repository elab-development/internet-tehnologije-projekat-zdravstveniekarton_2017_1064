<?php

namespace App\Http\Controllers;

use App\Http\Resources\PacijentCollection;
use App\Http\Resources\PacijentResource;
use App\Models\Pacijent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

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
        //
    }
    /**
     * Store a newly created resource in storage.
     */
    //post request cuvanje u bazi
    public function store(Request $request)
    {
       
        $validator = Validator::make($request->all(),[
            'ime'=>'required|string|max:255',
            'email'=>'required|string|email',
            'lozinka'=>'required|string|min:6',
            'datum_rodjenja'=>'required|string',
            'telefon'=>'required|string' 
        ]); 

        if($validator->fails())
        return response()->json($validator->errors());

        $pacijent = Pacijent::create([  'ime'=>$request->ime,
                                        'email'=>$request->email,
                                        'lozinka'=>Hash::make($request->lozinka),
                                        'datum_rodjenja'=>$request->datum_rodjenja,
                                        'telefon'=>$request->telefon]);

       return response()->json(['Pacijent je kreiran uspesno.', new PacijentResource($pacijent) ]);
        
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
        // $validator = Validator::make($request->all(),[
        //     'ime'=>'required|string|max:255',
        //     'email'=>'required|string|email',
        //     'lozinka'=>'required|string|min:6',
        //     'datum_rodjenja'=>'required|string',
        //     'telefon'=>'required|string' 
        // ]); 

        // if($validator->fails())
        // return response()->json($validator->errors());

        // $pacijent->ime= $request->ime;
        // $pacijent->email= $request->email;
        // $pacijent->lozinka= $request->lozinka;
        // $pacijent->datum_rodjenja= $request->datum_rodjenja;
        // $pacijent->telefon= $request->telefon;

        // $pacijent->save();

        // return response()->json('Pacijent je uspesno azuriran.', new PacijentResource($pacijent));

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pacijent $pacijent)
    {
        // $pacijent->delete();

        // return response()->json('Pacijent je obrisan');
    }
}
