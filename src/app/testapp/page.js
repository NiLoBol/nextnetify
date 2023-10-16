import React from "react";

async function page() {
  const {Todos} = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`)
    .then((response) => response.json())
    .then((jsonData) => {
      return jsonData;
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error);
    });
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
