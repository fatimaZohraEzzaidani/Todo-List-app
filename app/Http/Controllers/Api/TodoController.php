<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\TodoRequest;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function creatTodo(TodoRequest $request){

      $user_name = $request->input('user_name'); 
      $title = $request->input('title');
      $priority = $request->input('priority');

      $Todo = new Todo;
      $Todo->user_name = $user_name;
      $Todo->title = $title;
      $Todo->priority = $priority;
      $Todo->user_id = Auth::user()->id;
      $Todo->save();

      $response = [
          'message' => 'Todo created',
      ];

      return response()->json($response,200);
    }


    public function showTodos(){
       $todos = Todo::orderBy('id', 'DESC')->get();
       return response()->json(['data' => $todos],200);
    }

    //functionaly to be added
    public function todoCompleted(){}
    public function updateTodo(){}
    public function deleteTodo(){}
}
