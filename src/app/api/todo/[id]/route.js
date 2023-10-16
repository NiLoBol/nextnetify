import connectMongoDB from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Todo.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Todos updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const Todos = await Todo.findOne({ _id: id });
  if (!Todos) {
    return new Response('Todo not found', { status: 404 });
  }
  Todos.clickbox = !Todos.clickbox;
  await Todos.save();
  return NextResponse.json({ Todos }, { status: 200 });
}
