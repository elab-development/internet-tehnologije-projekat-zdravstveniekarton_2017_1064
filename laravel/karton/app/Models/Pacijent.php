<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pacijent extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guarded =[];

    protected $fillable = [
        'ime',
        'email',      
        'lozinka',
        'datum_rodjenja',
        'telefon'
    ];

    protected $hidden =[
        'lozinka'
     //   'remember_token'
        ];

     protected $casts = [
      // 'email_verified_at' => 'datetime',
        'lozinka' => 'hashed'
    ];

    function karton(){
        return $this->hasOne(Karton::class);
    }


}
