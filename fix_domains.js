function getDomain(url) {
  url = url.replace(/^https?:\/\//, '');
  url = url.replace(/\/.*$/, '');
  url = url.replace(/^www\./, '');
  return url;
}

$('td.title a').each(function(){
  var url = $(this).attr('href');
  var domain = ' (' + getDomain(url) + ')';
  $(this).next('span.comhead').html(domain)
});