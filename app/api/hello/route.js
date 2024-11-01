export async function GET() {
  // const res = await fetch("https://api.vercel.app/blog");
  // const data = await res.json();

  const data = [
    {
      id: 1,
      title: "Lorem Ipsum - What Is It and How to Use It?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "John Doe",
      date: "2023-08-01",
      category: "Technology",
    },
    {
      id: 2,
      title: "The Benefits of Regular Exercise",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "Jane Smith",
      date: "2023-07-25",
      category: "Health & Fitness",
    },
    {
      id: 3,
      title: "Mastering the Art of Cooking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      author: "Michael Johnson",
      date: "2023-07-18",
      category: "Food & Cooking",
    },
  ];

  return Response.json({ data });
}

export async function POST(request) {
  const body = await request.json();
  // console.log(body);

  console.log(body);
  // body.push(newBody);
  // return new Response("OK");
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}

//End Point Post
// export async function POST(request) {
//   const body = await request.json();

//   const newBody = {
//     text: body.text,
//   };

//   // body.push(newBody);
//   return new Response(JSON.stringify(newBody), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 201,
//   });
// }
