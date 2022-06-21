import Header from "../components/Header";
import Box from "../components/Box";
import clientPromise from "../server/mongodb";

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("crud");

  let tests = await db.collection("tests").find({}).toArray();
  tests = JSON.parse(JSON.stringify(tests));

  return {
    props: { tests },
  };
}

export default function Home(props) {
  return (
    <>
      <Header />
      <Box itemsRender={props.tests} />
    </>
  );
}

