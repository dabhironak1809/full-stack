 
const single = async ({ params }) => {

  // const ps = await params;
  const {id} = await params;

  // console.log(ps);
  // console.log(id);

  return <div>single page app routing : {id} </div>
};

export default single;