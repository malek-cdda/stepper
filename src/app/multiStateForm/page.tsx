"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const d = useRouter();
  console.log(d);
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [page, setPage] = React.useState(null || "");
  const handleMultipage = (e: any) => {
    d.push(`/resizer?name=${e}`);
    setPage(e);
  };
  console.log(state);
  return (
    <div>
      {(() => {
        switch (page) {
          case "1":
            return (
              <div className="flex justify-center h-screen items-center flex-col text-white font-bold text-lg">
                <p>name : {state?.name} </p>
                <p> email: {state?.email}</p>
              </div>
            );
          case "2":
            return (
              <div className="flex justify-center h-screen items-center">
                {" "}
                <input
                  className="border-2 border-black text-black py-3 rounded-xl px-4"
                  value={state?.email || ""}
                  type="email"
                  placeholder="email"
                  onChange={(e) =>
                    setState({
                      ...state,
                      email: e.target.value,
                    })
                  }></input>
                <button
                  onClick={() => handleMultipage("1")}
                  className="bg-blue-500 py-3 px-5 rounded-xl hover:underline hover:bg-blue-400">
                  submit
                </button>
              </div>
            );
          default:
            return (
              <div className="flex justify-center h-screen items-center">
                <input
                  className="border-2 border-black text-black py-3 rounded-xl px-4"
                  type="text"
                  placeholder="name"
                  onChange={(e) =>
                    setState({
                      ...state,
                      name: e.target.value,
                    })
                  }></input>
                <button
                  onClick={() => handleMultipage("2")}
                  className="bg-blue-500 py-3 px-5 rounded-xl hover:underline hover:bg-blue-400">
                  Next
                </button>
              </div>
            );
        }
      })()}
    </div>
  );
};

export default Home;
