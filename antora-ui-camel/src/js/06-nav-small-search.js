;(function () {
  'use strict'

  window.addEventListener('resize', function () {
    window.location.reload()
  })

  var states = {
    'navbar-search': false,
    'navigate-searchbar': false,
  }

  var domHandles = {
    'nav-logo': document.getElementsByClassName('nav-logo')[0],
    'nav-fill': document.getElementsByClassName('navbar-fill')[0],
    'nav-tools': document.getElementsByClassName('navbar-tools')[0],
    'nav-burger': document.getElementsByClassName('navbar-burger')[0],
    'search-cancel': document.getElementById('search-cancel'),
    'search-result': document.getElementById('search_results'),
    search: document.getElementById('search'),
    'nav-menu': document.getElementsByClassName('navbar-menu')[0],
    'nav-search': document.getElementsByClassName('navbar-search')[0],
  }

  var search = document.getElementsByClassName('search-mobile')[0]
  var navigator = document.getElementById('navigate-searchbar')
  var navWidth = document.getElementsByClassName('navbar')[0].offsetWidth
  var condition = navWidth < 1024

  function toggleMenuToSearch () {
    states['navbar-search'] = states['navigate-searchbar'] = true
  }

  function toggleSearchToMenu () {
    states['navbar-search'] = states['navigate-searchbar'] = false
  }

  function handleDOMStyle () {
    if (states['navbar-search'] && states['navigate-searchbar']) {
      domHandles['nav-logo'].style.display = domHandles['nav-fill'].style.display = 'none'
      domHandles['nav-tools'].style.display = 'none'
      domHandles['nav-burger'].style.display = 'none'
      domHandles['search-cancel'].style.bottom = 'calc(50% - 0.05rem)'
      domHandles['search'].style.display = navigator.style.display = 'block'
      domHandles['search-result'].style.width = domHandles['search'].style.width = (0.85 * navWidth).toString() + 'px'
      if (navWidth >= 1024 && navWidth <= 1220) {
        domHandles['nav-menu'].style.display = 'none'
        domHandles['nav-search'].style.display = 'block'
        domHandles['search-result'].style.width = domHandles['search'].style.width = (0.92 * navWidth).toString() + 'px'
      } else if (navWidth >= 565) {
        domHandles['search-result'].style.width = domHandles['search'].style.width = (0.9 * navWidth).toString() + 'px'
      }
    } else {
      domHandles['nav-logo'].style.display = domHandles['nav-fill'].style.display = 'block'
      domHandles['nav-tools'].style.display = 'inline-flex'
      domHandles['search-cancel'].style.display = domHandles['search'].style.display = 'none'
      domHandles['search'].value = ''
      navigator.style.display = 'none'
      if (condition) {
        domHandles['nav-burger'].style.display = 'block'
      } else {
        domHandles['nav-menu'].style.display = 'inline-flex'
        domHandles['nav-search'].style.display = 'none'
      }
    }
  }

  if (navWidth <= 1220) {
    search.addEventListener('click', function () {
      toggleMenuToSearch()
      handleDOMStyle()
    })
    navigator.addEventListener('click', function () {
      toggleSearchToMenu()
      handleDOMStyle()
    })
  }
})()
