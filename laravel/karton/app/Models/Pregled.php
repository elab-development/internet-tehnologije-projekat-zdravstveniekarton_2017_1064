<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pregled extends Model
{
    use HasFactory;

    protected $fillable = [
        'simptomi',
        'dijagnoza',
        'terapija'
    ];


    function termin(){
        return $this->belongsTo(Termin::class);
    }

    function karton(){
        return $this->belongsTo(Karton::class);
    }
   
}
