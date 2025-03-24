<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PacijentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  
     * @return array
     */

    public static $wrap= 'pacijent';

    public function toArray($request)
    {
        //return parent::toArray($request);

        return[
            'id'=> $this->resource->id,
            'ime'=> $this->resource->ime,
            'email'=> $this->resource->email,
            'datum_rodjenja'=> $this->resource->datum_rodjenja,
            'telefon'=> $this->resource->telefon
        ];
    }
}
