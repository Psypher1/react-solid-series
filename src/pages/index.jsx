import Meta from "@/ui/meta";

import Company from "@/features/company";

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

//* generalised component - TextField
/* We can change the onChange functionality from the outside
  what happens when onChange isn't determined by the component.
  Behaviour isn't tightly coupled to the compoenent
*/

//* COMPONENTS THAT HANDLE DIFFERENT PARTS OF YOUR STATE

// onChange does not make state change, It notifies up the chain that this thing changed  - Employee

export default function Home({ company }) {
  // if prop and state are the same (company), underscore the inner
  // const [_company, setCompany] = useState(company);
  // company is json object - can't fuck with it or you destroy it everywhere
  return (
    <>
      <Meta pageMeta={{ title: "Solid" }} />
      <div className="container mx-auto min-h-screen p-20">
        <h1 className="p-4 text-4xl font-semibold">S.O.L.I.D.</h1>
        <div className="border border-gray-600 mb-8" />
        <Company {...company} />
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
          {
            name: "employee 2",
            tags: [
              {
                label: "excellent",
              },
              {
                label: "punctual",
              },
            ],
          },
        ],
      },
    },
  };
}
