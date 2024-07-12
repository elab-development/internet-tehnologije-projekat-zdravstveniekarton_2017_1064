<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lekar extends Model
{
    use HasFactory;

    protected $fillable=[
        'ime',
        'email',
        'lozinka',
        'datum_rodjenja',
        'telefon',
        'specijalizacija'
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
