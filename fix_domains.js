function getDomain(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
}

$('td.title a').each(function(){
  var url = $(this).attr('href');
  var domain = ' (' + getDomain(url) + ')';
  $(this).next('span.comhead').html(domain)
});