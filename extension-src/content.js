$(() => {
  if (
    $('meta[name=description]').attr('content') !== 'Redmine' ||
    $('body.action-diff').length < 1
  ) {
    return;
  }

  let textdiff = $('.text-diff').css({
    'white-space': 'pre',
    'font-family': 'monospace'
  });
  textdiff
    .html(textdiff.html().replace(/<br><br>/g, '\n\n'))
    .find('br')
    .remove();
});
