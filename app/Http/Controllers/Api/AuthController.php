<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\RefreshToken;
use Laravel\Passport\Token;
use App\Models\User;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use DB;

class AuthController extends Controller
{
    public function register(RegistrationRequest $request){

        try{
         
          $name = $request->input('name');
          $email = $request->input('email');
          $password = $request->input('password');
        
  
          $UserCredentials = [
              'name'=> $name,
              'email' => $email,
              'password' =>  Hash::make($password)
          ];
  
          $User = User::create($UserCredentials);
  
          $response = [
              'notify' => 'Your account has been created',
              'token' => $User->createToken('USER')->accessToken
          ];
  
        return response()->json($response, 200);

       } catch(\Exception $exception){
          return response()->json(['message'=> $exception->getMessage()],400);
       }
      }



      public function login(LoginRequest  $request){

        try{
               $email = $request->input('email');
               $password = $request->input('password');
   
               $UserCredentials = [
                   'email' => $email,
                   'password' => $password
               ];
   
               if(Auth::Attempt($UserCredentials)){
                   
                  
                   $User = Auth::User();
   
                   $response = [
                       'message' => 'You are logged in',
                       'token' =>$User->createToken('USER')->accessToken,
                       'status' => 'success'
                   ];
   
                 return response()->json($response, 200);
               }
   
               return response()->json(['message'=>'Invalid email or password'], 400);
   
           } catch(\Exception $exception){
               return response()->json(['message'=> $exception->getMessage()],400);
           }    
       }




       public function logout(){

        $user = Auth::user();
        $tokens = $user->tokens->pluck('id');

        Token::whereIn('id', $tokens)->update(['revoked'=> true]);
        RefreshToken::whereIn('access_token_id', $tokens)->update(['revoked' => true]);

        DB::table('oauth_access_tokens')->where('user_id', $user->id)->delete();

        $response = [
            'notification' => 'You are logged out !',
        ];

        return Response()->json($response, 200);
    }
   
}
