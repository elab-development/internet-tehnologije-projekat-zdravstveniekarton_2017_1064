<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LekarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = 'lekar';
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return[
            'id'=> $this->resource->id,
            'ime'=> $this->resource->ime,
            'email'=> $this->resource->email,
            'datum_rodjenja'=> $this->resource->datum_rodjenja,
            'telefon'=> $this->resource->telefon,
            'specijalizacija'=> $this->resource->specijalizacija
        ];
    }
}
