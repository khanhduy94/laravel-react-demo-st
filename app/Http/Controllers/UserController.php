<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();
         if (!$user) {
            return response([
            'message' => ['These credentials do not match our records.']
            ], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return response([
            'message' => ['Invalid password.']
        ], 404);
        }       

     $token = $user->createToken('my-app-token')->plainTextToken;
    $response = [
        'user' => $user,
        'token' => $token
    ];

     return response($response, 201);
    }

    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response($validator->messages(), 404);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response([
                'code' =>   ['existing_email'],
                'message' => ['Already had the email address. Please use the other one']
            ], 404);
        }

        $newUsers = new User();
        $newUsers->email = $request->email;
        $newUsers->name = $request->name;
        $newUsers->password = $request->password;
        $newUsers->created_at = time();

        $newUsers->save();
        return response()->json('Success', 201);
    }
}