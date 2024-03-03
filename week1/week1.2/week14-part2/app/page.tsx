import axios from "axios";

async function getUserData() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserData();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded flex flex-col gap-x-2">
          Name: {userDetails.name}{" "}
          Email: {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
