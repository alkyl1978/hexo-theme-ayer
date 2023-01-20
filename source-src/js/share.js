
function generate(url, opts) {
  var url = url.replace(/<%-sUrl%>/g, encodeURIComponent(opts.sUrl))
    .replace(/<%-sTitle%>/g, encodeURIComponent(opts.sTitle))
    .replace(/<%-sDesc%>/g, encodeURIComponent(opts.sDesc))
    .replace(/<%-sPic%>/g, encodeURIComponent(opts.sPic));
  window.open(url);
}

function showWX() {
  $('.wx-share-modal').addClass('in ready')
  $('#share-mask').show()
}

function hideWX() {
  $('.wx-share-modal').removeClass('in ready')
  $('#share-mask').hide()
}

function handleClick(type, opts) {
  } if (type === 'google') {
    generate('https://plus.google.com/share?url=<%-sUrl%>', opts)
  }

const share_init = () => {
  let $sns = document.querySelectorAll('.share-sns');
  if (!$sns || $sns.length === 0) return;
  let sUrl = window.location.href;
  let sTitle = document.querySelector('title').innerHTML;
  let $img = document.querySelectorAll('.article-entry img');
  let sPic = $img.length ? document.querySelector('.article-entry img').getAttribute('src') : '';
  if ((sPic !== '') && !/^(http:|https:)?\/\//.test(sPic)) {
    sPic = window.location.origin + sPic
  }
  $sns.forEach(($em) => {
    $em.onclick = (e) => {
      let type = $em.getAttribute('data-type')
      handleClick(type, {
        sUrl: sUrl,
        sPic: sPic,
        sTitle: sTitle,
        sDesc: sTitle
      })
    }
  })

  document.querySelector('#mask').onclick = hideWX
  document.querySelector('.modal-close').onclick = hideWX
}

share_init()