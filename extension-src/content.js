$(() => {
  if (
    $('meta[name=description]').attr('content') !== 'Redmine' ||
    $('body.action-diff').length < 1
  ) {
    return;
  }
  $('.text-diff').css('white-space', 'pre');
});
