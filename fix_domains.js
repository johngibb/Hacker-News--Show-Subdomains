var getDomain = function(url){
	return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
}

var links = $('td.title a');

links.each(function(){
	var link = $(this);
	var domain_span = link.next('span.comhead');
	
	var url = link.attr('href');
	var domain = getDomain( url );
	var newtext = ' (' + domain + ')';
	
	domain_span.html(newtext);
});