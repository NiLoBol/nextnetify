import React from "react";

const getTodo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch todo");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading todo: ", error);
  }
};

async function page() {
  const {Todos} = await getTodo();
  return (
    <div>
      {Todos.map((data, index) => (
        <div key={index} className="flex flex-row gap-5 p-10 bg-yellow-200">
          <p className="text-center text-4xl">{data.title}</p>
        </div>
      ))}
    </div>
  );
}

export default page;
