import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
  // const data = useLoaderData()
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/beus421")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         // console.log(data)}
  //       });
  //   },[]);

  return (
    <>
    <div className= "w-full flex justify-center">
      <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-gray-100 my-5 pt-3">
        <a
          href="https://github.com/beus421"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={data.avatar_url}
              alt="user image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
              {data.login}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </span>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/beus421");
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
};
