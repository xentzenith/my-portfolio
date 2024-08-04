// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//This is built-in API route support in Next.js. You can create API routes in the pages/api directory. These API routes can be deployed as Serverless Functions (also known as Lambdas).


/*IGNORE*/


export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
