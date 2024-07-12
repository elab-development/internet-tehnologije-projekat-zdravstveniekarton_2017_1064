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

    public function pacijent(){
        return $this->belongsTo(Pacijent::class);
    }
    
     public function pregledi(){
       return $this->hasMany(Pregled::class);
     }

   
}
