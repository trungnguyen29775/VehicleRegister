//retrieve
const db = require('../../models')
let data = []
const People = db.People
;(async function()
{
  const people =  await People.findAll({
    attributes: {include:['Identify_card_ID', 'Name','Dob','Address','Nationality','createdAt','updatedAt']}
  })
 try
 {
    const temp = JSON.stringify(people)
    data = JSON.parse(temp)
 }
 catch(err)
 {
   console.log('Some thing went wrong due to ',err)
 }
})()

function Retrieve(id,name,dob,address,nationality,createAt,updateAt)
{
    
    const table = document.querySelector('.data-table')
    console.log(table)
    const tbody = table.childNodes[1]
    const tr = document.createElement("tr")
    const tdId = document.createElement("td")
    tdId.innerHTML=id
    const tdName = document.createElement("td")
    tdName.innerHTML=name
    const tdDob = document.createElement("td")
    tdDob.innerHTML=dob
    const tdAddress = document.createElement("td")
    tdAddress.innerHTML=address
    const tdNationality = document.createElement("td")
    tdNationality.innerHTML=nationality
    const tdcreateAt = document.createElement("td")
    tdcreateAt.innerHTML=createAt
    const tdUpdateAt = document.createElement("td")
    tdUpdateAt.innerHTML=updateAt
    tbody.appendChild(tdId)
    tbody.appendChild(tdName)
    tbody.appendChild(tdDob)
    tbody.appendChild(tdAddress)
    tbody.appendChild(tdNationality)
    tbody.appendChild(tdcreateAt)
    tbody.appendChild(tdUpdateAt)
}

for(let i of data)
{
    Retrieve(data.Identify_card_ID,data.Name,data.Dob,data.Address,data.Nationality,data.createdAt,data.updatedAt)
}