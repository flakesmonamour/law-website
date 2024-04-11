fetch(`db.json`)
.then((response) => response.json())
.then(data =>{
    const usersList = document.getElementById("usersList");
    data.forEach(user =>{
        const listItem = document.createElement("li");
        listItem.textContent = '${user.id}-${user.name}-${user.email}-${user.lawyer}';
        usersList.appendChild(listItem);
    });
})
.catch(error=>{
    console.error('Error fetching data;error');
});
 const menuItems = document.querySelectorAll(".menu-items-li");
 menuItems.forEach(function(item){
    item.addEventListener("click",function(){
        console.log("Menu item clicked",item.textContent);
    });
 })
