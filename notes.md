# Solid Notes

VIEW = FN(STATE)

rendered html = Component(state)

state => JSON => database, local storage/cookies, container, context, local component, props

props in -> render out

companies

/companies/jahsgfdasjhdgasdjhasbd

pages/companies/[_id].jsx

Company({\_id, name, employees})

<Company {...{\_id, name, employees}}>
{employees.map(employee => <Employee {...employee}/>)}
</Company>

<Employee {...{name, tags}}>
<Tag />
</Employee>

{
\_id: "jahsgfdasjhdgasdjhasbd",

    name: "kjshfksudfhb",
    employees: [
      {
        name: "asdasdas",
        tags: [{
          label: "zkjdhcaskjdh"
        },{
          label: "567865rtutrrty"
        }]
      }
    ]

}
