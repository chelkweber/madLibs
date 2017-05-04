var app = angular.module('directivesMod');

app.directive('headerTitle', function() {
	return {
		restrict: 'E',
		template: '<h1 class="title">Indigo template</h1>',
		replace: false
	}
});

app.directive('headerNav', function() {
	return {
		restrict: 'E',
		template: '<div class="navigation"><a href="index.html">Vestibulum</a><a href="index.html">Suspendisse</a><a href="index.html">Elemen</a><a href="index.html">Maecenas</a><a href="index.html">Sodales</a><div class="clearer"><span></span></div>',
		replace: false
	}
});

app.directive('paragraphOne', function() {
	return {
		restrict: 'C',
		template: '<h1>Porttitor posuere</h1><div class="descr">Jun 13, 2006 by Vulputate</div><p>In hac habitasse platea dictumst. Duis porttitor. Sed vulputate elementum nisl. Vivamus et mi at arcu mattis iaculis. Nullam posuere tristique tortor. In bibendum. Aenean ornare, <a href="index.html">nunc eget pretium</a> porttitor, sem est pretium leo, non euismod nulla dui non diam. Pellentesque dictum faucibus leo. Vestibulum ac ante. Sed in est.</p><cite>Sed sodales nisl sit amet augue. Donec ultrices, augue ullamcorper posuere laoreet, turpis massa tristique justo, sed egestas metus magna sed purus.</cite><p>Aliquam risus justo, mollis in, laoreet a, consectetuer nec, risus. Nunc blandit sodales lacus. Nam luctus semper mi. In eu diam.</p><p>Fusce porta pede nec eros. Maecenas ipsum sem, interdum non, aliquam vitae, interdum nec, metus. Maecenas ornare lobortis risus. Etiam placerat varius mauris. Maecenas viverra. Sed feugiat. Donec mattis <a href="index.html">quam aliquam</a> risus. Nulla non felis sollicitudin urna blandit egestas. Integer et libero varius pede tristique ultricies. Cras nisl. Proin quis massa semper felis euismod ultricies.</p>',
		replace: false
	}
});

app.directive('paragraphTwo', function() {
	return {
		restrict: 'A',
		template: '<h1>Adipiscing</h1><div class="descr">Jun 11, 2006 by Laoreet</div><p>Aliquam risus justo, mollis in, laoreet a, consectetuer nec, risus. Nunc blandit sodales lacus. Nam luctus semper mi. In eu diam. Phasellus rutrum elit vel nisi. Cras mauris nulla, egestas quis, cursus at, venenatis ac, ante. Fusce accumsan enim et arcu. Duis sagittis libero at lacus. Suspendisse lacinia nulla eget urna.</p>',
		replace: false
	}
});

app.directive('list', function() {
	return {
		restrict: 'ACE',
		template:'<ul><li>Tristique</li><li>Aenean</li><li>Pretium</li></ul>',
		replace: false
	}
});

app.directive('search', function() {
	return {
		restrict:'A',
		template: '<h1>Search</h1><form action="index.html"><div><input type="text" name="search" class="styled" /> <input type="submit" value="submit" class="button" /></div></form>',
		replace: false
	}
});

app.directive('sideNavMenu', function() {
	return {
		restrict: 'ACE',
		template: '<h1>Something</h1><ul><li><a href="index.html">pellentesque</a></li><li><a href="index.html">sociis natoque</a></li><li><a href="index.html">convallis</a></li></ul>',
		replace: false
	}
});

app.directive('clearer', function() {
	return {
		restrict: 'E',
		template: '<div class="clearer"><span></span></div>',
		replace: false
	}
});

app.directive('footer', function() {
	return {
		restrict: 'A',
		template: 	'<div class="footer">&copy; 2006 <a href="index.html">Website.com</a>. Valid <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> &amp; <a href="http://validator.w3.org/check?uri=referer">XHTML</a>. Template design by <a href="http://arcsin.se">Arcsin</a></div>',
		replace: false
	}
})


