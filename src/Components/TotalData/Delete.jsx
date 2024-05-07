// eslint-disable-next-line no-unused-vars
export async function Delete(id) {
  const response = await fetch(`https://techtitannodejs.onrender.com/delete/${id}`, {
    method: "DELETE",
  });
  if (response.status === 200) {
    alert("Data Delete Sucessfull");
     return true;
   
  } else {
    alert(`Data Not deleted `);
    
  }
  return response.json();
}
