const links = [
    { title: "React Documentation", tag: "Learning" },
    { title: "JavaScript Tutorial", tag: "Learning" },
    { title: "YouTube Music", tag: "Entertainment" },
    { title: "Node.js Documentation", tag: "Learning" },
    { title: "Instagram", tag: "Social" }
];

function searchLinks(links,searchText) {

    return links.filter(link => link.title.trim().toLowerCase().includes(searchText.toLowerCase()));
}

// console.log(searchLinks(links, "javascript"));
// console.log(searchLinks(links, "node"));
// console.log(searchLinks(links, "music"));
// console.log(searchLinks(links, "python"));
console.log(searchLinks(links, " javascript ")); // should return the link with title "JavaScript Tutorial"