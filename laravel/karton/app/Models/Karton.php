<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Karton extends Model
{
    use HasFactory;

    protected $fillable=[
        'alergije'
    ];

    function pacijent(){
        return $this->belongsTo(Pacijent::class);
    }
    
    function pregledi(){
        return $this->hasMany(Pregled::class);
    }

   
}
