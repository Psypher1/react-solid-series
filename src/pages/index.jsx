import Meta from "@components/Meta";
import { useState } from "react";

const json = {
  _id: "1",
  name: "company 1",
  employees: [
    {
      name: "employee 1",
      tags: [
        {
          label: "label 1",
        },
        {
          label: "label 2",
        },
      ],
    },
  ],
};

function Company({ _id, name, employees, onChange = () => {} }) {
  return (
    <div className="flex flex-col gap-2">
      <div>ID: {_id}</div>
      <div>
        Name:{" "}
        <input
          className="text-gray-900 p-2"
          type="text"
          value={name}
          onChange={(e) =>
            onChange((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}

export default function Home({ company }) {
  // if prop and state are the same (company), underscore the inner
  const [_company, setCompany] = useState(company);
  return (
    <>
      <Meta
        pageMeta={{
          title: "SOLID Principles",
          description: "",
        }}
      />
      <div className="container mx-auto min-h-screen p-20">
        <h1 className="p-4 text-4xl font-semibold">S.O.L.I.D.</h1>
        <div className="border border-gray-600 mb-8" />
        <Company {..._company} onChange={(company) => setCompany(company)} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    // props is an object

    props: {
      company: {
        _id: "1",
        name: "company 1",
        employees: [
          {
            name: "employee 1",
            tags: [
              {
                label: "label 1",
              },
              {
                label: "label 2",
              },
            ],
          },
        ],
      },
    },
  };
}
