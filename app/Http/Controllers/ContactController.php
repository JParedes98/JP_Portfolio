<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'message' => 'required|string||max:500',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->messages()->first(),
            ]);
        }

        Mail::raw($request->message, function ($message) {
            $message
                ->to(config('app.contact_to'))
                ->subject('Contact From My Website!');
        });

        return response()->json([
            'error' => false,
            'message' => 'Message sent successfully.',
        ]);
    }
}
