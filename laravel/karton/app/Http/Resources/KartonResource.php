<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KartonResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap= 'karton';
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return[
          'id' => $this->resource->id,
          'alergije'=> $this->resource->alergije,
          'pacijent'=> new PacijentResource($this->resource->pacijent)
          
        ];
    }
}
