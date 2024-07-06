<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Termin extends Model
{
    use HasFactory;
    protected $fillable=[
        'datum',
        'vreme'
    ];

    function lekar(){
        return $this->belongsTo(Lekar::class);
    }

    function sestra(){
        return $this->belongsTo(Sestra::class);
    }
}
