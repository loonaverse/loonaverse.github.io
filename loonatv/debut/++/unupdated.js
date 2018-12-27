( function() {
//    console.log("Unupdated.js Loaded!");
//    var i;
//    for(i=411; i<=437; i++) {
//        var epid = document.querySelectorAll(`[id^="ep${i}]"`);
//        epid.innerHTML = "Not Updated Yet...";
    
    const nodes = document.querySelectorAll('[id^="ep"]')

    // Make an array from the NodeList containing our tags
    const tags = Array.from(nodes)

    // Filter tags by ID
    const filtered = tags.filter(tag => {

    // Strip non-digit characters from the ID to find the number
    const number = tag.id.replace(/\D/g, '')

    // Keep only tags with a number higher than 5 and less than 10
    return 454 <= number && number <= 465

  })

  // Do something with the matching tags
  filtered.forEach(tag => tag.innerHTML = "Not Updated Yet...")
//}
})();