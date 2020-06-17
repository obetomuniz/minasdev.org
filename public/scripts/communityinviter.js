window.CommunityInviterAsyncInit = function () {
  CommunityInviter.init({
    app_url: "minas-dev",
    team_id: "minasdev",
  })
}
;(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) {
    return
  }
  js = d.createElement(s)
  js.id = id
  js.src = "https://communityinviter.com/js/communityinviter.js"
  fjs.parentNode.insertBefore(js, fjs)
})(document, "script", "Community_Inviter")
