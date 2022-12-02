<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        return response(Product::all(),200);
    }

    public function find($productId) {
        return response(Product::find($productId), 200);
    }

    public function store(Request $request) {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function update(Request $request, Product $product) {
        $product->update($request->all());
        return response()->json($product, 200);
    }
 
    public function delete(Product $product) {
        $product->delete();
        return response()->json(null, 204);
    }

}
