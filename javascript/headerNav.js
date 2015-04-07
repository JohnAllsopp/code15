var headerNav = {
	
	pageScrolled: function(evt){
	
		var heroElement = document.querySelector('#hero')
		var headerElement = document.querySelector('header')
		var heroHeight = heroElement.offsetHeight + heroElement.offsetTop
		if ( heroHeight < window.scrollY){
			headerElement.classList.add("reversed")
		}
	
		else {
			headerElement.classList.remove("reversed")
		}
	}

}

window.addEventListener("scroll", headerNav.pageScrolled, false)
