<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PregledResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='pregled';
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);

        return[
            //id,simptomi, dijagnoza, terapija, termin, karton
            'id' => $this->resource->id,
            'simptomi'=> $this->resource->simptomi,
            'dijagnoza'=> $this->resource->dijagnoza,
            'terapija'=> $this->resource->terapija,
            'termin'=> new TerminResource($this->resource->termin),
            'karton'=>new KartonResource($this->resource->karton)
        ];
    }
}
