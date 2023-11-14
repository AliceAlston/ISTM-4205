const data = [
    { name: "Pesto Pasta: High Protein", link: "https://www.bulkbites.com/bodybuildingrecipes/breakfast-pesto-chicken-pasta-1391" },
    { name: "Banana Bread: High Protein", link: "https://thebigmansworld.com/protein-banana-bread/" },
    { name: "Fried Rice: Low Calorie", link: "https://loseweighteatpizza.com/low-calorie-fried-rice-easy-healthy-fast/" },
    { name: "Overnight Oats: Low Calorie", link: "https://www.eatingbirdfood.com/low-calorie-overnight-oats/" },
    { name: "Chicken Bowl: High Calorie", link: "https://feelgoodfoodie.net/recipe/chicken-burrito-bowl-cilantro-lime-rice/" },
    { name: "Pad Thai: High Calorie", link: "https://thecleaneatingcouple.com/healthy-chicken-pad-thai/" },
    { name: "Blueberry Muffins: Low Protein", link:"https://thecleaneatingcouple.com/healthy-chicken-pad-thai/" },
    { name: "Whole Wheat Gnocchi: Low Protein", link:"https://nutriciously.com/vegan-gnocchi-recipe/"}
];


function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchInput));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.name;
        link.href = item.link;
        link.target = "_blank";
        li.appendChild(link);
        results.appendChild(li);
    });
}
document.getElementById('searchInput').addEventListener('input', performSearch);
