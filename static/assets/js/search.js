
  var fuseOptions = {
    shouldSort        : true,
    includeScore      : true,
    includeMatches    : true,
    isCaseSensitive   : false,
    threshold         : 0.96,
    tokenize          : true,
    location          : 0,
    distance          : 100,
    minMatchCharLength: 3,
    maxPatternLength  : 32,
    minMatchCharLength: 3,
    keys: [
      { name:"title",    weight:0.8 },
      { name:"contents", weight:0.2 },
      { name:"tags",     weight:0.8 }
    ]
  }

  var searchQuery = param("s");
  if (searchQuery) {
   
    document.querySelector("#search-query").value = searchQuery;

    var fuse = new Fuse(searchIndex, fuseOptions);
    var results = fuse.search(searchQuery);
    document.querySelector("#search-results").classList.remove("d-none");
    if (results.length == 0) {
      insertMsg(document.querySelector("#search-results-title"), "Aucun article ne correspond aux critères - No post found, with this criteria" );
    }
    else {
      /* console.log({"matches":results}); */
      populateResults(results);
    }
  }
  else {
    insertMsg(document.querySelector("#search-query"), "Veuillez saisir vos critères de recherches - Please enter what you are looking for." );
  }

  /* ------------------------------------------------------
     --- Display the results
     ------------------------------------------------------ */
  function populateResults(results) {
      
    var templateDefinition = document.querySelector("#search-result-template").textContent;
    var items = document.querySelector("#search-results-items");
    var nb = 0;

    /*results.forEach( (value, key) => { */
       /*console.log({"Key":key});
        console.log({"Value": value});*/
    for ( const value of results) {
      /* console.log({"Value": value}); */

        nb++;
        if (nb > 10 || value.score > 0.5)
          break;
          
        if ( value.item.title != "Recherche" && value.item.title != "Search" && value.item.title != "Catalog" ) {
          var output = render(
            templateDefinition, {
              title     : value.item.title,
              link      : value.item.permalink,
              tags      : value.item.tags,
              categories: value.item.categories,
              publish   : value.item.publish,
              section   : value.item.section,
              reading   : value.item.reading,
              summary   : truncate(value.item.contents,50) + "...",
              score     : Math.round((1-value.score)*100).toString() + "%"
              }
            );
          items.innerHTML = items.innerHTML + output;
        }
      }
  }

  /* ------------------------------------------------------
     --- 
     ------------------------------------------------------ */
  function render(templateString, data) {
    var conditionalMatches,conditionalPattern,copy;

    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
      if( data[conditionalMatches[1]] ){
        //valid key, remove conditionals, leave contents.
        copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
      }else{
        //not valid, remove entire section
        copy = copy.replace(conditionalMatches[0],'');
      }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    var key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
  }

  /* ------------------------------------------------------
     --- 
     ------------------------------------------------------ */
  function param(name) {
      return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
  }

  /* ------------------------------------------------------
     --- 
     ------------------------------------------------------ */
  function insertMsg(referenceNode, msg) {
    var newNode = document.createElement("p");
    newNode.textContent = msg;
    newNode.classList.add("search-msg");
    insertAfter(referenceNode, newNode);
  }

  /* ------------------------------------------------------
     --- 
     ------------------------------------------------------ */
  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  /* ------------------------------------------------------
     --- 
     ------------------------------------------------------ */
  function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
  }