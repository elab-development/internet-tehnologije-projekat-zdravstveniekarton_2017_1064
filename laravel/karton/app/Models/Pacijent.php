<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Pacijent extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'ime',
        'email',      
        'lozinka',
        'datum rodjenja',
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

}
