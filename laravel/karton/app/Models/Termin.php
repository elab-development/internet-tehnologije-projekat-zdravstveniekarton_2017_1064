<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Termin extends Model
{
    use HasFactory;
    protected $fillable=[
        'datum',
        'vreme',
        'lekar_id',
        'sestra_id'
    ];

    function lekar(){
        return $this->belongsTo(Lekar::class);
    }

    function sestra(){
        return $this->belongsTo(Sestra::class);
    }

   //treba li i ovo?
    function pregled(){
        return $this->hasOne(Pregled::class);
    }
}
