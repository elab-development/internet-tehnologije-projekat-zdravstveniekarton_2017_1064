<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TerminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='termin';
    public function toArray(Request $request): array
    {
       // return parent::toArray($request);
       return[
        //id,datum, vreme, lekar, sestra
            'id' => $this->resource->id,
            'datum'=> $this->resource->datum,
            'vreme'=> $this->resource->vreme,
            'lekar'=> new LekarResource($this->resource->lekar),
            'sestra'=> new SestraResource($this->resource->sestra)
       ];
    }
}
