import React from 'react'

async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`)
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
      });
  console.log(res);
  return (
    <div>
      {res.Todos.map(data=>{
        return(
          <div className='flex flex-row gap-5 p-10 bg-yellow-200'>
            <input type="checkbox" value={data.clickbox} />
            <p className='text-center text-4xl'>{data.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default page
