"use server";

import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.hm6gngk.mongodb.net/?retryWrites=true&w=majority`;

export async function handleMessage(prevState, formData) {
  const newMessage = {
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  };
  if (
    !newMessage.email ||
    !newMessage.email.includes("@") ||
    !newMessage.name ||
    newMessage.name.trim() === "" ||
    !newMessage.message ||
    newMessage.message.trim() === ""
  )
    return { status: "error", message: "Invalid input" };
  try {
    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    try {
      const result = db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return {
        title: "Database Error",
        status: "error",
        message: "Cannot insert into the database!",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      title: "Database Error",
      status: "error",
      message: "Cannot connect to the database!",
    };
  }

  return {
    title: "Success",
    status: "success",
    message: "Message sent successfully",
  };
}
