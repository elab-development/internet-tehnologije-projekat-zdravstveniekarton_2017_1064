<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Karton;
use App\Models\Lekar;
use App\Models\Pacijent;
use App\Models\Patient;
use App\Models\Pregled;
use App\Models\Sestra;
use App\Models\Termin;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::truncate();
        User::factory(10) ->create();
       
        $pacijent1 = Pacijent::create(['ime'=>"Pera Peric",
                                        'email'=>"perap@yahoo.com",
                                        'datum_rodjenja'=>"10.05.1996.",
                                         'telefon'=>"1234567"]);
        
        $pacijent2 = Pacijent::create(['ime'=>"Mira Lazic",
                                         'email'=>"miral@yahoo.com",
                                         'datum_rodjenja'=>"11.09.1996.",
                                         'telefon'=>"16574567"]);
      
        $karton1 = Karton::create(['alergije'=>"nema", 'pacijent_id'=>1]);
        $karton2 = Karton::create(['alergije'=>"penicilin", 'pacijent_id'=>2]);

        $lekar1 = Lekar::create(['ime' => "Milena Stojic" , 
                'email' => "milenas@yahoo.com", 
                'datum_rodjenja' => "12.06.1984.", 'telefon' => "06458971",
                'specijalizacija' => "Opsta praksa" ]);

        $lekar2 = Lekar::create(['ime' => "Dusan Micic" , 
                'email' => "dusanmicic@gmail.com", 
                'datum_rodjenja' => "10.02.1968.", 'telefon' => "2134568",
                'specijalizacija' => "Endokrinolog" ]);

        $lekar3 = Lekar::create(['ime' => "Dusica Bursic" , 
                'email' => "dusicabursic@gmail.com", 
                'datum_rodjenja' => "07.02.1986.", 'telefon' => "12569856",
                'specijalizacija' => "Internista" ]);

        $lekar4 = Lekar::create(['ime' => "Svetozar Jokic" , 
                'email' => "svetozarjokic@gmail.com", 
                'datum_rodjenja' => "31.08.1973.", 'telefon' => "7895620",
                'specijalizacija' => "Opsta praksa" ]);

        
        $sestra1 = Sestra::create(['ime' => "Dragica Pejin" , 
                'email' => "dragicapejin@yahoo.com", 
                'datum_rodjenja' => "08.10.1975.", 'telefon' => "011215489" ]);

        $sestra2 = Sestra::create(['ime' => "Jovana Bozovic" , 
                'email' => "jokaboza@gmail.com", 
                'datum_rodjenja' => "12.12.1973", 'telefon' => "1234565" ]);
        
        $sestra3 = Sestra::create(['ime' => "Smilja Grbic" , 
                'email' => "smiljag@gmail.com", 
                'datum_rodjenja' => "12.10.1959", 'telefon' => "45029657" ]);

       
        $termin1 = Termin::create([ 'datum' => "18.07.2024", 'vreme' => "08:00",
                'lekar_id' => 2 , 'sestra_id' => 2]);

        $termin2 = Termin::create([ 'datum' => "18.07.2024", 'vreme' => "08:30",
                'lekar_id' => 1 , 'sestra_id' => 1]);
        $termin3 = Termin::create([ 'datum' => "18.07.2024", 'vreme' => "09:00",
                'lekar_id' => 2 , 'sestra_id' => 2]);
        
        $termin4 = Termin::create([ 'datum' => "19.07.2024", 'vreme' => "12:00",
                'lekar_id' => 4 , 'sestra_id' => 3]);
        


        $pregled1 = Pregled::create(['simptomi' => "bol u grlu, kasalj, temperatura",
                'dijagnoza' => 'prehlada', 'terapija' => "penicilin, panklav, sirup za kasalj", 
                'termin_id' => 1, 'karton_id' => 1]);
        $pregled2 = Pregled::create(['simptomi' => "umor, nesanica",
                'dijagnoza' => 'stres', 'terapija' => "", 
                'termin_id' => 2, 'karton_id' => 2]);
        $pregled3 = Pregled::create(['simptomi' => "umor, nesanica, akne",
                'dijagnoza' => 'insulinska rezistencija', 'terapija' => "glukofaz, ishrana", 
                'termin_id' => 3, 'karton_id' => 2]);







        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
