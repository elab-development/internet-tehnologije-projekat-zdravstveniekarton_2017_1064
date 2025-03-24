<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Sanctum\HasApiTokens;
use PhpParser\Node\Stmt\Return_;

class AuthController extends Controller
{
    public function register(Request $request) 
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            // email ogranicenje proverava da l ima @ u sebi
            'email'=>'required|string|max:255|email|unique:users', 
            'password'=>'required|string|min:6',
            'user_type'=>['required', Rule::in(['sestra','lekar','pacijent'])]
        ]);

        if($validator->fails())
            return response()->json(['success' => false, $validator->errors()]);

        $user= User::create([
            'name'=>$request->name,
            'email'=>$request->email,
           // 'password'=>$request->password
            'password'=>Hash::make($request->password),
            'user_type'=>$request->user_type
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data'=>$user, 'access_token'=>$token, 'token_type'=>'Bearer', 'success' => true]);

    }

    public function login(Request $request) {
        if(!Auth::attempt($request->only('email', 'password')))
            return response()->json(['success'=>false]);
        
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json(['success'=>true, 
            'access_token' => $token, 'token_type' => 'Bearer', 'user_type'=> $user->user_type]);
    }

    function logout(){
        auth()->user()->tokens()->delete(); //baca gresku za token ali ta funkcija postoji  
        return[
            'message' => 'Uspesno ste se izlogovali i token je uspesno obrisan.' 
        ];
    }
}
