<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function Laravel\Prompts\table;

class Sestra extends Model
{
    use HasFactory;

    protected $fillable=[
        'ime',
        'email',      
        'datum_rodjenja',
        'telefon'
    ];

    
    

    function termini(){
        return $this->hasMany(Termin::class);
    }
}
