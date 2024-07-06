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
        'lozinka',
        'datum rodjenja',
        'telefon'
    ];

    protected $hidden=[
        'lozinka'
    ];
    protected $casts=[
        'lozinka' => 'hashed' 
    ];

    function termini(){
        return $this->hasMany(Termin::class);
    }
}
