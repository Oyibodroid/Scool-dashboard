// const searchInput = document.querySelector("#searchInput");

// searchInput.addEventListener("change", function () {
//   let filter = this.value.toUpperCase();
//   let items = document.querySelectorAll(".row");
//   let parent = document.querySelectorAll('.col')
//   console.log(items);

//   items.forEach(function (item) {
//     let text = item.textContent;
//     console.log(text);
//     if (text.toUpperCase().indexOf(filter) > -1) {
//       this.item.parentElement.style.display = "";
//       console.log(this.item.parentNode);
//     } else {
//         item.parentElement.style.display = "none";
//     }
//   });
// });


// console.log(searchInput);




document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchInput');
    const table = document.querySelector('.table');
    const rows = table.querySelectorAll('.col');
    
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();

        rows.forEach(row => {
            const cells = row.querySelectorAll('.name');
            let isMatch = false;

            cells.forEach(cell => {
                if (cell.textContent.toLowerCase().includes(query)) {
                    isMatch = true;
                    console.log(cell.textContent);
                }
            });

            if (isMatch) {
                row.style.display = ''; // Show the row
            } else {
                row.style.display = 'none'; // Hide the row
            }
        });
    });
});
